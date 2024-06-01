import fs from 'fs'

import cheerio, { AnyNode, Cheerio } from 'cheerio'
import dotenv from 'dotenv'
import { JSONSchema4, JSONSchema4TypeName } from 'json-schema'
import { compile } from 'json-schema-to-typescript'

type Element = {
  name: string
  content: string[] | string
  attributes: Record<string, { type: string, required: boolean, docs: string }>
  link: string
  docs?: string
  array: boolean
}

dotenv.config()
fs.mkdirSync('data', { recursive: true })

const SCHEMA_TYPES: string[] =
  ['string', 'number', 'boolean', 'object', 'integer', 'array', 'null', 'any']

// eslint-disable-next-line max-len
const { LOCAL_HTML_PATH } = process.env
const LOCAL_PATH = `${LOCAL_HTML_PATH}/www.w3.org/2021/06/musicxml40/musicxml-reference`
const WEB_BASE_URL = 'https://www.w3.org/2021/06/musicxml40/musicxml-reference'
const TREE_URL = `${WEB_BASE_URL}/element-tree/`
const TREE_PATH = `${LOCAL_PATH}/element-tree/index.html`
const USE_LOCAL = true

const specialTypeMap: Record<string, string> = {
  'string': 'string-type',
  'function': 'function-type',
  'symbol': 'symbol-type',
}

const treeHtml = USE_LOCAL ? fs.readFileSync(TREE_PATH) : await (await fetch(TREE_URL)).text()
const $tree = cheerio.load(treeHtml)

const elements: Element[] = []

const parseTree = async<T extends AnyNode>(node: Cheerio<T>) => {
  const a = node.children('a')[0]
  if (!a) throw new Error('Unexcpected structure: No link found')
  const text = $tree(a).text().replace(/[<>]/g, '')
  const name = specialTypeMap[text] || text
  // console.log(name)
  const existing = elements.find(e => e.name === name)
  if (existing) return existing

  const partwiseNames = ['part', 'measure']
  const referenceNames = ['opus']
  const linkRoute = partwiseNames.includes(text) ? `${text}-partwise`
    : referenceNames.includes(text) ? `${text}-reference`
      : text
  const link = `${WEB_BASE_URL}/elements/${linkRoute}`
  const localPath = `${LOCAL_PATH}/elements/${linkRoute}/index.html`
  const elementHTML = USE_LOCAL ? fs.readFileSync(localPath) : await (await fetch(link)).text()
  const $element = cheerio.load(elementHTML)
  const element = $element('body > .content > main')
  const contentIndex = element.children().index(element.find('h2#content')[0])
  const docs = element.children().slice(3, contentIndex).html() || undefined
  let content: Element['content'] =
    element.children().slice(contentIndex + 1, contentIndex + 2).text()
  if (content === 'Always empty.') content = 'empty'

  const ul = node.children('ul')[0]
  if (ul) {
    content = []
    for (const c of [...$tree(ul).children('li')]) {
      const element = await parseTree($tree(c))
      content.push(element.name)
    }
  }

  const table = element.find('#attributes + table')
  const attributes: Element['attributes'] = {}
  table.find('tr').each((i, tr) => {
    if (i === 0) return
    const tds = $element(tr).find('td')
    const name = $element(tr).find('th').text()
    const type = tds.eq(0).text()
    const required = tds.eq(1).text().includes('Yes')
    const docs = tds.eq(2).html() || ''
    const attr = { type, required, docs }
    attributes[name] = attr
  })

  const ele: Element = {
    name,
    content,
    attributes,
    link,
    docs,
    array: !!ul,
  }
  elements.push(ele)
  return ele
}

const tree = $tree('body > .content > main > ul')
await parseTree(tree)
fs.writeFileSync('data/elements.json', JSON.stringify(elements, null, 2))

/****************************/

const toCamel = (str: string) => str.replace(/[-_:]([a-z])/g, g => g[1].toUpperCase())

const wrapSentence = (str = '', len = 80) =>
  str.replace(new RegExp(`(.{1,${len}})(\\s+|$)`, 'g'), '$1\n').slice(0, -1)

