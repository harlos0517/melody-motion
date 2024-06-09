import { Container } from '@svgdotjs/svg.js'

import { calculateBeam, getYBySlope } from '@/music-svg/caculateSlope'

import { lastIn } from '@/util'

import {
  EIGHTH_REST,
  FLAT,
  NATURAL,
  NOTE_HEAD,
  QUARTER_REST,
  SHARP,
  SINGLE_BEAM,
  WHOLE_REST,
} from '@/music-svg/elements'

import {
  BeamData,
  MusicSheetData,
  NoteData,
  StaffData,
  SystemData,
} from '~/types/data'


export const debug = (
  canvas: Container,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
  pos: { x: number, y: number },
  pageWidth: number = 10000,
  pageHeight: number = 10000,
) => {
  const g = canvas.group().addClass('debug')
  g.text(JSON.stringify(data, null, 2))
    .fill('red').move(pos.x, pos.y)
  g.line(0, pos.y, pageWidth, pos.y)
    .stroke({ color: 'red', width: 1 })
  g.line(pos.x, 0, pos.x, pageHeight)
    .stroke({ color: 'red', width: 1 })
}

export const drawNote = (canvas: Container, note: NoteData) => {
  if (note.type === 'note') {
    canvas.path(NOTE_HEAD)
      .addClass('Note')
      .transform({
        a: 0.3773, b: 0, c: 0, d: 0.3773,
        e: note.position.x,
        f: note.position.y,
      })
  } else if (note.type === 'rest') {
    if (note.displayDuration === 4) {
      canvas.path(QUARTER_REST)
        .addClass('Rest')
        .addClass('d-8')
        .transform({
          a: 0.3773, b: 0, c: 0, d: 0.3773,
          e: note.position.x,
          f: note.position.y,
        })
    } else if (note.displayDuration === 8) {
      canvas.path(EIGHTH_REST)
        .addClass('Rest')
        .addClass('d-8')
        .transform({
          a: 0.3773, b: 0, c: 0, d: 0.3773,
          e: note.position.x,
          f: note.position.y,
        })
    } else if (note.displayDuration === 1) {
      canvas.path(WHOLE_REST)
        .addClass('Rest')
        .addClass('d-8')
        .transform({
          a: 0.3773, b: 0, c: 0, d: 0.3773,
          e: note.position.x,
          f: note.position.y,
        })
    }
  }

  // Accidental
  if (note.accidental === 'sharp') {
    canvas.path(SHARP)
      .addClass('Accidental')
      .addClass('sharp')
      .transform({
        a: 0.3773, b: 0, c: 0, d: 0.3773,
        e: note.position.x - 12,
        f: note.position.y,
      })
  } else if (note.accidental === 'flat') {
    canvas.path(FLAT)
      .addClass('Accidental')
      .addClass('flat')
      .transform({
        a: 0.3773, b: 0, c: 0, d: 0.3773,
        e: note.position.x - 12,
        f: note.position.y,
      })
  } else if (note.accidental === 'natural') {
    canvas.path(NATURAL)
      .addClass('Accidental')
      .addClass('natural')
      .transform({
        a: 0.3773, b: 0, c: 0, d: 0.3773,
        e: note.position.x - 12,
        f: note.position.y,
      })
  }
}

