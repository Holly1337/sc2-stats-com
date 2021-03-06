type MapSizeData = {
  widthInUnits: number
  heightInUnits: number
  widthInPixels: number
  heightInPixels: number
  offsetX: number
  offsetY: number
  xModifier?: number
  yModifier?: number
}

type HeatmapDataPoint = {
  x: number,
  y: number,
  gameloop: number,
  killerPlayerId: 1 | 2,
  value: number
}