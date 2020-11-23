import React from 'react'
import FormattedNumber from '../Numbers/FormattedNumber'
import PreviousNumber from '../Numbers/PreviousNumber'
import MineralNumber from '../Numbers/MineralNumber'
import GasNumber from '../Numbers/GasNumber'
import Number from '../Numbers/Number'
import { Header } from 'semantic-ui-react'

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
      <Header style={{ fontSize: 32 }}><Number value={count} /></Header>
      {
        (averagePerGame !== undefined) && (
          <Header size={'large'}>
            <FormattedNumber value={averagePerGame.current} />{' '}
            {averagePerGame.previous !== undefined && <PreviousNumber value={averagePerGame.previous} showBrackets />}{' '}
            per game
          </Header>
        )
      }
      <img src={image} alt='' height={height ?? 165 } className='mt-4 image-dropshadow' />
      {
        (cost !== undefined) && (
          <Header size={'large'}>
            {cost.minerals > 0 && <><MineralNumber value={cost.minerals} /> Minerals</>}
            {cost.gas > 0 && <><br /><GasNumber value={cost.gas} /> Gas</>}
          </Header>
        )
      }
    </>
  )
}

export default ImageStat
