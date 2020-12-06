export type QuickOverviewStatsType = {
  general: GeneralStats
  matchups: MatchupStats
  resourcesSpent: ResourcesSpent
  upgradesCount: UpgradesCount
  unitsBuilt: UnitsBuilt
  mapsPlayed: MapsPlayed
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

export type MatchupStats = {
  [matchup: string]: {
    race1Wins: number
    race2Wins: number
  }
}

export type ResourcesSpent = {
  Minerals: number,
  Gas: number
}

export type UpgradesCount = {
  [key: string]: number
}

export interface UnitsBuilt {
  [key: string]: number
}

export type MapsPlayed = {
  id: string
  name: string
  count: number
}

export type SupplyStructuresBuilt = {
  Overlord: number
  Pylons: number
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
  unitId: string
  unitName: string
  count: number
}
