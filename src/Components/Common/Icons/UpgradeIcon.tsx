import React from 'react'
import img from '../../../assets/images/upgrades/Protoss/Air_armor_1.gif'
import styles from './upgrade-icon.module.scss'
import classNames from 'classnames'
import { GamesPerRace } from '../../../util/countGamesPerRace'
import unitMetaData from '../../../data/units-meta.json'

interface Props {
  id: string
  value: number
  image: string
  showPercentage?: boolean
  gamesPerRace: GamesPerRace
}

const UpgradeIcon: React.FC<Props> = ({ id, value, image, showPercentage, gamesPerRace }) => {
  const race = unitMetaData[id] ? unitMetaData[id].Race.substr(0, 4) : 'Unknown'
  const games = gamesPerRace[race]
  return (
    <div className={classNames('m-2', styles.wrapper)}>
      <div className={styles.imageWrapper}>
        <img src={image} style={{ width: 48, height: 48 }} alt={id} />
      </div>
      <div className="text-center">
        {showPercentage
          ? `${value}%`
          : `x ${value}`}
      </div>

    </div>
  )
}

export default UpgradeIcon
