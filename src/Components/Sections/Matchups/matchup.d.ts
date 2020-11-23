type Race = 'Prot' | 'Terr' | 'Zerg' | 'Rand'

interface MatchupStat {
  race1: Race
  race2: Race
  race1Wins: number
  race2Wins: number
}
