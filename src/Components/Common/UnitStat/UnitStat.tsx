import React from 'react'

const Marine = '/assets/images/units/marine.png'
const Zergling = '/assets/images/units/zergling.png'
const Zealot = '/assets/images/units/zealot.png'
const Baneling = '/assets/images/units/baneling.png'
const Overlord = '/assets/images/units/overlord.png'
const SupplyDepot = '/assets/images/buildings/supplydepot.png'
const Pylon = '/assets/images/buildings/pylon.webp'
const Drone = '/assets/images/units/drone.png'
const SCV = '/assets/images/units/scv.png'
const Probe = '/assets/images/units/probe.png'
const defaultImage = '/assets/images/units/default.png'
import ImageStat from '../ImageStat/ImageStat'

import allUnitCost from '../../../data/units-cost.json'

const images: { [id: string]: string } = {
  Marine,
  Zergling,
  Zealot,
  Baneling,
  Overlord,
  SupplyDepot,
  Pylon,
  Drone,
  SCV,
  Probe
}

interface Props {
  id: string
  count: number
  averagePerGame?: {
    current: number
    previous?: number
  }
  showCost?: boolean
  height?: number
}

const UnitStat: React.FC<Props> = (props) => {
  const { id, count, averagePerGame, showCost, height } = props
  const image = images[id] ?? defaultImage

  let cost
  const costPerUnit = (allUnitCost as any)[id]
  if (showCost === true && costPerUnit !== undefined) {
    cost = {
      minerals: costPerUnit.Minerals * count,
      gas: costPerUnit.Gas * count
    }
  }

  return (
    <ImageStat
      id={id}
      image={image}
      count={count}
      averagePerGame={averagePerGame}
      cost={cost}
      height={height}
    />
  )
}

export default UnitStat