export const drawBeamAndNotes = (
  canvas: Container,
  beam: BeamData,
  depth: number,
  staves: StaffData[],
  stemWidth = 1,
  beamWidth = 1,
  legerWidth = 1,
  baseSlope?: number,
  baseStart?: { x: number, y: number },
) => {
  const chords = beam.chords
  const firstChord = chords[0]
  const lastChord = lastIn(chords) || firstChord
  const { slope, start: { x, y } } = (baseSlope !== undefined && baseStart)
    ? { slope: baseSlope, start: baseStart }
    : calculateBeam(
      chords,
      {
        maxAbsSlope: 0.1,
        minAbsSlope: 0.05,
        closestDistance: 17.5 + 7.5 * (beam.maxDepth || 0),
        averageDistance: 30,
        yOffset: staves.find(s => s.number === firstChord.staff)?.content.y || 0,
      },
    )
  if (beam.type === 'normal') {
    const firstX = firstChord?.direction === 'up'
      ? firstChord.x + 12.26 - stemWidth
      : firstChord?.x || x
    const left = { x: firstX, y: getYBySlope({ x, y }, slope, firstX) }
    const lastX = lastChord?.direction === 'up'
      ? lastChord.x + 12.26
      : (lastChord?.x || x) + stemWidth
    const right = { x: lastX, y: getYBySlope({ x, y }, slope, lastX) }
    const yShift = 7.5 * (depth - 1) * (firstChord?.direction === 'up' ? 1 : -1)
    left.y += yShift
    right.y += yShift

    const h = beamWidth / 2
    canvas.path(
      `M${left.x},${left.y - h} L${right.x},${right.y - h} ` +
      `L${right.x},${right.y + h} L${left.x},${left.y + h} L${left.x},${left.y - h}`,
    )
      .addClass('Beam')
      .fill({ rule: 'evenodd', color: '#000000' })
    // debug(canvas, { slope, y, chords: chords.length }, { x: left.x, y: left.y })
  }

  for (const next of beam.innerBeams || []) {
    drawBeamAndNotes(
      canvas,
      next,
      depth + 1,
      staves,
      stemWidth,
      beamWidth,
      legerWidth,
      slope,
      { x, y },
    )
  }

  if (depth !== 1) return
  chords.forEach(c => {
    c.notes.forEach(n => drawNote(canvas, n))

    const topNoteY = Math.min(...c.notes.map(n => n.position.y))
    const bottomNoteY = Math.max(...c.notes.map(n => n.position.y))
    const staff = staves.find(s => s.number === c.staff)
    const staffStartY = staff?.content.y || 0
    const staffEndY = staffStartY + (staff?.size.height || 0)

    const note = c.notes[0]

    // Stems
    if (note.type === 'note' && note.displayDuration >= 4) {
      const start = {
        x: c.direction === 'up' ? c.x + 12.26 - stemWidth / 2 : c.x + stemWidth / 2,
        y: c.direction === 'up' ? bottomNoteY - 2 : topNoteY + 2,
      }
      const avgY = c.notes.reduce((sum, note) => sum + note.position.y, 0) / c.notes.length
      const end = {
        x: start.x,
        y: beam.type === 'none'
          ? c.direction === 'up'
            ? Math.max(Math.min(topNoteY - 30, avgY - 40, staffEndY - 10), topNoteY - 40)
            : Math.min(Math.max(bottomNoteY + 30, avgY + 40, staffStartY + 10), bottomNoteY + 40)
          : getYBySlope({ x, y }, slope, start.x),
      }
      canvas.polyline(`${start.x}, ${start.y} ${end.x}, ${end.y}`)
        .addClass('Stem')
        .fill('none')
        .stroke({ color: '#000000', width: stemWidth, linejoin: 'bevel' })

      if (beam.type === 'none') {
        if (note.displayDuration === 8) {
          canvas.path(SINGLE_BEAM)
            .addClass('Beam')
            .fill({ rule: 'evenodd', color: '#000000' })
            .transform({
              a: 0.3773, b: 0, c: 0, d: c.direction === 'up' ? -0.3773 : 0.3773,
              e: c.direction === 'up' + stemWidth / 2 ? end.x : end.x - stemWidth / 2,
              f: end.y,
            })
        }
      }
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


export const drawSystem = (
  canvas: Container,
  system: SystemData,
  defaults: MusicSheetData['styles'],
) => {
  const {
    staffLine: staffLineWidth,
    barLine: barLineWidth,
    stem: stemWidth,
    leger: legerWidth,
    beam: beamWidth,
  } = defaults.lineWidths  // Staff lines
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
        for (const beam of voice.beams)
          drawBeamAndNotes(canvas, beam, 1, staves, stemWidth, beamWidth, legerWidth)
      }
    }
  }
}
