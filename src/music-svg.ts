import fs from 'fs'

import { Measure, Note, ScorePartwise } from '~/types/schema'

import { calculateBeam, getYBySlope } from '@/caculateSlope'
import { Container, SVG, registerWindow } from '@svgdotjs/svg.js'
import { createSVGWindow } from 'svgdom'

// Structure: Page -> System -> Mesaure -> Staff -> Voice -> Chord -> Note
type NoteData = {
  rawData: Note
  type: 'note' | 'rest'
  displayDuration: 0 | 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128
  position: { x: number, y: number }
}

type BeamType = 'begin' | 'continue' | 'end' | 'forward hook' | 'backward hook' | 'none'

export type ChordData ={
  notes: NoteData[]
  x: number
  direction: 'up' | 'down'
  staff: number
  beams: {
    depth: number
    type: BeamType
  }[]
}

type VoiceData = {
  number: number
  chords: ChordData[]
}

type StaffData = {
  number: number
  topDistance: number
  content: { x: number, y: number }
  size: { width: number, height: number }
}

type MeasureData = {
  number: number
  staves: StaffData[]
  voices: VoiceData[]
  rawData: Measure
  content: { x: number, y: number }
  size: { width: number, height: number }
}

type PartData = {
  id: string
  measures: MeasureData[]
  content: { x: number, y: number }
  size: { width: number, height: number }
}

type MusicSheetData = {
  pages: {
    systems: {
      parts: PartData[]
      margins: { left: number, top: number, right: number }
      content: { x: number, y: number }
      size: { width: number, height: number }
    }[]
    size: { width: number, height: number }
    pageMargins: { left: number, top: number, right: number, bottom: number }
  }[]
}

interface BeamData {
  maxDepth?: number
  type: 'normal' | 'forward hook' | 'backward hook' | 'single' | 'none'
  chords: ChordData[]
  next?: BeamData[]
}

const lastIn = <T>(arr: T[]) => arr[arr.length - 1] || null
const isEmpty = <T>(arr: T[]) => arr.length === 0
const num = (str: string | number | undefined) => Number(str || 0) || 0

const JSON_PATH = 'data/kingworld.json'
const json = fs.readFileSync(JSON_PATH, 'utf8')
const data = JSON.parse(json) as { scorePartwise: ScorePartwise }

const defaults = data.scorePartwise.defaults?.[0]

const pageLayout = defaults?.pageLayout?.[0]
const pageHeight = num(pageLayout?.pageHeight?.[0].v)
const pageWidth = num(pageLayout?.pageWidth?.[0].v)
const pageMargins = pageLayout?.pageMargins?.[0]
const pageLeftMargin = num(pageMargins?.leftMargin?.[0].v)
const pageTopMargin = num(pageMargins?.topMargin?.[0].v)
const pageRightMargin = num(pageMargins?.rightMargin?.[0].v)
const pageBottomMargin = num(pageMargins?.bottomMargin?.[0].v)
if (pageHeight === 0 || pageWidth === 0)
  throw new Error('Invalid page height or width')

const window = createSVGWindow()
const document = window.document
registerWindow(window, document)
const canvas = SVG(document.documentElement) as Container
canvas.size(pageWidth, pageHeight)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const debug = (data: any, pos: { x: number, y: number }) => {
  const g = canvas.group().addClass('debug')
  g.text(JSON.stringify(data, null, 2))
    .fill('red').move(pos.x, pos.y)
  g.line(0, pos.y, pageWidth, pos.y)
    .stroke({ color: 'red', width: 1 })
  g.line(pos.x, 0, pos.x, pageHeight)
    .stroke({ color: 'red', width: 1 })
}

const convertTypeToDuration = (type: string) => {
  switch (type) {
  case 'double': return 0
  case 'whole': return 1
  case 'half': return 2
  case 'quarter': return 4
  case 'eighth': return 8
  case '16th': return 16
  case '32nd': return 32
  case '64th': return 64
  case '128th': return 128
  default: return 1
  }
}

