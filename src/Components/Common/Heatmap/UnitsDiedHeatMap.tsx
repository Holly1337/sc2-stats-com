import React, { useEffect, useRef, useState } from 'react'
import h337 from 'heatmap.js'
import styles from './heatmap.module.scss'

type Props = {
  img: string
  mapSizeData: MapSizeData
  dataPoints: Array<h337.DataPoint>
  radius: number
  removeWeight?: boolean
}

export const UnitsDiedHeatMap = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const [heatmap, setHeatmap] = useState<h337.Heatmap<'value', 'x', "y"> | null>(null)
  const { img, mapSizeData, dataPoints, radius, removeWeight } = props

  useEffect(() => {
    let newHeatmap = h337.create({
      container: ref.current as HTMLElement,
      radius
    })
    setHeatmap(newHeatmap)
  }, [])

  useEffect(() => {
    if (heatmap === null) {
      return
    }
    // const dataPoints = [{ x: 73, y: 63, value: 1 }, { x: 182, y: 172, value: 1 }]
    const { heightInUnits, heightInPixels, widthInUnits, widthInPixels, offsetX, offsetY } = mapSizeData

    const adjustedDataPoints = dataPoints
      .map(point => {
        const adjustedX = (point.x - offsetX) / heightInUnits * heightInPixels
        const adjustedY = (point.y - offsetY) / widthInUnits * widthInPixels

        return {
          x: Math.round(adjustedX),
          y: -Math.round(adjustedY) + widthInPixels, // rotate by 90 degree
          value: removeWeight ? 1 : point.value,
          radius: radius
        }
      })

    const maxValue = Math.max(...adjustedDataPoints.map(d => d.value))

    let data: h337.HeatmapData<h337.DataPoint> = {
      min: 0,
      max: maxValue,
      data: adjustedDataPoints
    }
    heatmap.setData(data)
  }, [dataPoints, heatmap, radius, removeWeight])

  return (
    <div className={styles.heatmapWrapper}>
      <div
        style={{
          width: mapSizeData.widthInPixels,
          height: mapSizeData.heightInPixels,
          backgroundImage: `url(${img})`
        }}
        className={styles.heatmap}
        ref={ref}
      />
    </div>
  )
}
