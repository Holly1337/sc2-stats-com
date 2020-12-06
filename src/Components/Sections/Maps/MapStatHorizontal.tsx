import React from 'react'
import { Header } from 'semantic-ui-react'
import styles from './mapstat.module.scss'

interface Props {
  name: string
  count: number
  image: string
  maxPlayCount: number
}

const MapStatHorizontal: React.FC<Props> = ({ name, count, image, maxPlayCount }) => {
  const percentPlayed = (count / maxPlayCount) * 100
  return (
    <span className={styles.wrapper}>
      <h3 className={styles.titles}>
        <div style={{ width: '100%' }}>
          <Header size={'large'} className={'mb-0'}>{name}</Header>
          <Header size={'medium'} className={'mt-0'} style={{fontWeight: 400}}>{count}</Header>
        </div>
      </h3>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url("${image}")`,
          width: `${percentPlayed}%`
        }}
      />
    </span>
  )
}

export default MapStatHorizontal
