import { GeneralStats, MapsPlayedStats, MatchupStats, ResourceStats, SupplyStructuresBuiltPrevious } from './stats'

export interface TournamentIndexPageProps {
  id: string
  name: string
  general: GeneralStats
  matchups: MatchupStats
  resources: ResourceStats
  mapsPlayed: MapsPlayedStats
  supply: {
    current: SupplyStructuresBuilt,
    previous: SupplyStructuresBuiltPrevious
  }
}