const appearance = defaults?.appearance?.[0]
const staffLineWidth = num(appearance?.lineWidth?.find(e => e.type.includes('staff'))?.v)
const barLineWidth = num(appearance?.lineWidth?.find(e => e.type.includes('light barline'))?.v)
const stemWidth = num(appearance?.lineWidth?.find(e => e.type.includes('stem'))?.v)
const legerWidth = num(appearance?.lineWidth?.find(e => e.type.includes('leger'))?.v)
const beamWidth = num(appearance?.lineWidth?.find(e => e.type.includes('beam'))?.v)

const musicSheetData: MusicSheetData = { pages: [] }

const partList = data.scorePartwise.partList?.[0]?.scorePart || []
const parts = data.scorePartwise.part || []
for (const rawPart of parts) {
  let curX = pageLeftMargin
  let measureY = pageTopMargin
  let nextMeasureY = pageTopMargin
  let systemFirstMeasure: Measure | null = null

  const measures = rawPart.measure || []
  for (const rawMeasure of measures) {
    const print = rawMeasure?.print?.[0]
    const isNewPage = print?.newPage?.[0] === 'yes'
    const isNewSystem = print?.newSystem?.[0] === 'yes'

    const systemLayout = print?.systemLayout?.[0]
    const systemMargins = systemLayout?.systemMargins?.[0]
    const leftMargin = num(systemMargins?.leftMargin?.[0].v)
    const topMargin = num(
      systemLayout?.topSystemDistance?.[0].v ||
        systemLayout?.systemDistance?.[0].v ||
        0,
    )
    const rightMargin = num(systemMargins?.rightMargin?.[0].v)

    const { pages } = musicSheetData
    if (isNewPage || isNewSystem || isEmpty(pages)) {
      const lastSystem = lastIn(lastIn(pages)?.systems || [])
      if (lastSystem) {
        lastSystem.size = {
          width: curX - lastSystem.content.x,
          height: nextMeasureY - lastSystem.content.y,
        }
      }
    }
    if (isNewPage || isEmpty(pages)) {
      measureY = pageTopMargin
      nextMeasureY = pageTopMargin
      pages.push({
        systems: [],
        size: { width: pageWidth, height: pageHeight },
        pageMargins: {
          left: pageLeftMargin,
          top: pageTopMargin,
          right: pageRightMargin,
          bottom: pageBottomMargin,
        },
      })
    }
    const lastPage = lastIn(pages)
    if (!lastPage) throw new Error('Invalid last page')

    let curY = measureY
    if (isNewPage || isNewSystem || isEmpty(lastPage.systems)) {
      curX = pageLeftMargin + leftMargin
      curY = nextMeasureY + topMargin
      measureY = curY
      lastPage.systems.push({
        parts: partList.map(partItem => ({
          id: partItem.id?.[0],
          measures: [],
          content: { x: curX, y: curY },
          size: { width: 0, height: 0 },
        })),
        margins: { left: leftMargin, top: topMargin, right: rightMargin },
        content: { x: pageLeftMargin + leftMargin, y: curY },
        size: { width: 0, height: 0 },
      })
      systemFirstMeasure = rawMeasure
    }
    const lastSystem = lastIn(lastPage.systems)
    if (!lastSystem) throw new Error('Invalid last system')

    const rawNotes = rawMeasure.note || []
    const staveNumbers = [...new Set(rawNotes.map(note => num(note.staff?.[0].v || 1)))]
    const staves: StaffData[] = staveNumbers.map(number => {
      const topDistance = num(
        systemFirstMeasure?.print?.[0].staffLayout
          ?.find(e => e.number?.[0] === `${number}`)?.staffDistance?.[0].v,
      )
      curY += topDistance
      const staff =  {
        number,
        voices: [],
        topDistance,
        content: { x: curX, y: curY },
        size: { width: 0, height: 40 },
      }
      curY += 40
      return staff
    })

    const voiceNumbers = [...new Set(rawNotes.map(note => num(note.voice?.[0].v || 1)))]
    const voices: VoiceData[] = voiceNumbers.map(number => ({ number, chords: [] }))
    voices.forEach(voice => {
      const notes = rawNotes.filter(note => num(note.voice?.[0].v) === voice.number)
      const chords: ChordData[] = []
      for (const note of notes) {
        const lastChord = chords[chords.length - 1]
        if (note.chord && lastChord) {
          lastChord.notes.push({
            rawData: note,
            position: {
              x: curX + num(note.defaultX?.[0]),
              y: measureY - num(note.defaultY?.[0]),
            },
            type: note.rest?.[0] ? 'rest' : 'note',
            displayDuration: convertTypeToDuration(note.type?.[0].v || 'whole'),
          })
        } else {
          chords.push({
            notes: [{
              rawData: note,
              position: {
                x: curX + num(note.defaultX?.[0]),
                y: measureY - num(note.defaultY?.[0]),
              },
              type: note.rest ? 'rest' : 'note',
              displayDuration: convertTypeToDuration(note.type?.[0].v || 'whole'),
            }],
            x: curX + num(note.defaultX?.[0]),
            direction: note.stem?.[0].v === 'up' ? 'up' : 'down',
            beams: note.beam?.map(beam => ({
              depth: num(beam.number?.[0]),
              type: beam.v as BeamType,
            })) || [{ depth: 1, type: 'none' }],
            staff: num(note.staff?.[0].v || 1),
          })
        }
      }
      voice.chords = chords
    })

    const { parts } = lastSystem
    const part = parts.find(p => p.id === rawPart.id?.[0])
    if (!part) throw new Error('Invalid part')
    const measure: MeasureData = {
      number: num(rawMeasure.number?.[0]),
      staves,
      voices,
      rawData: rawMeasure,
      content: { x: curX, y: measureY },
      size: { width: num(rawMeasure.width?.[0]), height: curY - measureY },
    }

    part.measures.push(measure)
    curX += measure.size.width
    staves.forEach(staff => staff.size.width = measure.size.width)
    part.size = {
      width: curX - part.content.x,
      height: curY - part.content.y,
    }
    if (nextMeasureY < curY) nextMeasureY = curY
  }
}


