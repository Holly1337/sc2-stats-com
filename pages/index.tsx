import React from 'react'
import { Card, Container } from 'semantic-ui-react'
import Link from 'next/link'
import { TournamentCard } from '../src/Components/Common/TournamentCard/TournamentCard'
import tournaments from '../data/tournaments/tournaments.json'

export default function Home () {
  return (
    <Container>
      <div style={{ marginTop: 20 }}>
        <Card.Group itemsPerRow={3}>
          {tournaments.map(tournament => (
            <Link href={`/tournament/${tournament.id}`} passHref={true}>
              <TournamentCard
                {...tournament}
              />
            </Link>
          ))}
        </Card.Group>
      </div>
    </Container>
  )
}
