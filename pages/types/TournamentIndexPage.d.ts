import { GeneralStats, MatchupStats } from './stats'

export interface TournamentIndexPageProps {
  id: string
  name: string
  general: GeneralStats
  matchups: MatchupStats
}