const compileConfig = {
  declareExternallyReferenced: false,
  bannerComment: '',
}

const typeDefs = await Promise.all(elements.map(async element => {
  const { name, docs, attributes, array, content, link } = element
  const schema: JSONSchema4 = {
    title: toCamel(name),
    definitions: {},
    type: 'object',
    properties: {},
    required: [],
    description: `${link}\n\n${wrapSentence(docs)}`,
    additionalProperties: false,
  }
  if (!schema.properties || !schema.definitions) throw new Error('No properties or definitions')
  for (const [kebab, { type, docs, required }] of Object.entries(attributes)) {
    const attrName = toCamel(kebab)
    if (!schema.properties || !schema.definitions) continue
    schema.properties[attrName] = { type: 'string', description: wrapSentence(docs) }
    if (required && Array.isArray(schema.required)) schema.required.push(attrName)
    if (!SCHEMA_TYPES.includes(type)) {
      schema.properties[attrName] = { '$ref': `#/definitions/${type}-value` }
      schema.definitions[`${type}-value`] = { type: 'object' }
    } else schema.properties[attrName] = { type: type as JSONSchema4TypeName }
  }
  if (array) {
    for (const kebab of content as string[]) {
      const type = toCamel(kebab)
      schema.properties[type] = {
        type: 'array',
        items: { '$ref': `#/definitions/${type}` },
      }
      schema.definitions[type] = { type: 'object' }
    }
  } else if (content !== 'empty') {
    const typeName = content as string
    if (!SCHEMA_TYPES.includes(typeName)) {
      schema.properties.v = { '$ref': `#/definitions/${content}-value` }
      schema.definitions[`${typeName}-value`] = { type: 'object' }
    } else schema.properties.v = { type: content as JSONSchema4TypeName }
  }

  return await compile(schema, toCamel(schema.title || 'Element'), compileConfig)
}))


const web = `${WEB_BASE_URL}/data-types`
const local = `${LOCAL_PATH}/data-types/index.html`
const dataTypeHTML = USE_LOCAL ? fs.readFileSync(local) : await (await fetch(web)).text()
const $dataTypes = cheerio.load(dataTypeHTML)
const dataTypes = $dataTypes('body > .content > main > ul')
const ROUTE_EXCEPTION: Record<string, string> = {
  'anyURI': 'xsd-anyURI',
  'date': 'xsd-date',
  'decimal': 'xsd-decimal',
  'ID': 'xsd-ID',
  'IDREF': 'xsd-IDREF',
  'integer': 'xsd-integer',
  'NMTOKEN': 'xsd-NMTOKEN',
  'nonNegativeInteger': 'xsd-nonNegativeInteger',
  'positiveInteger': 'xsd-positiveInteger',
  'string': 'xsd-string',
  'token': 'xsd-token',
}
const dataTypeDefs = await Promise.all(dataTypes.children('li').map(async(i, li) => {
  const name = $dataTypes(li).text()
  const typeName = toCamel(`${name}-value`)
  const route = ROUTE_EXCEPTION[name] || name.replace(/:/g, '-')

  const link = `${WEB_BASE_URL}/data-types/${route}`
  const localPath = `${LOCAL_PATH}/data-types/${route}/index.html`
  const dataTypeHTML = USE_LOCAL ? fs.readFileSync(localPath) : await (await fetch(link)).text()
  const $dataType = cheerio.load(dataTypeHTML)
  const dataType = $dataType('body > .content > main')
  const contentIndex = dataType.children().index(dataType.find('h2#where')[0])
  const description = dataType.children().slice(2, contentIndex).html() || ''

  const schema: JSONSchema4 = {
    title: typeName,
    type: 'string',
    additionalProperties: false,
    description: `${link}\n\n${wrapSentence(description)}`,
  }

  return await compile(schema, typeName, compileConfig)
}))

const defs = [...typeDefs, ...dataTypeDefs]
const schema = '/* eslint-disable max-len */\n\n' + defs.join('\n\n').replace(/;\n/g, '\n')
fs.writeFileSync('data/schema.ts', schema)
