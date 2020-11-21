import React from 'react'
import FormattedNumber from './FormattedNumber'
import styles from './numbers.module.scss'

interface Props extends NumberComponent {
  showBrackets?: boolean
}

const PreviousNumber: React.FC<Props> = ({ value, showBrackets }) => {
  return (
    <span className={styles.colorPrevious}>
      {showBrackets ? '(' : ''}
      <FormattedNumber value={value} />
      {showBrackets ? ')' : ''}
    </span>
  )
}

export default PreviousNumber
