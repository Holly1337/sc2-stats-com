import React from 'react'
import FormattedNumber from './FormattedNumber'
import styles from './numbers.module.scss'

const Number: React.FC<NumberComponent> = ({ value }) => {
  return (
    <span className={styles.colorNumbers}>
      <FormattedNumber value={value} />
    </span>
  )
}

export default Number
