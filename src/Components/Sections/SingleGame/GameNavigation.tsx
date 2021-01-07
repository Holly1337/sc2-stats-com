import Link from 'next/link'
import React from 'react'
import { Button } from 'semantic-ui-react'

interface Props {
  tournamentId: string
  previousGameId: null |string
  nextGameId: null | string
}

export const GameNavigation = (props: Props) => {
  const { tournamentId, nextGameId, previousGameId } = props
  return (
    <div className='d-flex justify-content-between my-4'>
      {previousGameId !== null
      ? (
          <Link href={`/tournament/${tournamentId}/games/${previousGameId}`} passHref={true}>
            <a>
              <Button content='Previous' icon='left arrow' labelPosition='left' />
            </a>
          </Link>
        )
      : <div />}

      {nextGameId !== null
      ? (
          <Link href={`/tournament/${tournamentId}/games/${nextGameId}`} passHref={true}>
            <a>
              <Button content='Next' icon='right arrow' labelPosition='right' />
            </a>
          </Link>
        )
      : <div />}

    </div>
  )
}