import React from 'react'
import { Divider, Grid } from 'semantic-ui-react'
import { SegmentCustom } from '../../Segments/SegmentCustom'
import UnitStat from '../../Common/UnitStat/UnitStat'
import Number from '../../Common/Numbers/Number'
import SectionHeading from '../../Common/Headings/SectionHeading/SectionHeading'
import MineralNumber from '../../Common/Numbers/MineralNumber'
import { MatchupStats, WorkersBuilt, WorkersBuiltPrevious } from '../../../types/stats'

const COST_PER_WORKER = 50

interface Props {
  current: WorkersBuilt
  previous: WorkersBuiltPrevious
  matchups: MatchupStats
}

export const WorkerSection = (props: Props) => {
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

  const data = {
    SCV: current.SCV,
    Drone: current.Drone,
    Probe: current.Probe
  }
  const previousAverage = {
    SCV: previous.SCV,
    Drone: previous.Drone,
    Probe: previous.Probe
  }

  const totalWorkers = data.SCV + data.Drone + data.Probe
  const mineralCost = totalWorkers * COST_PER_WORKER

  const dataAsArray = [
    { id: 'Drone', count: data.Drone, games: totalGames.Zerg, previousAverage: previousAverage.Drone },
    { id: 'Probe', count: data.Probe, games: totalGames.Prot, previousAverage: previousAverage.Probe },
    { id: 'SCV', count: data.SCV, games: totalGames.Terr, previousAverage: previousAverage.SCV }
  ].sort((s1, s2) => s2.count - s1.count)

  return (
    <>
      <SegmentCustom heading={'Workers'}>
        <SectionHeading
          title={<><Number value={totalWorkers} /> Workers were created with <MineralNumber value={mineralCost}/> Minerals</>}
          subtitle={<>Gray values are from {previousName}.</>}
        />
        <Divider section />
        <Grid columns={3} textAlign={'center'}>
          <Grid.Row>
            {dataAsArray.map(({ id, count, games, previousAverage }) => (
              <Grid.Column key={id}>
                <UnitStat
                  id={id}
                  count={count}
                  averagePerGame={{ current: (Math.round(count * 100 / games) / 100), previous: previousAverage }}
                />
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </SegmentCustom>
    </>
  )
}