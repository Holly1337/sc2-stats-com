import React, { useState } from 'react'
import { Checkbox, Header } from 'semantic-ui-react'
import {
  Bar,
  BarChart,
  BarChartProps,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

interface Props {
  mapName: string
  matchupStats: MapMatchupStats
  showAverage?: boolean
}

const shortRaceToFullRace = (shortRace: string): string => {
  if (shortRace === 'P' || shortRace === 'Prot') {
    return 'Protoss'
  }
  if (shortRace === 'T' || shortRace === 'Terr') {
    return 'Terran'
  }
  if (shortRace === 'Z' || shortRace === 'Zerg') {
    return 'Zerg'
  }
}

const secondsToTimeString = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secondsModulo = seconds % 60
  return `${hours > 0 ? hours + ':' : ''}${minutes < 10 ? '0' : ''}${minutes}:${secondsModulo < 10 ? '0' : ''}${secondsModulo}`
}

export const MapMatchupLengthGraph = (props: Props) => {
  const { mapName, matchupStats, showAverage } = props

  const chartData: BarChartProps['data'] = Object.entries(matchupStats)
    .map(([matchup, stats]) => {
      const [race1, race2] = matchup.split('v')
      const [race1Short, race2Short] = [race1.substr(0, 1), race2.substr(0, 1)]
      let valRace1 = stats[`timeWhen${race1}Won`]
      let valRace2 = stats[`timeWhen${race2}Won`]
      if (showAverage) {
        valRace1 = valRace1 / stats.games
        valRace2 = valRace2 / stats.games
      }

      return {
        name: `${race1Short}v${race2Short}`,
        [shortRaceToFullRace(race1Short)]: Math.round(valRace1),
        [shortRaceToFullRace(race2Short)]: Math.round(valRace2),
      }
    }
  ).sort((a, b) => a.name.localeCompare(b.name))

  return (
    <>
      <Header size={'huge'} textAlign={'center'}>{mapName}</Header>
      <ResponsiveContainer height={500}>
        <BarChart
          data={chartData}
          margin={{
            top: 0, right: 20, left: 20, bottom: 32
          }}
          style={{ paddingTop: 32 }}
          maxBarSize={60}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickLine={false} tickFormatter={secondsToTimeString} />
          <Legend
            iconSize={36}
            iconType='square'
            payload={[
              { value: 'Protoss', type: 'square', id: 'Protoss', color: 'orange' },
              { value: 'Terran', type: 'square', id: 'Terran', color: '#b00' },
              { value: 'Zerg', type: 'square', id: 'Zerg', color: '#8884d8' }
            ]}
            verticalAlign={'top'}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              borderRadius: 10,
              borderColor: '#a6a6a6'
            }}
            cursor={{ fill: '#eee' }}
            formatter={secondsToTimeString}
          />
          <Bar dataKey="Protoss" fill="orange" stackId={showAverage ? null : 'races'} />
          <Bar dataKey="Terran" fill="#a00" stackId={showAverage ? null : 'races'} />
          <Bar dataKey="Zerg" fill="#8884d8" stackId={showAverage ? null : 'races'} />
        </BarChart>
      </ResponsiveContainer>
      {!showAverage && (
        <div className={'mt-4'}>
          Colors represent gametime of games that the race has won.
          <br/>
          For example in PvT: If orange is 1:30:00 and and red is 1:00:00 means, that games where Protoss won took
          a total of 1 hour and 30 minutes and games where Terrans won took a total of 1 hour. Also all PvT games took a total of 2 hours and 30 minutes.
        </div>
      )}
      {showAverage && (
        <div className={'mt-4'}>
          Colors represent the average gametime of games that the race has won.
        </div>
      )}
    </>
  )
}