import fs from 'fs'
import { pathToFileURL } from 'url'

import { Container, SVG, registerWindow } from '@svgdotjs/svg.js'
import minimist from 'minimist'
import { createSVGWindow } from 'svgdom'

import { toMusicData } from '@/music-svg/music-data'
import { parseMusicXML } from '@/music-svg/musicxml-parser'
import { drawSystem } from '@/music-svg/svg'

import { ScorePartwise } from '~/types/schema'

const JSON_PATH = 'data/kingworld.json'
const json = fs.readFileSync(JSON_PATH, 'utf8')
const data = JSON.parse(json) as { scorePartwise: ScorePartwise }

const musicData = toMusicData(data)

const defaults = musicData.styles

const page = musicData.pages[0]
const pageWidth = page.size.width
const pageHeight = page.size.height

export const musicXMLToSVGCanvas = async(path: string) => {
  const xmlData = await parseMusicXML(path) as unknown as { scorePartwise: ScorePartwise }
  const musicData = toMusicData(xmlData)

  const window = createSVGWindow()
  const document = window.document
  registerWindow(window, document)
  const canvas = SVG(document.documentElement) as Container
  canvas.size(pageWidth, pageHeight)

  for (const system of musicData.pages[0].systems)
    drawSystem(canvas, system, defaults)

  return canvas.svg()
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const argv = minimist(process.argv.slice(2))
  const XML_PATH = argv.i
  if (!XML_PATH) throw new Error('No input file specified')

  const svg = await musicXMLToSVGCanvas(XML_PATH)

  fs.writeFileSync('data/test.svg', svg, 'utf8')

  const html = `
    <!DOCTYPE html>
    <html><head><title>Test</title></head>
    <body>
      <style>
        svg *:hover { fill: red; stroke: red; }
        svg *:hover + .debug { display: initial; }
        .debug { display: none; }
      </style>
      <div>${svg}</div>
    </body>
  `
  fs.writeFileSync('/mnt/d/downloads/test.html', html, 'utf8')
}
