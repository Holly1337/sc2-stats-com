import { SegmentCustom } from '../../../Segments/SegmentCustom'
import React from 'react'
import { combatUpgradeIcons } from '../../../Common/Icons/Upgrades/combatUpgrades'
import { createTimelineItem } from '../../../Common/ReactVisJSTimeline/TimelineItem'
import Timeline from '../../../Common/ReactVisJSTimeline/ReactVisJSTimeline'
import { timelineOptions } from '../../../Common/ReactVisJSTimeline/options'
import { generalUpgradeIcons } from '../../../Common/Icons/Upgrades/generalUpgrades'
import { Divider, Header } from 'semantic-ui-react'
import { PlayerName } from '../../SingleGame/PlayerName'

interface Props {
  names: [string, string]
  upgrades: [{[upgradeId: string]: number}, {[upgradeId: string]: number}]
}

export const UpgradeTimesTwoPlayers = (props: Props) => {
  let { upgrades, names } = props

  const timelineItemsData = upgrades.map(
    (upgrade) => (
      Object.entries(upgrade).map(([id, time]) => ({
        id,
        start: time,
        // @ts-ignore
        image: combatUpgradeIcons[id] ?? generalUpgradeIcons[id]
      })).filter(
        upgrade => upgrade.image !== undefined
      )
    )
  )

  const p1Times = timelineItemsData[0].map(i => i.start)
  const p2Times = timelineItemsData[1].map(i => i.start)
  const maxP1 = Math.max(...p1Times)
  const maxP2 = Math.max(...p2Times)
  const max = Math.max(maxP1, maxP2)

  return (
    <>
      <SegmentCustom heading={'Upgrades'}>
        <Header size={'large'} textAlign={'center'}><PlayerName>{names[0]}</PlayerName></Header>
        <Timeline
          options={{
            ...timelineOptions,
            start: 0,
            end: (max + 1000) * 60
          }}
          items={timelineItemsData[0].map(createTimelineItem)}
        />
        <Divider />
        <Header size={'large'} textAlign={'center'}><PlayerName>{names[1]}</PlayerName></Header>
        <Timeline
          options={{
            ...timelineOptions,
            start: 0,
            end: (max + 1000) * 60
          }}
          items={timelineItemsData[1].map(createTimelineItem)}
        />
      </SegmentCustom>
    </>
  )
}