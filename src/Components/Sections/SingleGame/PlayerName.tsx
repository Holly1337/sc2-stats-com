import React from 'react'
import { splitName } from '../../../util/playerNames'

interface Props {
  children: string
}

export const PlayerName = (props: Props) => {
  const { children } = props
  const { name, tag } = splitName(children)

  return (
    <>
      {tag}{' '}<strong>{name}</strong>
    </>
  )
}