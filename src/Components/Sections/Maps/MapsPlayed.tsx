import React from 'react'
import MapStatHorizontal from './MapStatHorizontal'

import { Header } from 'semantic-ui-react'
import { SegmentCustom } from '../../Segments/SegmentCustom'
import { mapImagePaths } from './mapsImages'

interface MapData {
  id: string
  name: string
  count: number
}

const data = {
  "mapsPlayed": [
    {
      "id": "iceAndChrome",
      "name": "Ice and Chrome",
      "count": 120
    },
    {
      "id": "eternalEmpire",
      "name": "Eternal Empire",
      "count": 194
    },
    {
      "id": "pillarsOfGold",
      "name": "Pillars of Gold",
      "count": 113
    },
    {
      "id": "deathaura",
      "name": "Deathaura",
      "count": 140
    },
    {
      "id": "everDream",
      "name": "Ever Dream",
      "count": 158
    },
    {
      "id": "goldenWall",
      "name": "Golden Wall",
      "count": 46
    },
    {
      "id": "submarine",
      "name": "Submarine",
      "count": 28
    }
  ]
}

const MapsPlayedSectionHorizontal = () => {
  const mapsPlayed = data.mapsPlayed
  const maps = (mapsPlayed as MapData[])
    .sort((m1, m2) => m2.count - m1.count)
    .map(map => ({
      ...map,
      image: mapImagePaths[map.id]
    }))

  const countPerMap = (mapsPlayed as MapData[]).map(m => m.count)
  const maxPlayCount = Math.max(...countPerMap)

  return (
    <>
      <Header size={'huge'}>Maps Played</Header>
      <SegmentCustom>
        <div className={'mt-4'}>
          {maps.map(map => (
            <MapStatHorizontal key={map.id} {...map} maxPlayCount={maxPlayCount} />
          ))}
        </div>
      </SegmentCustom>
    </>
  )
}

export default MapsPlayedSectionHorizontal
