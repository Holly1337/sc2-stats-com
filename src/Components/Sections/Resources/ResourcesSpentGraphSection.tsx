import React from 'react'

import itemsCost from '../../../data/units-cost.json'
import { buildTreemapData } from './util'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'
import { Divider, Header, Statistic } from 'semantic-ui-react'
import { SegmentCustom } from '../../Segments/SegmentCustom'
import MineralNumber from '../../Common/Numbers/MineralNumber'
import GasNumber from '../../Common/Numbers/GasNumber'

interface BarChartDataPoint {
  name: string
  ProtossMinerals: number
  ProtossGas: number
  TerranMinerals: number
  TerranGas: number
  ZergMinerals: number
  ZergGas: number
}

interface PreFormattedPoint {
  ProtossMinerals: number
  ProtossGas: number
  TerranMinerals: number
  TerranGas: number
  ZergMinerals: number
  ZergGas: number
}

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

export const ResourcesSpentGraphSection: React.FC = () => {
  const data = {
    matchups: {
      "ProtvTerr": 166,
      "ZergvZerg": 75,
      "TerrvZerg": 184,
      "ProtvZerg": 199,
      "ProtvProt": 126,
      "TerrvTerr": 49
    },
    upgradesCount: {
      "BansheeSpeed": 20,
      "zerglingmovementspeed": 40,
      "BlinkTech": 30,
    },
    resourcesSpent: {
      "Minerals": 34628100,
      "Gas": 8143125
    },
    unitsBuilt: {
      "SCV": 34399,
      "Probe": 36399,
      "Drone": 32399,
      "SupplyDepot": 32399,
      "Pylon": 32399,
      "Hatchery": 32399,
    }
  }

  const gamesPerRace = getGamesPerRace(data.matchups)
  const upgradesCounts: { [key: string]: number } = data.upgradesCount
  const spent: { Minerals: number, Gas: number } = { ...data.resourcesSpent }
  const treemapData = buildTreemapData(data.unitsBuilt, data.upgradesCount)
  const raceData: {[id: string]: number} = {
    ProtossMinerals: 0,
    ProtossGas: 0,
    TerranMinerals: 0,
    TerranGas: 0,
    ZergMinerals: 0,
    ZergGas: 0
  }

  const preData: any = {}

  treemapData.forEach(data => {
    const name = data.Type
    preData[name] = {
      ...preData[name],
      [`${data.Race}Minerals`]: data.Minerals,
      [`${data.Race}Gas`]: data.Gas
    }
    // add to global race data
    raceData[`${data.Race}Minerals`] += data.Minerals
    raceData[`${data.Race}Gas`] += data.Gas
  })

  // @ts-ignore
  const chartData = Object.entries(preData).map(([name, data]) => ({ name, ...data }))
  chartData.unshift({ name: 'Total', ...raceData })
  chartData.forEach(data => {
    data.ProtossMinerals = Math.ceil(data.ProtossMinerals / gamesPerRace.protoss)
    data.ProtossGas = Math.ceil(data.ProtossGas / gamesPerRace.protoss)
    data.TerranMinerals = Math.ceil(data.TerranMinerals / gamesPerRace.terran)
    data.TerranGas = Math.ceil(data.TerranGas / gamesPerRace.terran)
    data.ZergMinerals = Math.ceil(data.ZergMinerals / gamesPerRace.zerg)
    data.ZergGas = Math.ceil(data.ZergGas / gamesPerRace.zerg)
  })

  Object.entries(upgradesCounts).forEach(
    ([name, amount]) => {
      // @ts-ignore
      const upgradeData = itemsCost[name]
      if (upgradeData === undefined) {
        return
      }
      spent.Minerals += upgradeData.Minerals * amount
      spent.Gas += upgradeData.Gas * amount
    }
  )

  return (
    <>
      <Header size={'huge'}>Average Resources spent per game</Header>
      <SegmentCustom>
        <Statistic.Group widths='two'>
          <Statistic>
            <Statistic.Value><MineralNumber value={spent.Minerals} /></Statistic.Value>
            <Statistic.Label>Total Minerals</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value><GasNumber value={spent.Gas} /></Statistic.Value>
            <Statistic.Label>Total Gas</Statistic.Label>
          </Statistic>
        </Statistic.Group>
        <Divider section />
        <BarChart
          width={1100}
          height={440}
          data={chartData}
          margin={{
            top: 0, right: 0, left: 0, bottom: 0
          }}
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
            iconSize={48}
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
              backgroundColor: '#1a202b',
              borderRadius: 10,
              borderColor: '#2d3748'
            }}
            cursor={{ fill: '#4a5568' }}
          />
          <Bar dataKey="ProtossMinerals" fill="orange" stackId={'Protoss'} />
          <Bar dataKey="ProtossGas" fill="orange" shape={CandyBar} stackId={'Protoss'} />
          <Bar dataKey="TerranMinerals" fill="#a00" stackId={'Terran'} />
          <Bar dataKey="TerranGas" fill="#a00" shape={CandyBar} stackId={'Terran'} />
          <Bar dataKey="ZergMinerals" fill="#8884d8" stackId={'Zerg'} />
          <Bar dataKey="ZergGas" fill="#8884d8" shape={CandyBar} stackId={'Zerg'} />
        </BarChart>
      </SegmentCustom>
    </>
  )
}
