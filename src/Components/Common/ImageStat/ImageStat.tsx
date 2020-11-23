import React from 'react'
import FormattedNumber from '../Numbers/FormattedNumber'
import PreviousNumber from '../Numbers/PreviousNumber'
import MineralNumber from '../Numbers/MineralNumber'
import GasNumber from '../Numbers/GasNumber'
import Number from '../Numbers/Number'
import Image from 'next/image'

interface Props {
  id: string
  image: string
  count: number
  averagePerGame?: {
    current: number
    previous?: number
  }
  cost?: {
    minerals: number
    gas: number
  }
  height?: number
  width?: number
}

const ImageStat: React.FC<Props> = (props) => {
  const { id, image, count, averagePerGame, cost, height, width } = props

  return (
    <>
      <h2><Number value={count} /></h2>
      {
        (averagePerGame !== undefined) && (
          <h4>
            <FormattedNumber value={averagePerGame.current} />{' '}
            {averagePerGame.previous !== undefined && <PreviousNumber value={averagePerGame.previous} showBrackets />}{' '}
            per game
          </h4>
        )
      }
      <img src={image} alt='' height={height ?? 165 } className='mt-4 image-dropshadow' />
      {
        (cost !== undefined) && (
          <div>
            {cost.minerals > 0 && <><MineralNumber value={cost.minerals} /> Minerals</>}
            {cost.gas > 0 && <><br /><GasNumber value={cost.gas} /> Gas</>}
          </div>
        )
      }
    </>
  )
}

export default ImageStat
