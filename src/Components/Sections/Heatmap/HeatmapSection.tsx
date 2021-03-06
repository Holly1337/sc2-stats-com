import React, { useEffect, useState } from 'react'
import { SegmentCustom } from '../../Segments/SegmentCustom'
import { UnitsDiedHeatMap } from '../../Common/Heatmap/UnitsDiedHeatMap'
import { mapImagePaths } from '../Maps/mapsImages'
import { Checkbox, Form, Header } from 'semantic-ui-react'
import Slider, { Handle, Range, SliderTooltip } from 'rc-slider'
import styles from './heatmap.module.scss'
import mapData from '../../../data/mapSizeData.json'

interface Props {
  mapId: string
  mapName: string
  dataPoints: Array<HeatmapDataPoint>
}

const GAMELOOPS_PER_SECOND = 22.4
const GAMELOOPS_PER_MINUTE = GAMELOOPS_PER_SECOND * 60
const SECONDS_PER_ANIMATION_STEP = 10
const GAMELOOP_RANGE = GAMELOOPS_PER_SECOND * 40

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
  const { dataPoints, mapId, mapName } = props
  const maxGameloop = Math.max(...dataPoints.map(p => p.gameloop))
  const gameTimeInMinutes = maxGameloop / GAMELOOPS_PER_MINUTE
  const totalSteps = Math.ceil(gameTimeInMinutes)

  const [radius, setRadius] = useState(10)
  const [timeRange, setTimeRange] = useState<[number, number]>([0, totalSteps])
  const [removeWeighting, setRemoveWeighting] = useState(false)
  const [animate, setAnimate] = useState(false)
  const [animationGameloop, setAnimationGameloop] = useState(0)
  const [showTimeFrame, setShowTimeFrame] = useState(false)

  useEffect(() => {
    if (!animate) {
      return
    }
    const interval = window.setInterval(() => {

      setAnimationGameloop((gl) => {
        let newGameloop = gl + (GAMELOOPS_PER_SECOND * SECONDS_PER_ANIMATION_STEP)
        if (newGameloop > maxGameloop) {
          newGameloop = 0
        }
        return newGameloop
      })
    }, 150)

    return () => {
      window.clearInterval(interval)
      setAnimationGameloop(0)
    }
  }, [animate])

  const onToggleAnimate = () => {
    setAnimate(animate => !animate)
  }

  const onToggleShowTimeframe = () => {
    setShowTimeFrame(showTimeFrame => !showTimeFrame)
  }

  const onToggleWeighting = () => {
    setRemoveWeighting(removeWeighting => !removeWeighting)
  }

  let filteredDataPoints
  if (!animate) {
    filteredDataPoints = dataPoints.filter((p) => (
      p.gameloop >= timeRange[0] * GAMELOOPS_PER_MINUTE
      && p.gameloop <= timeRange[1] * GAMELOOPS_PER_MINUTE
    ))
  } else {
    filteredDataPoints = dataPoints.filter((p) => (
      p.gameloop >= (showTimeFrame ? animationGameloop : 0)
      && p.gameloop <= animationGameloop + GAMELOOP_RANGE
    ))
  }

  const mapSizeData: MapSizeData = mapData[mapId]

  const marksRange = { 0: 0 }
  for (let i = 1; i <= totalSteps; i++) {
    marksRange[i] = `${i}:00`
  }

  return (
    <SegmentCustom heading={'Unit Death Heatmap'}>
      <Header size={'huge'} textAlign={'center'}>{mapName}</Header>
      <UnitsDiedHeatMap
        img={mapImagePaths[mapId]}
        mapSizeData={mapSizeData}
        dataPoints={filteredDataPoints}
        radius={radius}
        removeWeight={removeWeighting}
      />
      <Form size={'huge'}>
        <Form.Group widths={3} >

          <Form.Field className={styles.formField}>
            <label>Animate</label>
            <Checkbox toggle checked={animate} onClick={onToggleAnimate} label={'Animate deaths over time'} />
          </Form.Field>

          <Form.Field className={styles.formField}>
            <label>Show timeframe (on animation)  </label>
            <Checkbox toggle checked={showTimeFrame} onClick={onToggleShowTimeframe} label={"Only shows deaths over a timeframe of 40 seconds instead of all from the beginning."} />
          </Form.Field>

          <Form.Field className={styles.formField}>
            <label>Remove Weighting</label>
            <Checkbox toggle checked={removeWeighting} onClick={onToggleWeighting} label={'Show all deaths, independently of how many units died on the same spot.'} />
          </Form.Field>
        </Form.Group>

        {animate
          ? (
            <Form.Field className={styles.gametimeSlider}>
              <label>Game Time</label>
              <Slider
                min={0}
                max={totalSteps}
                step={1}
                value={Math.round(animationGameloop / GAMELOOPS_PER_MINUTE)}
                disabled={true}
                marks={marksRange}
              />
            </Form.Field>
          )
          : (
            <Form.Field className={styles.gametimeSlider}>
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
          )}

        <Form.Field className={styles.intensitySlider}>
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