import React, { useState } from 'react'
import { combatUpgradeIcons } from '../../../Common/Icons/Upgrades/combatUpgrades'
import UpgradeIcon from '../../../Common/Icons/UpgradeIcon'
import { Checkbox, Header } from 'semantic-ui-react'
import { SegmentCustom } from '../../../Segments/SegmentCustom'
import { countGamesPerRace } from '../../../../util/countGamesPerRace'
import { MatchupStats, UpgradesCount } from '../../../../types/stats'
import unitMetaData from '../../../../data/units-meta.json'

interface Props {
  matchups: MatchupStats
  upgradesCount: UpgradesCount
  showPercentage: boolean
  onToggleShowPercentage: () => void
}

const CombatUpgradeAmountSection = (props: Props) => {
  const { matchups, upgradesCount, showPercentage, onToggleShowPercentage } = props

  // TODO: add checkboxes to filter for each race
  const gamesPerRace = countGamesPerRace(matchups)
  const generalUpgrades = Object.entries(upgradesCount)
    .map(
      ([key, amount]) => {
        const race = unitMetaData[key] ? unitMetaData[key].Race.substr(0, 4) : 'Prot' // TODO: fix fallback
        const games = gamesPerRace[race]
        return {
          id: key,
          value: !showPercentage ? amount : amount / games,
          race,
          // @ts-ignore
          image: combatUpgradeIcons[key]
        }
      }
    )
    .filter(data => data.image !== undefined)
    .sort((a, b) => {
      if (a.value === b.value) return a.id.localeCompare(b.id)
      return b.value - a.value
    })

  const byRace = { Prot: [], Terr: [], Zerg: [] }
  generalUpgrades.forEach(upgrade => {
    byRace[upgrade.race].push(upgrade)
  })

  const protossUpgrades = byRace.Prot.map(data =>
    <UpgradeIcon key={data.id} {...data} showPercentage={showPercentage} gamesPerRace={gamesPerRace} />
  )

  const terranUpgrades = byRace.Terr.map(data =>
    <UpgradeIcon key={data.id} {...data} showPercentage={showPercentage} gamesPerRace={gamesPerRace} />
  )

  const zergUpgrades = byRace.Zerg.map(data =>
    <UpgradeIcon key={data.id} {...data} showPercentage={showPercentage} gamesPerRace={gamesPerRace} />
  )

  return (
    <>
      <SegmentCustom heading={'Combat Upgrades'}>
        <div className={'d-flex justify-content-end'}>
          <Checkbox toggle label={'Show Percentage'} checked={showPercentage} onClick={onToggleShowPercentage} className={'mr-4'} />
        </div>
        <Header size={'large'} className={'ml-2'}>Protoss</Header>
        <div className={'d-flex flex-wrap mt-4'}>
          {protossUpgrades}
        </div>
        <Header size={'large'} className={'ml-2'}>Terran</Header>
        <div className={'d-flex flex-wrap mt-4'}>
          {terranUpgrades}
        </div>
        <Header size={'large'} className={'ml-2'}>Zerg</Header>
        <div className={'d-flex flex-wrap mt-4'}>
          {zergUpgrades}
        </div>
      </SegmentCustom>
    </>
  )
}

export default CombatUpgradeAmountSection
