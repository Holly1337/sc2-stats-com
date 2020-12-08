import React, { useState } from 'react'
import { SegmentCustom } from '../../Segments/SegmentCustom'
import { UnitsDiedHeatMap } from '../../Common/Heatmap/UnitsDiedHeatMap'
import { mapImagePaths } from '../Maps/mapsImages'
import { Slider } from "react-semantic-ui-range"
import { Checkbox, Header, Label } from 'semantic-ui-react'

interface Props {
  dataPoints: Array<HeatmapDataPoint>
}

export const HeatmapSection = (props: Props) => {
  const { dataPoints } = props
  const maxGameloop = Math.max(...dataPoints.map(p => p.gameloop))
  const [radius, setRadius] = useState(10)
  const [timeRange, setTimeRange] = useState<[number, number]>([0, maxGameloop])
  const [removeWeighting, setRemoveWeighting] = useState(false)

  let filteredDataPoints = dataPoints.filter((p) => (
    p.gameloop >= timeRange[0]
    && p.gameloop <= timeRange[1]
  ))

  const onToggleWeighting = () => {
    setRemoveWeighting(removeWeighting => !removeWeighting)
  }

  const mapSizeData: MapSizeData = {
    heightInUnits: 140,
    widthInUnits: 144,
    heightInPixels: 583,
    widthInPixels: 600,
    offsetX: 55,
    offsetY: 44
  }

  const intensitySliderSettings = {
    start: radius,
    min: 2,
    max: 30,
    step: 1,
    onChange: setRadius
  }

  const timeRangeSliderSettings = {
    start: [0, maxGameloop],
    min: 0,
    max: maxGameloop,
    step: 100,
    onChange: (values) => setTimeRange(values)
  }

  return (
    <SegmentCustom heading={'Unit Death Headmap'}>
      <UnitsDiedHeatMap
        img={mapImagePaths.iceAndChrome}
        mapSizeData={mapSizeData}
        dataPoints={filteredDataPoints}
        radius={radius}
        removeWeight={removeWeighting}
      />
      <Header size={'large'}>Intensity</Header>
      <Slider value={radius} settings={intensitySliderSettings} />
      <div>
        <Checkbox toggle label={'Remove weighting'} checked={removeWeighting} onClick={onToggleWeighting} />
      </div>
      <Label>Time Range</Label><Label>From:</Label><Label color="red">{timeRange[0]}</Label><Label>To:</Label><Label color="red">{timeRange[1]}</Label>
      <Slider value={timeRange} settings={timeRangeSliderSettings} multiple />
    </SegmentCustom>
  )
}