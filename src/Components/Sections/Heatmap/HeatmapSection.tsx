import React, { useState } from 'react'
import { SegmentCustom } from '../../Segments/SegmentCustom'
import { UnitsDiedHeatMap } from '../../Common/Heatmap/UnitsDiedHeatMap'
import { mapImagePaths } from '../Maps/mapsImages'
import { Checkbox, Form, Label } from 'semantic-ui-react'
import Slider, { Handle, SliderTooltip, Range } from 'rc-slider'
import styles from './heatmap.module.scss'

interface Props {
  dataPoints: Array<HeatmapDataPoint>
}

const GAMELOOPS_PER_SECOND = 22.4
const GAMELOOPS_PER_MINUTE = GAMELOOPS_PER_SECOND * 60

const sliderStyles = {
  trackStyle: { backgroundColor: '#db2828' },
  handleStyle: {
    height: 20,
    width: 20,
    marginTop: -8,
    backgroundColor: 'rgb(255, 255, 255)',
    boxShadow: 'rgba(34, 36, 38, 0.15) 0px 1px 2px 0px, rgba(34, 36, 38, 0.15) 0px 0px 0px 1px inset',
    borderWidth: 0
  },
  dotStyle: {
    borderColor: '#db2828'
  },
  activeDotStyle: {
    backgroundColor: '#db2828',
    borderColor: '#db2828',
  }
}

export const HeatmapSection = (props: Props) => {
  const { dataPoints } = props
  const maxGameloop = Math.max(...dataPoints.map(p => p.gameloop))
  const gameTimeInMinutes = maxGameloop / GAMELOOPS_PER_MINUTE
  const totalSteps = Math.ceil(gameTimeInMinutes)

  const [radius, setRadius] = useState(10)
  const [timeRange, setTimeRange] = useState<[number, number]>([0, totalSteps])
  const [removeWeighting, setRemoveWeighting] = useState(false)

  let filteredDataPoints = dataPoints.filter((p) => (
    p.gameloop >= timeRange[0] * GAMELOOPS_PER_MINUTE
    && p.gameloop <= timeRange[1] * GAMELOOPS_PER_MINUTE
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

  const marksRange = { 0: 0 }
  for (let i = 1; i <= totalSteps; i++) {
    marksRange[i] = `${i}:00`
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
      <Form size={'huge'}>
        <Form.Field className={styles.formField}>
          <label>Intensity</label>
          <Slider
            min={1}
            max={30}
            step={1}
            value={radius}
            handle={handle}
            onChange={setRadius}
            marks={{ 1: 1, 5: 5, 10: 10, 15: 15, 20: 20, 25: 25, 30: 30 }}
          />
        </Form.Field>
        <Form.Field className={styles.formField}>
          <label>Game Time</label>
          <Range
            min={0}
            max={totalSteps}
            step={1}
            allowCross={false}
            value={timeRange}
            handle={timeHandle}
            // @ts-ignore
            onChange={setTimeRange}
            marks={marksRange}
          />
        </Form.Field>
        <Form.Field className={styles.formField}>
          <label>Remove Weighting</label>
          <Checkbox toggle checked={removeWeighting} onClick={onToggleWeighting} />
        </Form.Field>
      </Form>


    </SegmentCustom>
  )
}

const handle = (props: any) => {
  const { value, dragging, index, ...restProps } = props
  return (
    <SliderTooltip
      prefixCls="rc-slider-tooltip"
      overlay={`${value}`}
      visible={dragging}
      placement="bottom"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </SliderTooltip>
  )
}

const timeHandle = (props: any) => {
  const { value, dragging, index, ...restProps } = props
  return (
    <SliderTooltip
      prefixCls="rc-slider-tooltip"
      overlay={`${value}:00`}
      visible={dragging}
      placement="bottom"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </SliderTooltip>
  )
}