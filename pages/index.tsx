import React from 'react'
import { Card, Container } from 'semantic-ui-react'
import Link from 'next/link'
import { TournamentCard } from '../src/Components/Common/TournamentCard/TournamentCard'

export default function Home () {
  return (
    <Container>
      <div style={{ marginTop: 20 }}>
        <Card.Group itemsPerRow={3}>
          <Link href={'/tournament/hscxiii'} passHref={true}>
            <TournamentCard
              name={'DreamHack Masters Winter'}
              from={new Date('2020-10-14')}
              to={new Date('2020-11-15')}
              description={' The DreamHack SC2 Masters Winter is the third and last online event of the ESL Pro Tour 2020/21 Circuit. It is organized by DreamHack in cooperation with ESL.'}
              games={1089}
              pricepool={57000}
              tier={'premier'}
            />
          </Link>
        </Card.Group>
      </div>
    </Container>
  )
}
