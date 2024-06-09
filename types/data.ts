import { Measure, Note } from '~/types/schema'

export type AccidentalType = 'sharp' | 'flat' | 'natural' | 'none'

export type BeamType = 'normal' | 'forward hook' | 'backward hook' | 'none'

export type DynamicsType = 'ppp' | 'pp' | 'p' | 'mp' | 'mf' | 'f' | 'ff' | 'fff'

// Structure: Page -> System -> Mesaure -> Staff -> Voice -> Chord -> Note
export type NoteData = {
  rawData: Note
  type: 'note' | 'rest'
  displayDuration: 0 | 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128
  position: { x: number, y: number }
  accidental?: AccidentalType
  articulation?: {
    staccato: boolean
    tenuto: boolean
    accent: boolean
  }
  dynamics: {
    type: DynamicsType
    position: { x: number, y: number }
  }[]
  clefChange?: 'G' | 'F' | 'C'
  pitch?: {
    step: string
    octave: number
  }
}

export type TupletData = {
  actualLength: number
  displayLength: number
  chords: ChordData[]
  innerTuplets?: TupletData[]
}

export type BeamData = {
  maxDepth?: number
  type: BeamType
  chords: ChordData[]
  innerBeams?: BeamData[]
}

export type ChordData ={
  notes: NoteData[]
  x: number
  direction: 'up' | 'down'
  staff: number
  duration: number
  tick: number
}

export type VoiceData = {
  number: number
  chords: ChordData[]
  beams: BeamData[]
  tuplets: TupletData[]
}

export type StaffData = {
  number: number
  topDistance: number
  content: { x: number, y: number }
  size: { width: number, height: number }
}

export type MeasureData = {
  number: number
  staves: StaffData[]
  voices: VoiceData[]
  rawData: Measure
  content: { x: number, y: number }
  size: { width: number, height: number }
  timeSig?: { beats: number, beatType: number }
  clef?: 'G' | 'F' | 'C'
  barlineStyle?: 'single' | 'double' | 'final' | 'repeat begin' | 'repeat end' | 'repeat both'
  duration: number
  tick: number
}

export type PartData = {
  id: string
  measures: MeasureData[]
  content: { x: number, y: number }
  size: { width: number, height: number }
}

export type SystemData = {
  parts: PartData[]
  margins: { left: number, top: number, right: number }
  content: { x: number, y: number }
  size: { width: number, height: number }
  ties: { note1?: NoteData, note2?: NoteData }[]
  slurs: { startChord?: ChordData, endChord?: ChordData, number: number }[]
  brackets: { startPart: PartData, endPart: PartData, bracket: boolean }[]
}

export type PageData = {
  systems: SystemData[]
  size: { width: number, height: number }
  pageMargins: { left: number, top: number, right: number, bottom: number }
}

export type MusicSheetData = {
  styles: {
    lineWidths: {
      staffLine: number
      barLine: number
      stem: number
      leger: number
      beam: number
    }
  }
  pages: PageData[]
}
