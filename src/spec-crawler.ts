import fs from 'fs'

import { AnyNode, Cheerio, load as loadHtml } from 'cheerio'
import { JSONSchema4, JSONSchema4TypeName } from 'json-schema'
import { Options, compile } from 'json-schema-to-typescript'
import minimist from 'minimist'

import { toCamel, wrapSentence } from '@/util'

type Element = {
  name: string
  content: string[] | string
  attributes: Record<string, { type: string, required: boolean, docs: string }>
  link: string
  docs?: string
  array: boolean
}

const SCHEMA_TYPES: string[] =
  ['string', 'number', 'boolean', 'object', 'integer', 'array', 'null', 'any']


const argv = minimist(process.argv.slice(2))
fs.mkdirSync('data', { recursive: true })

const LOCAL_HTML_PATH = argv.local
const OUTPUT_PATH = 'data/schema.ts'
const ELEMENT_LIST_PATH = 'data/elements.txt'
const LOCAL_PATH = `${LOCAL_HTML_PATH}/www.w3.org/2021/06/musicxml40/musicxml-reference`
const WEB_BASE_URL = 'https://www.w3.org/2021/06/musicxml40/musicxml-reference'
const parse = async(path: string) => {
  const html = LOCAL_HTML_PATH
    ? fs.readFileSync(`${LOCAL_PATH}/${path}/index.html`)
    : await (await fetch(`${WEB_BASE_URL}/${path}`)).text()
  return loadHtml(html)
}

const $elements = await parse('element-tree')
const elements: Element[] = []

const parseTree = async<T extends AnyNode>(treeNode: Cheerio<T>) => {
  const a = treeNode.children('a')[0]
  if (!a) throw new Error('Unexcpected structure: No link found')

  // name
  const text = $elements(a).text().replace(/[<>]/g, '')
  const typeMapException: Record<string, string> = {
    'string': 'string-type',
    'function': 'function-type',
    'symbol': 'symbol-type',
  }
  const name = typeMapException[text] || text
  // console.log(name)
  const existing = elements.find(e => e.name === name)
  if (existing) return existing

  const elementMapException: Record<string, string> = {
    'part': 'part-partwise',
    'measure': 'measure-partwise',
    'opus': 'opus-reference',
  }
  const linkRoute = elementMapException[text] || text
  const $element = await parse(`elements/${linkRoute}`)
  const elementMain = $element('body > .content > main')

  // docs
  const contentIndex = elementMain.children().index(elementMain.find('h2#content')[0])
  const docs = elementMain.children().slice(3, contentIndex).get()
    .map(e => $element(e).html()).join('\n\n') || undefined

  // content
  let content: Element['content'] =
    elementMain.children().slice(contentIndex + 1, contentIndex + 2).text()
  if (content === 'Always empty.') content = 'empty'
  const ul = treeNode.children('ul')[0]
  if (ul) {
    content = []
    for (const c of [...$elements(ul).children('li')]) {
      const element = await parseTree($elements(c))
      content.push(element.name)
    }
  }

  // attributes
  const table = elementMain.find('#attributes + table')
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

  // link
  const link = `${WEB_BASE_URL}/elements/${linkRoute}`

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

const tree = $elements('body > .content > main > ul')
await parseTree(tree)

const compileConfig: Partial<Options> = {
  declareExternallyReferenced: false,
  bannerComment: '',
  style: { semi: false, singleQuote: true },
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

  // type guarding
  if (!schema.properties || !schema.definitions || !Array.isArray(schema.required))
    throw new Error('No properties or definitions or required array found')

  // attributes
  for (const [kebab, { type, docs, required }] of Object.entries(attributes)) {
    const attrName = toCamel(kebab)
    if (required) schema.required.push(attrName)
    if (!SCHEMA_TYPES.includes(type)) {
      schema.properties[attrName] =
        {
          type: 'array',
          description: wrapSentence(docs),
          items: { oneOf: [{ '$ref': `#/definitions/${type}-value` }] },
        }
      schema.definitions[`${type}-value`] = { type: 'object' }
    } else {
      schema.properties[attrName] = {
        type: 'array',
        description: wrapSentence(docs),
        oneOf: [{ type: type as JSONSchema4TypeName }],
      }
    }
  }

  // content
  if (array) {
    for (const kebab of content as string[]) {
      const type = toCamel(kebab)
      schema.properties[type] = {
        type: 'array',
        items: { oneOf: [{ '$ref': `#/definitions/${type}` }] },
        description: `{@link ${toCamel(`-${kebab}`)}}`,
      }
      schema.definitions[type] = { type: 'object' }
    }
  } else if (content !== 'empty') {
    const typeName = content as string
    if (!SCHEMA_TYPES.includes(typeName)) {
      schema.properties.v = {
        oneOf: [{ '$ref': `#/definitions/${typeName}-value` }],
        description: `{@link ${toCamel(`-${typeName}-value`)}}`,
      }
      schema.definitions[`${typeName}-value`] = { type: 'object' }
    } else schema.properties.v = { type: content as JSONSchema4TypeName }
    schema.required.push('v')
  }

  const result = await compile(schema, toCamel(schema.title || 'Element'), compileConfig)
  return result
}))


const $dataTypes = await parse('data-types')
const dataTypeList = $dataTypes('body > .content > main > ul')
const dataTypeMapException: Record<string, string> = {
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

const dataTypeDefs = await Promise.all(dataTypeList.children('li').map(async(_, li) => {
  const name = $dataTypes(li).text()
  const typeName = toCamel(`${name}-value`)

  const route = dataTypeMapException[name] || name.replace(/:/g, '-')
  const $dataType = await parse(`data-types/${route}`)
  const dataTypeMain = $dataType('body > .content > main')

  // description
  const whereIndex = dataTypeMain.children().index(dataTypeMain.find('h2#where')[0])
  const allowIndex = dataTypeMain.children().index(dataTypeMain.find('h2#allowed')[0])
  const description = dataTypeMain.children().slice(2, allowIndex || whereIndex).get()
    .map(e => $dataType(e).html()).join('\n\n') || ''

  // link
  const link = `${WEB_BASE_URL}/data-types/${route}`

  const schema: JSONSchema4 = {
    title: typeName,
    type: 'string',
    additionalProperties: false,
    description: `${link}\n\n${wrapSentence(description)}`,
  }

  return await compile(schema, typeName, compileConfig)
}))


const defs = [...typeDefs, ...dataTypeDefs]
const schema = '/* eslint-disable max-len */\n\n' + defs.join('\n\n')
fs.writeFileSync(OUTPUT_PATH, schema)
fs.writeFileSync(ELEMENT_LIST_PATH, elements.map(e => e.name).join('\n'))
