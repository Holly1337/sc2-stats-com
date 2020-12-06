import React from 'react'
import FormattedNumber from './FormattedNumber'
import styles from './numbers.module.scss'

const MineralNumber: React.FC<NumberComponent> = ({ value }) => {
  return (
    <span className={styles.colorMinerals}>
      <FormattedNumber value={value} />
    </span>
  )
}

export default MineralNumber
