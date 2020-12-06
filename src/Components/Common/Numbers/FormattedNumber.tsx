import React from 'react'

interface Props {
  value: number
}

const FormattedNumber: React.FC<Props> = ({ value }) => {
  return <span>{new Intl.NumberFormat('en-EN').format(value)}</span>
}

export default FormattedNumber