const drawNote = (note: NoteData) => {
  if (note.type === 'note') {
    canvas.path(
      'M0,4.20313 C0,8.5 3.09375,13.2969 11.2031,13.2969 ' +
    'C21.5938,13.2969 32.5,4.79688 32.5,-4 C32.5,-9.90625 27.5,-13.2031 ' +
    '21.2969,-13.2031 C11.5938,-13.2031 0,-5 0,4.20313',
    )
      .addClass('Note')
      .transform({
        a: 0.3773, b: 0, c: 0, d: 0.3773,
        e: note.position.x,
        f: note.position.y,
      })
  } else if (note.type === 'rest') {
    if (note.displayDuration === 4) {
      canvas.path(
        'M23,16.5938 C22.9063,16.5 22.7031,16.2969 22.4063,15.9063 ' +
        'L10.9063,1.70313 C10.7969,1.59375 10.7031,1.29688 10.7031,1.09375 ' +
        'C10.7031,0.796875 10.7969,0.40625 10.9063,0.203125 L21.0938,-15.2031 ' +
        'C21.2031,-15.4063 21.2969,-15.7031 21.2969,-15.9063 L21.2969,-16.7969 ' +
        'C21.2969,-17.0938 21.2031,-17.4063 21,-17.5938 L4.79688,-39.5 ' +
        'C4.79688,-39.5 4.40625,-40.1094 3.79688,-40.1094 C3.5,-40.1094 ' +
        '3.29688,-40.1094 3,-39.7969 C2.59375,-39.5 2.5,-39.1094 2.5,-38.7969 ' +
        'C2.5,-38.2031 2.79688,-37.7031 2.79688,-37.7031 L10.4063,-27.2969 ' +
        'C10.5938,-27 10.7031,-26.6094 10.7031,-26.1094 C10.7031,-25.7031 ' +
        '10.5938,-25.2031 10.4063,-24.9063 L0.296875,-9.5 C0.203125,-9.29688 ' +
        '0.09375,-8.90625 0.09375,-8.70313 L0.09375,-7.79688 C0.09375,-7.5 ' +
        '0.203125,-7.20313 0.40625,-7 L11.5938,6.90625 C11.2031,6.79688 10.2969,6.59375 ' +
        '9.09375,6.59375 C4,6.59375 0,10.7969 0,15.9063 C0,17.2969 0.296875,18.7031 ' +
        '1.09375,19.7969 C3.20313,23 10.7031,32.5 10.7031,32.5 C10.7031,32.5 ' +
        '11.2031,33.1094 11.9063,33.1094 C12.0938,33.1094 12.2969,33.1094 12.5,32.9063 ' +
        'C13,32.5 13.2031,32.1094 13.2031,31.7031 C13.2031,31.2969 13,31 12.9063,30.7969 ' +
        'C12.5938,30.2969 9.40625,24.5 9.40625,24.5 C9.40625,24.5 8.70313,23.0938 ' +
        '8.70313,21.2969 C8.70313,18.0938 11.0938,15.5 14.2969,15.5 C15.5938,15.5 ' +
        '16.7031,15.9063 17.5,16.4063 L21.4063,18.9063 C21.4063,18.9063 21.7969,19.0938 ' +
        '22.2031,19.0938 C22.5938,19.0938 22.9063,19 23.2031,18.5938 C23.4063,18.2969 ' +
        '23.5,18 23.5,17.7031 C23.5,17.4063 23.4063,17.2031 23.2031,16.9063 L23,16.5938',
      )
        .addClass('Rest')
        .addClass('d-8')
        .transform({
          a: 0.3773, b: 0, c: 0, d: 0.3773,
          e: note.position.x,
          f: note.position.y,
        })
    } else if (note.displayDuration === 8) {
      canvas.path(
        'M26.7031,-20.2969 C26.6094,-20.2969 26.4063,-20.4063 26.2969,-20.4063 ' +
        'C25.7031,-20.4063 25.2031,-20.0938 25,-19.5938 C22.7031,-15 17.9063,-8.79688 ' +
        '12.5,-7.79688 C13.5938,-9.09375 14.2969,-10.7031 14.2969,-12.5938 C14.2969,-16.5 ' +
        '11.0938,-19.7031 7.20313,-19.7031 C3.20313,-19.7031 0,-16.5 0,-12.5938 ' +
        'C0,-7.20313 5.29688,-4.70313 10,-4.70313 C15.2969,-4.70313 18.7969,-7.20313 ' +
        '22.2031,-10.9063 L10.7969,24.7031 L13.5,25.5 L27.5,-18.5938 C27.6094,-18.7031 ' +
        '27.6094,-18.9063 27.6094,-19.0938 C27.6094,-19.5938 27.2969,-20 26.7031,-20.2969',
      )
        .addClass('Rest')
        .addClass('d-8')
        .transform({
          a: 0.3773, b: 0, c: 0, d: 0.3773,
          e: note.position.x,
          f: note.position.y,
        })
    } else if (note.displayDuration === 1) {
      canvas.path(
        'M1.40625,-0.5 C0.59375,-0.5 0,0.09375 0,0.90625 L0,11.7031 C0,12.5 ' +
        '0.59375,13.0938 1.40625,13.0938 L31.1094,13.0938 C31.9063,13.0938 ' +
        '32.5,12.5 32.5,11.7031 L32.5,0.90625 C32.5,0.09375 31.9063,-0.5 ' +
        '31.1094,-0.5 L1.40625,-0.5',
      )
        .addClass('Rest')
        .addClass('d-8')
        .transform({
          a: 0.3773, b: 0, c: 0, d: 0.3773,
          e: note.position.x,
          f: note.position.y,
        })
    }
  }
}

