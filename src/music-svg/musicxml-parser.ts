import fs from 'fs'
import { pathToFileURL } from 'url'

import minimist from 'minimist'
import { Parser as XMLParser } from 'xml2js'

import { toCamel } from '@/util'

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


export const parseMusicXML = async(path: string) => {
  const parser = new XMLParser({
    explicitArray: true,
    mergeAttrs: true,
    explicitCharkey: true,
    charkey: 'v',
    attrNameProcessors: [toCamel],
    tagNameProcessors: [toCamel],
  })

  const xml = fs.readFileSync(path, 'utf8')
  const xmlData = await parser.parseStringPromise(xml)
  return forceArray(xmlData)
}


if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const argv = minimist(process.argv.slice(2))
  const MUSICXML_PATH = argv.i
  if (!MUSICXML_PATH) throw new Error('No input file specified')
  const JSON_PATH = argv.o || `${MUSICXML_PATH}.json`

  const data = await parseMusicXML(MUSICXML_PATH)
  fs.writeFileSync(JSON_PATH, JSON.stringify(data, null, 2))
}
