type Race = 'Prot' | 'Terr' | 'Zerg' | 'Rand'
type RaceShort = Race
type RaceFull = 'Protoss' | 'Terran' | 'Zerg' | 'Random'

interface MatchupStat {
  race1: Race
  race2: Race
  race1Wins: number
  race2Wins: number
}
