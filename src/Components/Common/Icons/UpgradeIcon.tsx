import React from 'react'
import img from '../../../assets/images/upgrades/Protoss/Air_armor_1.gif'
import styles from './upgrade-icon.module.scss'
import classNames from 'classnames'
import { GamesPerRace } from '../../../util/countGamesPerRace'
import { Header } from 'semantic-ui-react'
import unitsMeta from '../../../data/units-meta.json'
import { raceColors } from '../../../util/colors'

interface Props {
  id: string
  value: number
  image: string
  showPercentage?: boolean
  gamesPerRace: GamesPerRace
}

const UpgradeIcon: React.FC<Props> = ({ id, value, image, showPercentage, gamesPerRace }) => {
  const meta = unitsMeta[id]
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
    <div className={styles.wrapper} style={{ borderColor, backgroundColor }}>
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
