export type QuickOverviewStatsType = {
  general: GeneralStats
  matchups: MatchupStats
  resourcesSpent: ResourceStats
  upgradesCount: UpgradesCount
  unitsBuilt: UnitsBuilt
  mapsPlayed: MapsPlayedStats
  supplyStructuresBuilt: SupplyStructuresBuilt
  supplyStructuresBuiltPrevious: SupplyStructuresBuiltPrevious
  workersBuilt: WorkersBuilt
  workersBuiltPrevious: WorkersBuiltPrevious
  mostPopularUnits: Array<PopularUnit>
}

export type GeneralStats = {
  gamesPlayed: number
  secondsPlayed: number
  actions: number
}

export type MatchupStats = Array<{
  race1: Race
  race2: Race
  race1Wins: number
  race2Wins: number
}>

export type MapMatchupStats = {
  games: number
  time: number
  [raceGames: string]: number
  [raceWins: string]: number
}

export type FullMatchupStats = {
  matchups: {[matchup: string]: number}
  perMatchupDuration: {[matchup: string]: number}
  perMap: {
    [mapId: string]: {
      [matchup: string]: MapMatchupStats
    }
  }
}

export type Resources = {
  Minerals: number
  Gas: number
}

export type ResourcesAllRaces = {
  Protoss: Resources
  Terran: Resources
  Zerg: Resources
}

export type ResourceStatsBase = {
  perRace: ResourcesAllRaces
  Structures: ResourcesAllRaces
  Units: ResourcesAllRaces
  Upgrades: ResourcesAllRaces
}

export type ResourceStats = {
  Minerals: number,
  Gas: number,
  average: ResourceStatsBase
} & ResourceStatsBase

export type UpgradesCount = {
  [key: string]: number
}

export type UpgradesTimes = Array<{
  id: number
  content: string
  start: number
}>

export interface UnitsBuilt {
  [key: string]: number
}

export type MapsPlayedStats = Array<{
  id: string
  name: string
  count: number
}>

export type SupplyStructuresBuilt = {
  Overlord: number
  Pylon: number
  SupplyDepot: number
}

export type SupplyStructuresBuiltPrevious = SupplyStructuresBuilt & {
  previousEventName: string
}

export type WorkersBuilt = {
  Drone: number
  Probe: number
  SCV: number
}

export type WorkersBuiltPrevious = WorkersBuilt & {
  previousEventName: string
}

export type PopularUnit = {
  id: string
  unitName: string
  count: number
}
