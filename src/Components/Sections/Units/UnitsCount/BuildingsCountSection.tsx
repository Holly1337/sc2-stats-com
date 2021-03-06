import React, { useState } from 'react'
import { SegmentCustom } from '../../../Segments/SegmentCustom'
import { UnitCount } from './UnitCount'
import unitsMeta from '../../../../data/units-meta.json'
import { Checkbox, Header } from 'semantic-ui-react'
import { groupBuildings } from './utils/groupBuildings'
import { countGamesPerRace } from '../../../../util/countGamesPerRace'
import { MatchupStats, UnitsBuilt } from '../../../../types/stats'
import { roundTwoDecimals } from '../../../../util/round'

interface Props {
  matchups: MatchupStats
  unitsBuilt: UnitsBuilt
  showAverage: boolean
  onToggleShowAverage: () => void
}

export const BuildingsCountSection = (props: Props) => {
  let { matchups, unitsBuilt, showAverage, onToggleShowAverage } = props
  unitsBuilt = groupBuildings({ ...unitsBuilt })

  const unitsSorted = Object.entries(unitsBuilt)
    .sort(([unitId1], [unitId2]) => unitId1.localeCompare(unitId2))
    .sort(([unitId1, count1], [unitId2, count2]) => count2 - count1)

  const byRace = { Protoss: [], Terran: [], Zerg: [] }

  const totalGamesPerRace = showAverage
    ? countGamesPerRace(matchups)
    : { Prot: 1, Terr: 1, Zerg: 1, Rand: 1}

  unitsSorted.forEach(([unitId, count]) => {
    const unitMeta = unitsMeta[unitId]
    if (unitMeta === undefined) {
      return
    }
    const countToShow = roundTwoDecimals(
      count / totalGamesPerRace[unitMeta.Race.substr(0, 4)]
    )
    byRace[unitMeta.Race].push([unitId, countToShow])
  })
  // Add options to filter
  // by matchup
  // game length
  return (
    <SegmentCustom heading={'Buildings Constructed'}>
      <div className={'d-flex justify-content-end'}>
        <Checkbox toggle label={'Show Average Per Game'} checked={showAverage} onClick={onToggleShowAverage} className={'mr-4'} />
      </div>
      <Header size={'large'} className={'ml-4'}>Protoss</Header>
      <div className={'d-flex flex-wrap mt-4'}>
        {byRace.Protoss.map(([unitId, count]) => (
          <UnitCount key={unitId} id={unitId} name={unitId} count={count} type={'building'} />
        ))}
      </div>
      <Header size={'large'} className={'ml-4'}>Terran</Header>
      <div className={'d-flex flex-wrap mt-4'}>
        {byRace.Terran.map(([unitId, count]) => (
          <UnitCount key={unitId} id={unitId} name={unitId} count={count} type={'building'} />
        ))}
      </div>
      <Header size={'large'} className={'ml-4'}>Zerg</Header>
      <div className={'d-flex flex-wrap mt-4'}>
        {byRace.Zerg.map(([unitId, count]) => (
          <UnitCount key={unitId} id={unitId} name={unitId} count={count} type={'building'} />
        ))}
      </div>
    </SegmentCustom>
  )
}
