import React from 'react'
import { Header } from 'semantic-ui-react'
import { UnitCount } from './UnitCount'
import { SegmentCustom } from '../../../Segments/SegmentCustom'
import { groupUnits } from './utils/groupUnits'
import { UnitsBuilt } from '../../../../types/stats'

interface Props {
  units: [UnitsBuilt, UnitsBuilt]
  // races: [Race, Race]
  names: [string, string]
}

export const UnitsTwoPlayers = (props: Props) => {
  let { units, names } = props
  units = [groupUnits({...units[0]}), groupUnits({...units[1]})]

  const unitsSorted = units.map(unitsBuilt => {
    return Object
      .entries(unitsBuilt)
      .filter(([id, count]) => count > 0)
      .sort(([unitId1], [unitId2]) => unitId1.localeCompare(unitId2))
      .sort(([unitId1, count1], [unitId2, count2]) => count2 - count1)
  })

  return (
    <SegmentCustom heading={'Units Trained'}>
      <Header size={'large'} className={'ml-2 mt-4'}>{names[0]}</Header>
      <div className={'d-flex flex-wrap mt-4'}>
        {unitsSorted[0].map(([unitId, count]) => (
          <UnitCount key={unitId} id={unitId} name={unitId} count={count} type={'unit'} />
        ))}
      </div>
      <Header size={'large'} className={'ml-2'}>{names[1]}</Header>
      <div className={'d-flex flex-wrap mt-4'}>
        {unitsSorted[1].map(([unitId, count]) => (
          <UnitCount key={unitId} id={unitId} name={unitId} count={count} type={'unit'} />
        ))}
      </div>
    </SegmentCustom>
  )
}