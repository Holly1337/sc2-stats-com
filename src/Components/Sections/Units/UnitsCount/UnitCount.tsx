import React from 'react'
import { Header } from 'semantic-ui-react'
import { unitIcons } from '../../../Common/Icons/Buildings/unitIcons'
import { buildingIcons } from '../../../Common/Icons/Buildings/buildingIcons'
import Image from 'next/image'
import FormattedNumber from '../../../Common/Numbers/FormattedNumber'

import unitsMeta from '../../../../data/units-meta.json'

interface Props {
  id: string
  name: string
  count: number
  type: 'unit' | 'building'
}

export const UnitCount = (props: Props) => {
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
  let borderColor = 'darkgray'
  // TODO: hover for resources
  const meta = unitsMeta[props.id]
  if (meta !== undefined) {
    switch (meta.Race) {
      case 'Protoss':
        borderColor = 'darkorange'
        break
      case 'Terran':
        borderColor = 'darkred'//'#07469e'
        break
      case 'Zerg':
        borderColor = 'purple'
        break
    }
  }

  return (
      <div className={'d-flex flex-column align-items-center'} style={{ width: 136, margin: 20, padding: 10, borderRadius: 10, border: `3px solid ${borderColor}`, backgroundColor: '#f3f3f3' }}>
        {/*<Header size={'medium'} textAlign={'center'} inverted={true} color={'grey'}>{props.name}</Header>*/}
        <div style={{ borderRadius: 10, padding: 10, backgroundColor: 'black' }}>
          <Image src={`/assets/images/icons/unitsAndBuildings/${imgSrc}`} width={76} height={76} alt={props.name}/>
        </div>
        <Header size={'medium'} textAlign={'center'} style={{ marginTop: 10 }}><FormattedNumber value={props.count}/></Header>
      </div>
  )
}
