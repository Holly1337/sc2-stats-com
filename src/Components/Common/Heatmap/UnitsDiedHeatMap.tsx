import React, { useEffect, useRef, useState } from 'react'
import h337 from 'heatmap.js'
import styles from './heatmap.module.scss'
import AspectRatio from 'react-aspect-ratio'

type Props = {
  img: string
  mapSizeData: MapSizeData
  dataPoints: Array<h337.DataPoint>
  radius: number
  removeWeight?: boolean
}

export const UnitsDiedHeatMap = (props: Props) => {
  const ref = useRef<any>(null)
  const [heatmap, setHeatmap] = useState<h337.Heatmap<'value', 'x', "y"> | null>(null)
  const { img, mapSizeData, dataPoints, radius, removeWeight } = props

  useEffect(() => {
    let newHeatmap = h337.create({
      container: ref.current.node as HTMLElement,
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
    const heightModifier = widthInUnits / heightInUnits
    const widthModifier = heightInUnits / widthInUnits

    let yModifier = mapSizeData.yModifier ?? 1
    let xModifier = heightInUnits < widthInUnits ? widthModifier : 1
    if (mapSizeData.xModifier !== undefined) {
      xModifier = mapSizeData.xModifier
    }

    const adjustedDataPoints = dataPoints
      .map(point => {
        const adjustedX = ((point.x - offsetX) / heightInUnits * heightInPixels) * xModifier
        const adjustedY = (point.y - offsetY) / widthInUnits * widthInPixels * yModifier

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

  const { heightInPixels, widthInPixels } = mapSizeData

  return (
    <AspectRatio
      ratio={`${widthInPixels}/${heightInPixels}`}
      style={{
        maxWidth: widthInPixels,
        backgroundImage: `url(${img})`
      }}
      className={styles.heatmapWrapper}
      ref={ref}
    >
      {/* AspectRatio requires a single child component */}
      <div />
    </AspectRatio>
  )
}
