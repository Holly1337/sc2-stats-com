import React from 'react'
import FormattedNumber from './FormattedNumber'
import styles from './numbers.module.scss'

const GasNumber: React.FC<NumberComponent> = ({ value }) => {
  return (
    <span className={styles.colorGas}>
      <FormattedNumber value={value} />
    </span>
  )
}

export default GasNumber
