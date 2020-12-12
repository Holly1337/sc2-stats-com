import React from 'react'
import { Header } from 'semantic-ui-react'
import { unitIcons } from '../../../Common/Icons/Buildings/unitIcons'
import { buildingIcons } from '../../../Common/Icons/Buildings/buildingIcons'
import Image from 'next/image'
import FormattedNumber from '../../../Common/Numbers/FormattedNumber'

import unitsMeta from '../../../../data/units-meta.json'
import { raceColors } from '../../../../util/colors'

interface Props {
  id: string
  name: string
  count: number
  type: 'unit' | 'building'
}

export const UnitCount = (props: Props) => {
  // TODO: hover for resources and names
  let imgSrc = undefined
  switch (props.type) {
    case 'building':
      imgSrc = buildingIcons[props.id]
      break
    case 'unit':
      imgSrc = unitIcons[props.id]
      break
  }
  if (imgSrc === undefined) {
    return null
  }

  const meta = unitsMeta[props.id]
  let borderColor = '#97b0f8'
  let backgroundColor = '#d5ddf6'
  if (meta !== undefined) {
    switch (meta.Race) {
      case 'Protoss':
        borderColor = raceColors.protossBorder
        backgroundColor = raceColors.protossLight
        break
      case 'Terran':
        borderColor = raceColors.terranBorder
        backgroundColor = raceColors.terranLight
        break
      case 'Zerg':
        borderColor = raceColors.zergBorder
        backgroundColor = raceColors.zergLight
        break
    }
  }

  return (
      <div className={'d-flex flex-column align-items-center'} style={{ margin: 10, padding: 5, borderRadius: 5, border: `2px solid ${borderColor}`, backgroundColor }}>
        {/*<Header size={'medium'} textAlign={'center'} inverted={true} color={'grey'}>{props.name}</Header>*/}
        <div style={{ borderRadius: 5, padding: 5, backgroundColor: 'black' }}>
          <Image src={`/assets/images/icons/unitsAndBuildings/${imgSrc}`} width={64} height={64} alt={props.name}/>
        </div>
        <Header size={'medium'} textAlign={'center'} style={{ marginTop: 10, marginBottom: 5 }}><FormattedNumber value={props.count}/></Header>
      </div>
  )
}
