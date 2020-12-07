import React from 'react'
import { Divider, Grid, Header } from 'semantic-ui-react'
import { SegmentCustom } from '../../Segments/SegmentCustom'
import UnitStat from '../../Common/UnitStat/UnitStat'
import Number from '../../Common/Numbers/Number'
import SectionHeading from '../../Common/Headings/SectionHeading/SectionHeading'
import { MatchupStats, SupplyStructuresBuilt, SupplyStructuresBuiltPrevious } from '../../../types/stats'

const SUPPLY_PER_BUILDING = 8

interface Props {
  current: SupplyStructuresBuilt
  previous: SupplyStructuresBuiltPrevious
  matchups: MatchupStats
}

export const SupplySection = (props: Props) => {
  const { current, previous, matchups } = props
  const previousName = previous.previousEventName

  const totalGames: {[key: string]: number} = {
    Zerg: 0,
    Terr: 0,
    Prot: 0
  }

  matchups.forEach((matchup) => {
    const games = matchup.race1Wins + matchup.race2Wins
    totalGames[matchup.race1] += games
    totalGames[matchup.race2] += games
  })

  const units = {
    SupplyDepot: current.SupplyDepot,
    Overlord: current.Overlord,
    Pylon: current.Pylon
  }
  const previousAverage = {
    SupplyDepot: previous.SupplyDepot,
    Overlord: previous.Overlord,
    Pylon: previous.Pylon
  }

  const totalStructures = units.SupplyDepot + units.Overlord + units.Pylon
  const totalSupply = totalStructures * SUPPLY_PER_BUILDING

  const dataAsArray = [
    { id: 'SupplyDepot', count: units.SupplyDepot, games: totalGames.Terr, previousAverage: previousAverage.SupplyDepot },
    { id: 'Overlord', count: units.Overlord, games: totalGames.Zerg, previousAverage: previousAverage.Overlord },
    { id: 'Pylon', count: units.Pylon, games: totalGames.Prot, previousAverage: previousAverage.Pylon }
  ].sort((s1, s2) => s2.count - s1.count)

  return (
    <>
      <SegmentCustom heading={'Look at the supply'}>
        <SectionHeading
          title={<><Number value={totalStructures} /> supply structures generated <Number value={totalSupply} /> free supply</>}
          subtitle={<>Gray values are from {previousName}</>}
        />
        <Divider section />
        <Grid columns={3} textAlign={'center'}>
          <Grid.Row>
            {dataAsArray.map(({ id, count, games, previousAverage }) => (
              <Grid.Column key={id}>
                <UnitStat
                  id={id}
                  count={count}
                  averagePerGame={{ current: Math.round(count * 100 / games) / 100, previous: previousAverage }}
                  height={200}
                />
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </SegmentCustom>
    </>
  )
}