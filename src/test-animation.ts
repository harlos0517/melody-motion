import { exec } from 'child_process'
import fs from 'fs'

import { Container, SVG, registerWindow } from '@svgdotjs/svg.js'
import sharp from 'sharp'
import { createSVGWindow } from 'svgdom'

import { toMusicData } from '@/music-svg/music-data'
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

const FPS = 60
const videoLength = 4
const BPM = 240 // test value
const TPB = 24
const TPF = TPB * BPM / 60 / FPS

const videoSize = {
  width: 1920,
  height: 1080,
}

const tStartViewSize =  { width: videoSize.width, height: videoSize.height }
const tStartViewPos = { x: 0, y: 0 }
const tEndViewSize =  { width: videoSize.width, height: videoSize.height }
const tEndViewPos = { x: 0, y: 0 }
const tTime = 0.25
const tCurve = (t: number) => t * t * (3 - 2 * t)
let tStartTime = -0.25

for (let frame = 0; frame < FPS * videoLength; frame++) {
  const window = createSVGWindow()
  const document = window.document
  registerWindow(window, document)
  const canvas = SVG(document.documentElement) as Container
  canvas.size(pageWidth, pageHeight)
  canvas.rect(pageWidth, pageHeight).fill('#FFFFFF')

  const tick = TPF * frame
  const time = frame / FPS
  const curViewSize =  { width: tStartViewSize.width, height: tStartViewSize.height }
  const curViewPos = { x: tStartViewPos.x, y: tStartViewPos.y }
  if (time >= tStartTime + tTime) {
    curViewSize.width = tEndViewSize.width
    curViewSize.height = tEndViewSize.height
    curViewPos.x = tEndViewPos.x
    curViewPos.y = tEndViewPos.y
  } else if (time > tStartTime) {
    const t = (time - tStartTime) / tTime
    curViewSize.width =
      tStartViewSize.width + (tEndViewSize.width - tStartViewSize.width) * tCurve(t)
    curViewSize.height =
      tStartViewSize.height + (tEndViewSize.height - tStartViewSize.height) * tCurve(t)
    curViewPos.x = tStartViewPos.x + (tEndViewPos.x - tStartViewPos.x) * tCurve(t)
    curViewPos.y = tStartViewPos.y + (tEndViewPos.y - tStartViewPos.y) * tCurve(t)
  }

  const targetViewSize =  { width: curViewSize.width, height: curViewSize.height }
  const targetViewPos = { x: curViewPos.x, y: curViewPos.y }

  const measure = musicData.pages[0].systems[0].parts[0].measures.find(
    m => m.tick <= tick && m.tick + m.duration > tick,
  )
  if (measure) {
    canvas.rect(measure.size.width, measure.size.height)
      .move(measure.content.x, measure.content.y)
      .fill('#FF000044')
    const minScale = Math.min(
      videoSize.width / measure.size.width / 1.2,
      videoSize.height / measure.size.height / 2,
    )
    targetViewSize.width = videoSize.width / minScale
    targetViewSize.height = videoSize.height / minScale
    targetViewPos.x = measure.content.x - (targetViewSize.width - measure.size.width) / 2
    targetViewPos.y = measure.content.y - (targetViewSize.height - measure.size.height) / 2
  }

  if (
    targetViewSize.width !== tEndViewSize.width ||
    targetViewSize.height !== tEndViewSize.height ||
    targetViewPos.x !== tEndViewPos.x ||
    targetViewPos.y !== tEndViewPos.y
  ) {
    tStartTime = time
    tStartViewSize.width = curViewSize.width
    tStartViewSize.height = curViewSize.height
    tStartViewPos.x = curViewPos.x
    tStartViewPos.y = curViewPos.y
    tEndViewSize.width = targetViewSize.width
    tEndViewSize.height = targetViewSize.height
    tEndViewPos.x = targetViewPos.x
    tEndViewPos.y = targetViewPos.y
  }

  canvas.size(videoSize.width, videoSize.height)
  canvas.viewbox(curViewPos.x, curViewPos.y, curViewSize.width, curViewSize.height)

  for (const system of musicData.pages[0].systems)
    drawSystem(canvas, system, defaults)

  const svg = canvas.svg()
  const pngBuffer = sharp(Buffer.from(svg)).png().toBuffer()
  fs.writeFileSync(`data/frames/${frame.toString().padStart(5, '0')}.png`, await pngBuffer)
}

const ffmpegCommand =
  // eslint-disable-next-line max-len
  'ffmpeg -framerate 60 -i data/frames/%05d.png -c:v libx264 -r 60 -pix_fmt yuv420p data/output.mp4 -y'
exec(ffmpegCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error creating video: ${error.message}`)
    return
  }
  if (stderr)
    console.error(`FFmpeg stderr: ${stderr}`)

  console.log(`FFmpeg stdout: ${stdout}`)
})
