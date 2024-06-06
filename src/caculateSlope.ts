import { ChordData } from '@/music-svg'

export const getSlope = (
  pos1: { x: number, y: number },
  pos2: { x: number, y: number },
) => (pos2.y - pos1.y) / (pos2.x - pos1.x)

export const getYBySlope = (pos: { x: number, y: number }, slope: number, x: number) =>
  pos.y + slope * (x - pos.x)

export const getNormalStemTip = (chord: ChordData, len: number) => {
  const x = chord.direction === 'up' ? chord.x + 12.26 : chord.x
  const avgY = chord.notes.reduce((sum, note) => sum + note.position.y, 0) / chord.notes.length
  const y = chord.direction === 'up' ? avgY - len : avgY + len
  return { x, y }
}

export const getNearestStemTip = (chord: ChordData, len: number) => {
  const x = chord.direction === 'up' ? chord.x + 12.26 : chord.x
  const y = chord.direction === 'up'
    ? Math.min(...chord.notes.map(note => note.position.y)) - len
    : Math.max(...chord.notes.map(note => note.position.y)) + len
  return { x, y }
}

export const findMin = (arr: number[], value: (a: number) => number) => {
  let min = Infinity
  let minOrig = null
  arr.forEach(a => {
    const v = value(a)
    if (v < min) { min = v; minOrig = a}
  })
  return minOrig
}

export const quantize = (
  start: { x: number, y: number },
  end: { x: number, y: number },
  offset: number,
) => {
  const newStart = { x: start.x, y: Math.round((start.y - offset) / 2.5) * 2.5 + offset }
  const newEnd = { x: end.x, y: Math.round((end.y - offset) / 2.5) * 2.5 + offset }
  const newSlope = getSlope(newStart, newEnd)
  return { start: newStart, end: newEnd, slope: newSlope }
}

export const calculateBeam = (
  chords: ChordData[],
  options: {
    maxAbsSlope: number
    minAbsSlope: number
    closestDistance: number
    averageDistance: number
    yOffset: number
  },
) => {
  const { maxAbsSlope, minAbsSlope, closestDistance, averageDistance, yOffset } = options
  // currently only accept same direction beam; use the first chord stem direction
  const direction = chords[0].direction === 'up' ? -1 : 1
  const normalStemTips = chords.map(chord => getNormalStemTip(chord, averageDistance))
  const leastSlopeFromStart = (direction > 0 ? Math.max : Math.min)(
    ...normalStemTips.map(stemTip => getSlope(normalStemTips[0], stemTip))
      .filter(v => !isNaN(v)),
  )
  const leastSlopeFromEnd = (direction > 0 ? Math.min : Math.max)(
    ...normalStemTips.map(stemTip => getSlope(normalStemTips[normalStemTips.length - 1], stemTip))
      .filter(v => !isNaN(v)),
  )
  const sameDirection = leastSlopeFromStart * leastSlopeFromEnd
  const slopeDirection = leastSlopeFromStart > 0 ? 1 : -1
  const slope = sameDirection > 0
    ? findMin([
      leastSlopeFromStart,
      leastSlopeFromEnd,
      maxAbsSlope * slopeDirection,
    ], Math.abs) || 0
    : 0
  const bestSlope = Math.abs(slope) < minAbsSlope ? 0 : slope

  const shortestStemTips = chords.map(chord => getNearestStemTip(chord, closestDistance))
  const closestStartY = (direction > 0 ? Math.max : Math.min)(
    ...shortestStemTips.map(
      stemTip => getYBySlope(stemTip, bestSlope, normalStemTips[0].x),
    ),
  )
  const averageStartY = normalStemTips.reduce(
    (sum, stemTip) => sum + getYBySlope(stemTip, bestSlope, normalStemTips[0].x),
    0,
  ) / normalStemTips.length
  const bestStartY = (direction > 0 ? Math.max : Math.min)(closestStartY, averageStartY)

  const startX = normalStemTips[0].x
  const endX = normalStemTips[normalStemTips.length - 1].x
  const quantized = quantize(
    { x: startX, y: bestStartY },
    { x: endX, y: getYBySlope({ x: startX, y: bestStartY }, bestSlope, endX) },
    yOffset,
  )

  return quantized
}
