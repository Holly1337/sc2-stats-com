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

export type AllRacesResourcesSpent = {
  ProtossMinerals: number
  ProtossGas: number
  TerranMinerals: number
  TerranGas: number
  ZergMinerals: number
  ZergGas: number
}

export type ResourceStats = {
  Minerals: number,
  Gas: number,
  averageTotal: AllRacesResourcesSpent
  averageStructures: AllRacesResourcesSpent
  averageUnits: AllRacesResourcesSpent
  averageUpgrades: AllRacesResourcesSpent
}

export type UpgradesCount = {
  [key: string]: number
}

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
  unitId: string
  unitName: string
  count: number
}
