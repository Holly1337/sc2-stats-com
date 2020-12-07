import React from 'react'
import img from '../../../assets/images/upgrades/Protoss/Air_armor_1.gif'
import styles from './upgrade-icon.module.scss'
import classNames from 'classnames'
import { GamesPerRace } from '../../../util/countGamesPerRace'
import { Header } from 'semantic-ui-react'

interface Props {
  id: string
  value: number
  image: string
  showPercentage?: boolean
  gamesPerRace: GamesPerRace
}

const UpgradeIcon: React.FC<Props> = ({ id, value, image, showPercentage, gamesPerRace }) => {
  return (
    <div className={classNames('m-2', styles.wrapper)}>
      <div className={styles.imageWrapper}>
        <img src={image} style={{ width: 64, height: 64, borderRadius: 5 }} alt={id} />
      </div>
      <Header size={'medium'} textAlign={'center'} style={{ marginTop: 5, marginBottom: 5 }}>
        {showPercentage
          ? `${Math.ceil(value * 100)}%`
          : `x ${value}`}
      </Header>

    </div>
  )
}

export default UpgradeIcon
