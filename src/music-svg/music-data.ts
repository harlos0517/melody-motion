


import { isEmpty, lastIn, num } from '@/util'

import {
  AccidentalType,
  BeamData,
  ChordData,
  DynamicsType,
  MeasureData,
  MusicSheetData,
  NoteData,
  StaffData,
  TupletData,
  VoiceData,
} from '~/types/data'
import { Measure, ScorePartwise } from '~/types/schema'


const convertTypeToDuration = (type: string) => {
  switch (type) {
  case 'double': return 0 as const
  case 'whole': return 1 as const
  case 'half': return 2 as const
  case 'quarter': return 4 as const
  case 'eighth': return 8 as const
  case '16th': return 16 as const
  case '32nd': return 32 as const
  case '64th': return 64 as const
  case '128th': return 128 as const
  default: return 1 as const
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toMusicData = (rawXMLData: { scorePartwise: ScorePartwise }) => {

  const defaults = rawXMLData.scorePartwise.defaults?.[0]

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

  const appearance = defaults?.appearance?.[0]
  const staffLineWidth = num(appearance?.lineWidth?.find(e => e.type.includes('staff'))?.v)
  const barLineWidth = num(appearance?.lineWidth?.find(e => e.type.includes('light barline'))?.v)
  const stemWidth = num(appearance?.lineWidth?.find(e => e.type.includes('stem'))?.v)
  const legerWidth = num(appearance?.lineWidth?.find(e => e.type.includes('leger'))?.v)
  const beamWidth = num(appearance?.lineWidth?.find(e => e.type.includes('beam'))?.v)

  const musicSheetData: MusicSheetData = {
    pages: [],
    styles: {
      lineWidths: {
        staffLine: staffLineWidth,
        barLine: barLineWidth,
        stem: stemWidth,
        leger: legerWidth,
        beam: beamWidth,
      },
    },
  }

  const partList = rawXMLData.scorePartwise.partList?.[0]?.scorePart || []
  const parts = rawXMLData.scorePartwise.part || []
  for (const rawPart of parts) {
    let curX = pageLeftMargin
    let measureY = pageTopMargin
    let nextMeasureY = pageTopMargin
    let systemFirstMeasure: Measure | null = null

    const measures = rawPart.measure || []
    let tick = 0
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
          ties: [],
          slurs: [],
          brackets: [],
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
      const voices: VoiceData[] = voiceNumbers.map(number => ({
        number,
        chords: [],
        beams: [],
        tuplets: [],
      }))

      const measureTick = tick
      voices.forEach(voice => {
        const notes = rawNotes.filter(note => num(note.voice?.[0].v) === voice.number)
        const chords: ChordData[] = []
        let noteTick = measureTick
        for (const note of notes) {
          const noteData: NoteData = {
            rawData: note,
            position: {
              x: curX + num(note.defaultX?.[0]),
              y: measureY - num(note.defaultY?.[0]),
            },
            type: note.rest ? 'rest' as const : 'note' as const,
            displayDuration: convertTypeToDuration(note.type?.[0].v || 'whole'),
            accidental: note.accidental?.[0].v as AccidentalType,
            pitch: note.pitch ? {
              step: note.pitch[0].step?.[0].v || 'C',
              octave: num(note.pitch[0].octave?.[0].v),
            } : undefined,
            dynamics: [],
          }

          const lastChord = chords[chords.length - 1]
          if (note.chord && lastChord)
            lastChord.notes.push(noteData)
          else {
            chords.push({
              notes: [noteData],
              x: curX + num(note.defaultX?.[0]),
              direction: note.stem?.[0].v === 'up' ? 'up' : 'down',
              staff: num(note.staff?.[0].v || 1),
              duration: num(note.duration?.[0].v),
              tick: noteTick,
            })
            noteTick += num(note.duration?.[0].v)
          }

          const notations = note.notations?.[0]

          const tie = notations?.tied?.[0]
          if (tie) {
            const type = tie.type?.[0]
            if (type === 'start')
              lastSystem.ties.push({ note1: noteData })
            else if (type === 'stop') {
              const tieData = lastIn(lastSystem.ties.filter(s =>
                s.note1?.pitch?.octave === noteData.pitch?.octave &&
                s.note1?.pitch?.step === noteData.pitch?.step,
              ))
              if (tieData) tieData.note2 = noteData
              else lastSystem.ties.push({ note2: noteData })
            }
          }

          const articulations = notations?.articulations?.[0]
          if (articulations) {
            noteData.articulation = {
              staccato: !!articulations.staccato?.[0],
              tenuto: !!articulations.tenuto?.[0],
              accent: !!articulations.accent?.[0],
            }
          }

          const dynamics = notations?.dynamics
          if (dynamics) {
            const availableDynamics = ['ppp', 'pp', 'p', 'mp', 'mf', 'f', 'ff', 'fff']
            noteData.dynamics = dynamics.map(d => {
              const keys = Object.keys(d)
              const type = keys.find(k => availableDynamics.includes(k))
              const defaultX = num(d?.defaultX?.[0])
              const defaultY = num(d?.defaultY?.[0])
              const relativeY = num(d?.relativeY?.[0])
              if (!type) throw new Error('Invalid dynamics')
              return {
                type: type as DynamicsType,
                position: { x: noteData.position.x + defaultX, y: measureY + defaultY + relativeY },
              }
            })
          }

          // TODO clef changes
        }

        voice.chords = chords

        for (const chord of chords) {
          let curBeamArray = null as BeamData[] | null
          let curBeam = null as BeamData | null

          const chordBeams = chord.notes[0].rawData.beam?.map(beam => ({
            depth: num(beam.number?.[0]),
            type: beam.v,
          })) || [{ depth: 1, type: 'none' }]

          const lowestBeamData = lastIn(voice.beams)
          if (lowestBeamData && chordBeams.length > (lowestBeamData.maxDepth || 0))
            lowestBeamData.maxDepth = chordBeams.length
          for (const beam of chordBeams) {
            curBeamArray = lastIn(curBeamArray || [])?.innerBeams || voice.beams
            curBeam = lastIn(curBeamArray || [])
            const type = beam.type
            if (type === 'begin') {
              curBeam = { type: 'normal' as const, chords: [chord], innerBeams: [] }
              curBeamArray.push(curBeam)
            } else if (type === 'continue' || type === 'end')
              curBeam?.chords.push(chord)
            else {
              curBeam = { type: type as 'forward hook' | 'backward hook', chords: [chord] }
              curBeamArray.push(curBeam)
              break
            }
          }

          const tuplets = chord.notes[0].rawData?.notations?.[0].tuplet || []
          const timeModification = chord.notes[0].rawData?.timeModification?.[0]

          if (tuplets.length && timeModification) {
            let curTuplet = null as TupletData | null

            const chordTuplets = tuplets.map(tuplet => ({
              chords: [chord],
              type: tuplet.type?.[0],
              actualLength: num(timeModification?.actualNotes?.[0].v),
              displayLength: num(timeModification?.normalNotes?.[0].v),
              innerTuplets: [],
            }))

            // Currently do not support nested tuplets
            const tuplet = chordTuplets[0]
            const actualLength = tuplet.actualLength
            const displayLength = tuplet.displayLength
            const type = tuplet.type
            let inTuplet = false
            if (type === 'begin') {
              inTuplet = true
              curTuplet = { actualLength, displayLength, chords: [chord], innerTuplets: [] }
              voice.tuplets.push(curTuplet)
            } else if (inTuplet && type === 'end') {
              curTuplet?.chords.push(chord)
              inTuplet = false
            }
          }
        }
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
        duration: num(rawMeasure.backup?.[0]?.duration?.[0].v),
        tick,
      }

      part.measures.push(measure)
      curX += measure.size.width
      staves.forEach(staff => staff.size.width = measure.size.width)
      part.size = {
        width: curX - part.content.x,
        height: curY - part.content.y,
      }
      tick += measure.duration
      if (nextMeasureY < curY) nextMeasureY = curY
    }
  }
  return musicSheetData
}
