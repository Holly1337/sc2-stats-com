export type RGBAColor = {
  r: number
  b: number
  g: number
  a: number
}

export const raceColors = {
  protossLight: 'rgb(246 243 213)',
  protossBorder: '#ffc886',
  terranLight: '#d5ddf6',
  terranBorder: '#97b0f8',
  zergLight: 'rgb(229 213 246)',
  zergBorder: '#d075d0',
}

export const getColorsByRace = (race: RaceFull) => {
  let border = raceColors.terranBorder
  let light = raceColors.terranLight
  switch (race) {
    case 'Protoss':
      border = raceColors.protossBorder
      light = raceColors.protossLight
      break
    case 'Terran':
      border = raceColors.terranBorder
      light = raceColors.terranLight
      break
    case 'Zerg':
      border = raceColors.zergBorder
      light = raceColors.zergLight
      break
  }
  return { border, light }
}

export const mrgbaToRgba = (color: PlayerColor): RGBAColor => {
  return {
    r: color.m_r,
    g: color.m_g,
    b: color.m_b,
    a: color.m_a,
  }
}

export const mrgbaToRgbaString = (color: PlayerColor): string => {
  return `rgba(${color.m_r}, ${color.m_g}, ${color.m_b}, ${color.m_a})`
}