const drawBeamAndNotes = (
  beamData: BeamData,
  depth: number,
  staves: StaffData[],
  baseSlope?: number,
  baseStart?: { x: number, y: number },
) => {
  const chords = beamData.chords
  const firstChord = chords[0]
  const lastChord = lastIn(chords) || firstChord
  const { slope, start: { x, y } } = (baseSlope !== undefined && baseStart)
    ? { slope: baseSlope, start: baseStart }
    : calculateBeam(
      chords,
      {
        maxAbsSlope: 0.1,
        minAbsSlope: 0.05,
        closestDistance: 17.5 + 7.5 * (beamData.maxDepth || 0),
        averageDistance: 30,
        yOffset: staves.find(s => s.number === firstChord.staff)?.content.y || 0,
      },
    )
  if (beamData.type === 'normal') {
    const firstX = firstChord?.direction === 'up'
      ? firstChord.x + 12.26 - stemWidth
      : firstChord?.x || x
    const left = { x: firstX, y: getYBySlope({ x, y }, slope, firstX) }
    const lastX = firstChord?.direction === 'up'
      ? lastChord.x + 12.26
      : (lastChord?.x || x) + stemWidth
    const right = { x: lastX, y: getYBySlope({ x, y }, slope, lastX) }
    const yShift = 7.5 * (depth - 1) * (firstChord?.direction === 'up' ? 1 : -1)
    left.y += yShift
    right.y += yShift

    const h = beamWidth / 2
    canvas.path(
      `M${left.x},${left.y - h} L${right.x},${right.y - h} ` +
      `L${right.x},${right.y + h}L${left.x},${left.y + h} L${left.x},${left.y - h}`,
    )
      .addClass('Beam')
      .fill({ rule: 'evenodd', color: '#000000' })
    debug({ slope, y, chords: chords.length }, { x: left.x, y: left.y })

  }

  for (const next of beamData.next || [])
    drawBeamAndNotes(next, depth + 1, staves, slope, { x, y })

  if (depth !== 1) return
  chords.forEach(c => {
    c.notes.forEach(drawNote)

    const topNoteY = Math.min(...c.notes.map(n => n.position.y))
    const bottomNoteY = Math.max(...c.notes.map(n => n.position.y))
    const staff = staves.find(s => s.number === c.staff)
    const staffStartY = staff?.content.y || 0
    const staffEndY = staffStartY + (staff?.size.height || 0)

    // Stems
    if (c.notes[0].type === 'note' && c.notes[0].displayDuration >= 4) {
      const start = {
        x: c.direction === 'up' ? c.x + 12.26 - stemWidth / 2 : c.x + stemWidth / 2,
        y: c.direction === 'up' ? bottomNoteY - 2 : topNoteY + 2,
      }
      const avgY = c.notes.reduce((sum, note) => sum + note.position.y, 0) / c.notes.length
      const end = {
        x: start.x,
        y: c.beams[0].type === 'none'
          ? c.direction === 'up'
            ? Math.max(Math.min(topNoteY - 25, avgY - 40, staffEndY - 10), topNoteY - 40)
            : Math.min(Math.max(bottomNoteY + 25, avgY + 40, staffStartY + 10), bottomNoteY + 40)
          : getYBySlope({ x, y }, slope, start.x),
      }
      canvas.polyline(`${start.x}, ${start.y} ${end.x}, ${end.y}`)
        .addClass('Stem')
        .fill('none')
        .stroke({ color: '#000000', width: stemWidth, linejoin: 'bevel' })
    }

    // Ledger Lines
    if (bottomNoteY >= staffEndY + 10) {
      const ledgerLines = Math.floor((bottomNoteY - staffEndY) / 10)
      const ys = Array.from({ length: ledgerLines }, (_, i) => staffEndY + 10 * (i + 1))
      ys.forEach(y =>
        canvas.polyline(`${c.x + 6.13  - 9},${y} ${c.x + 6.13 + 9},${y}`)
          .fill('none')
          .stroke({ color: '#000000', width: legerWidth, linejoin: 'bevel' })
          .addClass('LedgerLine'),
      )
    } else if (topNoteY <= staffStartY - 10) {
      const ledgerLines = Math.floor((staffStartY - topNoteY) / 10)
      const ys = Array.from({ length: ledgerLines }, (_, i) => staffStartY - 10 * (i + 1))
      ys.forEach(y =>
        canvas.polyline(`${c.x + 6.13 - 9},${y} ${c.x + 6.13 + 9},${y}`)
          .fill('none')
          .stroke({ color: '#000000', width: legerWidth, linejoin: 'bevel' })
          .addClass('LedgerLine'),
      )
    }
  })

}

