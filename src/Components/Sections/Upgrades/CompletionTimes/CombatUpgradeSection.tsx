import React, { useState } from 'react'
import Timeline from '../../../Common/ReactVisJSTimeline/ReactVisJSTimeline'
import { createTimelineItem } from '../../../Common/ReactVisJSTimeline/TimelineItem'
import { timelineOptions } from '../../../Common/ReactVisJSTimeline/options'
import { Checkbox } from 'semantic-ui-react'
import { SegmentCustom } from '../../../Segments/SegmentCustom'
import { combatUpgradeIcons } from '../../../Common/Icons/Upgrades/combatUpgrades'
import unitMetaData from '../../../../data/units-meta.json'
import { UpgradesCount, UpgradesTimes } from '../../../../../pages/types/stats'

interface UpgradeData {
  id: number
  content: string
  start: number
  amount: number
}

interface Props {
  upgradesCount: UpgradesCount
  upgradesTimes: UpgradesTimes
}

const CombatUpgradeSection = (props: Props) => {
  const { upgradesCount, upgradesTimes } = props
  const [showProtoss, setShowProtoss] = useState(true)
  const [showTerran, setShowTerran] = useState(true)
  const [showZerg, setShowZerg] = useState(true)

  const racesToShow = [
    showProtoss ? 'Prot' : undefined,
    showTerran ? 'Terr' : undefined,
    showZerg ? 'Zerg' : undefined,
  ].filter(Boolean)

  const onToggleShowProtoss = () => {
    setShowProtoss(p => !p)
  }

  const onToggleShowTerran = () => {
    setShowTerran(p => !p)
  }

  const onToggleShowZerg = () => {
    setShowZerg(p => !p)
  }

  const upgrades: UpgradeData[] = (upgradesTimes as UpgradeData[])

  // @ts-ignore
  const timelineItems = upgrades.map(upgrade => ({
    id: upgrade.content,
    start: upgrade.start / 60,
    race: unitMetaData[upgrade.content] ? unitMetaData[upgrade.content].Race.substr(0, 4) : 'Prot', // TODO: fix fallback
    // @ts-ignore
    image: combatUpgradeIcons[upgrade.content],
    amount: upgradesCount[upgrade.content],
  })).filter(
    upgrade => upgrade.image !== undefined
  ).filter(
    upgrade => racesToShow.includes(upgrade.race)
  ).map(createTimelineItem)

  return (
    <>
      <SegmentCustom heading={'Mean Combat Upgrade Completion Times'}>
        <div className={'d-flex justify-content-end'}>
          <Checkbox toggle label={'Protoss'} checked={showProtoss} onClick={onToggleShowProtoss} className={'mr-4'} />
          <Checkbox toggle label={'Terran'} checked={showTerran} onClick={onToggleShowTerran} className={'mr-4'} />
          <Checkbox toggle label={'Zerg'} checked={showZerg} onClick={onToggleShowZerg} className={'mr-4'} />
        </div>
        <Timeline
          options={timelineOptions}
          items={timelineItems}
        />
      </SegmentCustom>
    </>
  )
}

export default CombatUpgradeSection
