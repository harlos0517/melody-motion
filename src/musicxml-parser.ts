import fs from 'fs'

import { Parser as XMLParser } from 'xml2js'

const MUSICXML_PATH = 'data/kingworld.musicxml'
const JSON_PATH = 'data/kingworld.json'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface XMLData extends Record<string, string | XMLData | XMLData[] | undefined> {}


const elements = fs.readFileSync('data/elements.txt', 'utf8').split('\n')

const forceArray = (data: XMLData) => {
  if (typeof data !== 'object') return data
  const newData: XMLData = {}
  Object.entries(data).forEach(([key, value]) => {
    if (Array.isArray(value)) newData[key] = value.map(e => forceArray(e))
    else if (typeof value === 'object')
      newData[key] = elements.includes(key) ? [forceArray(value)] : forceArray(value)
    else newData[key] = value
  })
  return newData
}

const toCamel = (str: string) => str.replace(/[-_:]([a-z])/g, g => g[1].toUpperCase())

const parser = new XMLParser({
  explicitArray: true,
  mergeAttrs: true,
  explicitCharkey: true,
  charkey: 'v',
  attrNameProcessors: [toCamel],
  tagNameProcessors: [toCamel],
})

const xml = fs.readFileSync(MUSICXML_PATH, 'utf8')
const xmlData = await parser.parseStringPromise(xml)
const xmlData2 = forceArray(xmlData)
fs.writeFileSync(JSON_PATH, JSON.stringify(xmlData2, null, 2))
