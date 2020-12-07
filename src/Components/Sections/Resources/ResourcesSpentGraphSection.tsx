import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Divider, Header, Statistic } from 'semantic-ui-react'
import { SegmentCustom } from '../../Segments/SegmentCustom'
import MineralNumber from '../../Common/Numbers/MineralNumber'
import GasNumber from '../../Common/Numbers/GasNumber'
import { ResourcesAllRaces, ResourceStats, ResourceStatsBase } from '../../../types/stats'

const CandyBar = (props: any) => {
  const {
    x: oX,
    y: oY,
    width: oWidth,
    height: oHeight,
    value,
    fill
  } = props

  let x = oX;
  let y = oHeight < 0 ? oY + oHeight : oY
  let width = oWidth
  let height = Math.abs(oHeight)

  return (
    <rect
      fill={fill}
      mask='url(#mask-stripe)'
      x={x}
      y={y}
      width={width}
      height={height}
    />
  )
}

interface GamesPerRace {
  protoss: number
  terran: number
  zerg: number
}

type Matchups = {
  "ProtvTerr": number,
  "ZergvZerg": number,
  "TerrvZerg": number,
  "ProtvZerg": number,
  "ProtvProt": number,
  "TerrvTerr": number
}

const getGamesPerRace = (matchups: Matchups): GamesPerRace => ({
  protoss: (matchups.ProtvProt * 2) + matchups.ProtvTerr + matchups.ProtvZerg,
  terran: (matchups.TerrvTerr * 2) + matchups.ProtvTerr + matchups.TerrvZerg,
  zerg: (matchups.ZergvZerg * 2) + matchups.ProtvZerg + matchups.TerrvZerg
})

interface Props {
  stats: ResourceStats
}

const statsToChartData = (stats: ResourcesAllRaces) => {
  return {
    'Protoss Minerals': stats.Protoss.Minerals,
    'Protoss Gas': stats.Protoss.Gas,
    'Terran Minerals': stats.Terran.Minerals,
    'Terran Gas': stats.Terran.Gas,
    'Zerg Minerals': stats.Zerg.Minerals,
    'Zerg Gas': stats.Zerg.Gas,
  }
}

export const ResourcesSpentGraphSection = (props: Props) => {
  const { Minerals, Gas } = props.stats

  const chartData = [
    {
      name: "Total",
      ...statsToChartData(props.stats.average.perRace)
    },
    {
      name: "Units",
      ...statsToChartData(props.stats.average.Units)
    },
    {
      name: "Structures",
      ...statsToChartData(props.stats.average.Structures)
    },
    {
      name: "Upgrades",
      ...statsToChartData(props.stats.average.Upgrades)
    },
  ]

  return (
    <>
      <SegmentCustom heading={'Average Resources spent per game'}>
        <Statistic.Group widths='two' className={'mt-4'}>
          <Statistic>
            <Statistic.Value><MineralNumber value={Minerals} /></Statistic.Value>
            <Statistic.Label><Header size={'large'}>Total Minerals</Header></Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value><GasNumber value={Gas} /></Statistic.Value>
            <Statistic.Label><Header size={'large'}>Total Gas</Header></Statistic.Label>
          </Statistic>
        </Statistic.Group>
        <Divider section />
        <ResponsiveContainer height={500}>
          <BarChart
            data={chartData}
            margin={{
              top: 0, right: 20, left: 0, bottom: 32
            }}
            style={{ paddingTop: 32 }}
          >
            <pattern
              id="pattern-stripe"
              width="8" height="8"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <rect width="4" height="8" transform="translate(0,0)" fill="white"></rect>
            </pattern>
            <mask id="mask-stripe">
              <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe)" />
            </mask>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tickLine={false} />
            <Legend
              iconSize={36}
              iconType='square'
              payload={[
                { value: 'Protoss', type: 'square', id: 'Protoss', color: 'orange' },
                { value: 'Terran', type: 'square', id: 'Terran', color: '#a00' },
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
            />
            <Bar dataKey="Protoss Minerals" fill="orange" stackId={'Protoss'} />
            <Bar dataKey="Protoss Gas" fill="orange" shape={CandyBar} stackId={'Protoss'} />
            <Bar dataKey="Terran Minerals" fill="#a00" stackId={'Terran'} />
            <Bar dataKey="Terran Gas" fill="#a00" shape={CandyBar} stackId={'Terran'} />
            <Bar dataKey="Zerg Minerals" fill="#8884d8" stackId={'Zerg'} />
            <Bar dataKey="Zerg Gas" fill="#8884d8" shape={CandyBar} stackId={'Zerg'} />
          </BarChart>
        </ResponsiveContainer>
      </SegmentCustom>
    </>
  )
}
