import React from 'react'
import img from '../../../assets/images/upgrades/Protoss/Air_armor_1.gif'

interface Props {
  id: string
  amount: number
  image: string
}

const UpgradeIcon: React.FC<Props> = ({ id, amount, image }) => {
  return (
    <div className='m-2'>
      <div className='d-flex justify-content-center'>
        <img src={image} style={{ width: 48, height: 48 }} alt={id} />
      </div>
      <div className='text-center'>x {amount}</div>
    </div>
  )
}

export default UpgradeIcon