for (const system of musicSheetData.pages[0].systems) {
  // Staff lines
  const { content } = system
  const { x, y } = content
  const totalWidth = system.parts[0].measures.reduce((acc, measure) => acc + measure.size.width, 0)

  for (const part of system.parts) {

    const staves = part.measures[0].staves
    staves.forEach(staff => {
      const { x, y } = staff.content
    ;[0, 10, 20, 30, 40].forEach(sp => {
        canvas.polyline(`${x}, ${y + sp} ${x + totalWidth}, ${y + sp}`)
          .addClass('StaffLines')
          .fill('none')
          .stroke({ color: '#000000', width: staffLineWidth, linejoin: 'bevel' })
      })
    })

    // Bar lines
    canvas.polyline(`${x}, ${y} ${x}, ${y + part.measures[0].size.height}`)
      .addClass('BarLine')
      .fill('none')
      .stroke({ color: '#000000', width: barLineWidth, linejoin: 'bevel' })
    for (const measure of part.measures) {
      const { width, height } = measure.size
      const { x, y } = measure.content
      canvas.polyline(`${x + width}, ${y} ${x + width}, ${y + height}`)
        .addClass('BarLine')
        .fill('none')
        .stroke({ color: '#000000', width: barLineWidth, linejoin: 'bevel' })

      for (const voice of measure.voices) {
        const chords = voice.chords
        const beamDatas = [] as BeamData[]
        for (const chord of chords) {
          let curArray = null as BeamData[] | null
          let curBeam = null as BeamData | null

          const lowestBeamData = lastIn(beamDatas)
          if (lowestBeamData && chord.beams.length > (lowestBeamData.maxDepth || 0))
            lowestBeamData.maxDepth = chord.beams.length
          for (const beam of chord.beams) {
            curArray = lastIn(curArray || [])?.next || beamDatas
            curBeam = lastIn(curArray || [])
            const type = beam.type
            if (type === 'begin') {
              curBeam = { type: 'normal' as const, chords: [chord], next: [] }
              curArray.push(curBeam)
            } else if (type === 'continue' || type === 'end')
              curBeam?.chords.push(chord)
            else {
              curBeam = { type, chords: [chord] }
              curArray.push(curBeam)
              break
            }
          }
        }

        for (const beamData of beamDatas)
          drawBeamAndNotes(beamData, 1, staves)
      }
    }
  }
}

fs.writeFileSync('data/test.svg', canvas.svg(), 'utf8')

const html = `
<!DOCTYPE html>
<html>
<head>
  <title>Test</title>
</head>
<body>
  <style>
    svg *:hover {
      fill: red;
      stroke: red;
    }
    svg *:hover + .debug {
      display: initial;
    }
    .debug {
      display: none;
    }
  </style>
  <div>
    ${canvas.svg()}
  </div>
</body>
`
fs.writeFileSync('/mnt/d/downloads/test.html', html, 'utf8')
