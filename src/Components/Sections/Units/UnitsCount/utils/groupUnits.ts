import { UnitsBuilt } from '../../../../../types/stats'

const changelingGroup = {
  target: 'Changeling',
  from: ['ChangelingMarine', 'ChangelingMarineShield', 'ChangelingZergling', 'ChangelingZerglingWings', 'ChangelingZealot']
}

const ghostGroup = {
  target: 'Ghost',
  from: ['GhostAlternate']
}

const groups = [
  changelingGroup,
  ghostGroup
]

export const groupUnits = (unitsBuilt: UnitsBuilt): UnitsBuilt => {
  groups.forEach(({target, from}) => {
    if (unitsBuilt[target] === undefined) {
      unitsBuilt[target] = 0
    }
    from.forEach((id) => {
      unitsBuilt[target] += unitsBuilt[id]
      delete unitsBuilt[id]
    })
  })

  return unitsBuilt
}