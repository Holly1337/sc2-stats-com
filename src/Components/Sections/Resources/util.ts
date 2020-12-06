import unitCost from '../../../data/units-cost.json'

interface TreemapData {
  Race: 'Protoss' | 'Terran' | 'Zerg'
  Type: 'Structures' | 'Units' | 'Upgrades'
  Resources: number
  Gas: number
  Minerals: number
}

interface NormalizedTreemapData {
  Race: string
  Type: string
  Resources: number
  Gas: number
  Minerals: number
}

type UnitsBuilt = {
  [id: string]: number
}

type UpgradesCount = {
  [id: string]: number
}

export const buildTreemapData = (unitsBuilt: UnitsBuilt, upgradesResearched: UpgradesCount): TreemapData[] => {
  const treemapData: TreemapData[] = []
  const costMetaData = { ...unitCost }

  Object.entries(unitsBuilt).forEach(([unitName, amount]: [string, number]) => {
    // @ts-ignore
    const unitData = costMetaData[unitName]
    if (unitData === undefined) {
      return
    }
    const { Race, Type, Minerals, Gas } = unitData
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    updateData(treemapData, Race, Type, Minerals, Gas, amount)
  })

  Object.entries(upgradesResearched).forEach(([upgradeName, amount]: [string, number]) => {
    // @ts-ignore
    const unitData = costMetaData[upgradeName]
    if (unitData === undefined) {
      return
    }
    const { Race, Type, Minerals, Gas } = unitData
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    updateData(treemapData, Race, Type, Minerals, Gas, amount)
  })

  return addCountToLabels(treemapData)
}

const updateData = (treemapData: TreemapData[], race: TreemapData['Race'], type: TreemapData['Type'], minerals: number, gas: number, amount: number): void => {
  const existingData = treemapData.find(data => data.Race === race && data.Type === type)
  if (existingData !== undefined) {
    existingData.Resources += (minerals + gas) * amount
    existingData.Minerals += minerals * amount
    existingData.Gas += gas * amount
  } else {
    treemapData.push({
      Race: race,
      Type: type,
      Resources: (minerals + gas) * amount,
      Minerals: minerals,
      Gas: gas
    })
  }
}

const addCountToLabels = (treemapData: TreemapData[]): TreemapData[] => {
  const normalizedData: NormalizedTreemapData[] = [...treemapData]
  const raceResources = {
    Protoss: 0,
    Terran: 0,
    Zerg: 0
  }

  normalizedData.forEach(data => {
    raceResources[(data as TreemapData).Race] += data.Resources
  })

  // normalizedData.forEach(data => {
  //   const currentRaceResources = raceResources[(data as TreemapData).Race]
  //   const formattedRaceResources = new Intl.NumberFormat('en-EN').format(currentRaceResources)
  //
  //   const currentResources = data.Resources
  //   const formattedResources = new Intl.NumberFormat('en-EN').format(currentResources)
  //   // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  //   data.Race = `${data.Race}: ${formattedRaceResources}`
  //   // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  //   data.Type = `${data.Type}: ${formattedResources}`
  // })

  return treemapData
}
