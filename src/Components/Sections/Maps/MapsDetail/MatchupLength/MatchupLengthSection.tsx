import React, { useState } from 'react'
import { SegmentCustom } from '../../../../Segments/SegmentCustom'
import { Checkbox, StrictTabProps, Tab } from 'semantic-ui-react'
import Image from 'next/image'
import { MapMatchupLengthGraph } from './MapMatchupLengthGraph'

const iceAndChromeImage = '/assets/images/maps/IceAndChrome.jpg'

interface Props {
  allMapsStats: {
    [mapName: string]: MapMatchupStats
  }
}

export const MatchupLengthSection = (props: Props) => {
  const { allMapsStats } = props
  const [showAverage, setShowAverage] = useState<boolean>(false)

  const onToggleShowAverage = () => {
    setShowAverage(showAverage => !showAverage)
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
    render: () => <MapMatchupLengthGraph mapName={mapName} matchupStats={stats} showAverage={showAverage} />
  }))

  return (
    <SegmentCustom heading={'Game Length Per Matchup'}>
      <div className={'d-flex justify-content-end'}>
        <Checkbox toggle label={'Show Average'} checked={showAverage} onClick={onToggleShowAverage} />
      </div>
      <Tab menu={{ tabular: true, vertical: true, fluid: true }} panes={panes} className={'mt-4'} />
    </SegmentCustom>
  )
}