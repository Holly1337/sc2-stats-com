import React, { useState } from 'react'
import { SegmentCustom } from '../../../../Segments/SegmentCustom'
import { Checkbox, Select, StrictTabProps, Tab } from 'semantic-ui-react'
import Image from 'next/image'
import { MatchupGrid } from './MatchupGrid'
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

export const MapsMatchupSection = (props: Props) => {
  const { selectedMapIndex, onSelectedMapChange, allMapsStats } = props
  const [sortByMatchUp, setSortByMatchUp] = useState<boolean>(false)
  const mapOptions = Object.keys(allMapsStats).map((map, index) => ({ key: map, value: index, text: map }))

  const onToggleSortByMatchup = () => {
    setSortByMatchUp(s => !s)
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
    render: () => <MatchupGrid mapName={mapName} matchupStats={stats} sortByMatchup={sortByMatchUp} />
  }))

  return (
    <SegmentCustom heading={'Matchup Stats'}>
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
          label={'Sort by matchup'}
          checked={sortByMatchUp}
          onClick={onToggleSortByMatchup}
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
