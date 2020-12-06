import React, { useState } from 'react'
import { SegmentCustom } from '../../../../Segments/SegmentCustom'
import { Checkbox, StrictTabProps, Tab } from 'semantic-ui-react'
import Image from 'next/image'
import { MatchupGrid } from './MatchupGrid'

const iceAndChromeImage = '/assets/images/maps/IceAndChrome.jpg'

interface Props {
  allMapsStats: {
    [mapName: string]: MapMatchupStats
  }
}

export const MapsMatchupSection = (props: Props) => {
  const { allMapsStats } = props
  const [sortByMatchUp, setSortByMatchUp] = useState<boolean>(false)

  const onToggleSortByMatchup = () => {
    setSortByMatchUp(s => !s)
  }

  const panes: StrictTabProps['panes'] = Object.entries(allMapsStats).map(([mapName, stats]) => ({
    menuItem: {
      id: mapName,
      content: (
        <div className={'d-flex align-items-center'}>
          <Image src={iceAndChromeImage} width={48} height={48} />
          <div className={'ml-4'}>{mapName}</div>
        </div>
      )
    },
    render: () => <MatchupGrid mapName={mapName} matchupStats={stats} sortByMatchup={sortByMatchUp} />
  }))

  return (
    <SegmentCustom heading={'Matchup Stats'}>
      <div className={'d-flex justify-content-end'}>
        <Checkbox toggle label={'Sort by matchup'} checked={sortByMatchUp} onClick={onToggleSortByMatchup} />
      </div>
      <Tab menu={{ tabular: true, vertical: true, fluid: true }} panes={panes} className={'mt-4'} />
    </SegmentCustom>
  )
}