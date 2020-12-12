type TournamentMeta = {
  id: string
  name: string
}

type Result = 'Win' | 'Loss' | 'Draw'

type PlayerColor = {
  m_r: number
  m_g: number
  m_b: number
  m_a: number
}

type MatchMeta = {
  mapName: string
  mapId: string
  players: [string, string]
  racesShort: [Race, Race]
  races: [RaceFull, RaceFull]
  results: [Result, Result]
  colors: [PlayerColor, PlayerColor]
  duration: number
}