export type RGBAColor = {
  r: number
  b: number
  g: number
  a: number
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