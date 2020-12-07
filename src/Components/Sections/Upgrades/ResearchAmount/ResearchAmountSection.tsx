import React, { useState } from 'react'
import { generalUpgradeIcons } from '../../../Common/Icons/Upgrades/generalUpgrades'
import UpgradeIcon from '../../../Common/Icons/UpgradeIcon'
import { SegmentCustom } from '../../../Segments/SegmentCustom'
import { MatchupStats, UpgradesCount } from '../../../../../pages/types/stats'
import { countGamesPerRace } from '../../../../util/countGamesPerRace'
import { Checkbox, Header } from 'semantic-ui-react'
import unitMetaData from '../../../../data/units-meta.json'

interface Props {
  matchups: MatchupStats
  upgradesCount: UpgradesCount
}

const ResearchAmountSection = (props: Props) => {
  const { matchups, upgradesCount } = props
  const [showPercentage, setShowPercentage] = useState<boolean>(false)

  const onToggleShowPercentage = () => {
    setShowPercentage(showPercentage => !showPercentage)
  }

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
          image: generalUpgradeIcons[key]
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
      <SegmentCustom heading={'General Research'}>
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

export default ResearchAmountSection
