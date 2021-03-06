import { UnitsBuilt } from '../../../../../types/stats'

const reactorGroup = {
  target: 'Reactor',
  from: ['BarracksReactor', 'FactoryReactor', 'StarportReactor']
}

const techlabGroup = {
  target: 'TechLab',
  from: ['BarracksTechLab', 'FactoryTechLab', 'StarportTechLab']
}

const creepTumorGroup = {
  target: 'CreepTumor',
  from: ['CreepTumorQueen']
}

const assimilatorGroup = {
  target: 'Assimilator',
  from: ['AssimilatorRich']
}

const extractorGroup = {
  target: 'Extractor',
  from: ['ExtractorRich']
}

const refineryGroup = {
  target: 'Refinery',
  from: ['RefineryRich']
}

const groups = [
  reactorGroup,
  techlabGroup,
  creepTumorGroup,
  assimilatorGroup,
  extractorGroup,
  refineryGroup
]

export const groupBuildings = (unitsBuilt: UnitsBuilt): UnitsBuilt => {
  groups.forEach(({target, from}) => {
    if (unitsBuilt[target] === undefined) {
      unitsBuilt[target] = 0
    }
    from.forEach((id) => {
      const toAdd = unitsBuilt[id]
      if (typeof toAdd !== 'number') {
        return
      }
      unitsBuilt[target] += toAdd
      delete unitsBuilt[id]
    })
  })

  return unitsBuilt
}