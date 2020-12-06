import { GeneralStats, MapsPlayedStats, MatchupStats, ResourceStats } from './stats'

export interface TournamentIndexPageProps {
  id: string
  name: string
  general: GeneralStats
  matchups: MatchupStats
  resources: ResourceStats
  mapsPlayed: MapsPlayedStats
}