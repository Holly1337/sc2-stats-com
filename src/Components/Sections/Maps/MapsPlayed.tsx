import React from 'react'
import MapStatHorizontal from './MapStatHorizontal'
import { SegmentCustom } from '../../Segments/SegmentCustom'
import { mapImagePaths } from './mapsImages'
import { MapsPlayedStats } from '../../../types/stats'

interface MapData {
  id: string
  name: string
  count: number
}

interface Props {
  stats: MapsPlayedStats
}

const MapsPlayedSectionHorizontal = (props: Props) => {
  const mapsPlayed = props.stats
  const maps = (mapsPlayed as MapData[])
    .sort((m1, m2) => m2.count - m1.count)
    .map(map => ({
      ...map,
      image: mapImagePaths[map.id]
    }))

  const countPerMap = (mapsPlayed as MapData[]).map(m => m.count)
  const maxPlayCount = Math.max(...countPerMap)

  return (
    <SegmentCustom heading={'Maps Played'}>
      <div className={'mt-4'}>
        {maps.map(map => (
          <MapStatHorizontal key={map.id} {...map} maxPlayCount={maxPlayCount} />
        ))}
      </div>
    </SegmentCustom>
  )
}

export default MapsPlayedSectionHorizontal
