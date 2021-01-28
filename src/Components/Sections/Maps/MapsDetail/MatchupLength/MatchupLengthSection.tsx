import React, { useState } from 'react'
import { SegmentCustom } from '../../../../Segments/SegmentCustom'
import { Checkbox, Select, StrictTabProps, Tab } from 'semantic-ui-react'
import Image from 'next/image'
import { MapMatchupLengthGraph } from './MapMatchupLengthGraph'
import { getMapImageByName } from '../../mapsImages'
import { TabProps } from 'semantic-ui-react/dist/commonjs/modules/Tab/Tab'
import { DropdownProps } from 'semantic-ui-react/dist/commonjs/modules/Dropdown/Dropdown'
import styles from '../mapsdetail.module.scss'

interface Props {
  selectedMapIndex: number
  onSelectedMapChange: (mapIndex: number) => void
  allMapsStats: {
    [mapName: string]: MapMatchupStats
  }
}

export const MatchupLengthSection = (props: Props) => {
  const { selectedMapIndex, onSelectedMapChange, allMapsStats } = props
  const [showAverage, setShowAverage] = useState<boolean>(false)
  const mapOptions = Object.keys(allMapsStats).map((map, index) => ({ key: map, value: index, text: map }))

  const onToggleShowAverage = () => {
    setShowAverage(showAverage => !showAverage)
  }

  const onTabChange = (event, data: TabProps) => {
    onSelectedMapChange(Number(data.activeIndex))
  }

  const onSelectChange = (event, data: DropdownProps) => {
    onSelectedMapChange(Number(data.value))
  }

  const panes: StrictTabProps['panes'] = Object.entries(allMapsStats).map(([mapName, stats]) => ({
    menuItem: {
      id: mapName,
      content: (
        <div className={'d-flex align-items-center'}>
          <Image src={getMapImageByName(mapName)} width={48} height={48} />
          <div className={'ml-4'}>{mapName}</div>
        </div>
      )
    },
    render: () => <MapMatchupLengthGraph mapName={mapName} matchupStats={stats} showAverage={showAverage} />
  }))

  return (
    <SegmentCustom heading={'Game Time Per Matchup'}>
      <div className={styles.controls}>
        <div>
          <Select
            options={mapOptions}
            value={mapOptions[selectedMapIndex].value}
            onChange={onSelectChange}
            className={'mobile tablet only'}
          />
        </div>
        <Checkbox
          toggle
          label={'Show average game length'}
          checked={showAverage}
          onClick={onToggleShowAverage}
          className={'justify-self-end'}
        />
      </div>
      <Tab
        menu={{ tabular: true, vertical: true, fluid: true }}
        panes={panes}
        className={'mt-4 responsive-tab-container'}
        activeIndex={selectedMapIndex}
        onTabChange={onTabChange}
      />
    </SegmentCustom>
  )
}
