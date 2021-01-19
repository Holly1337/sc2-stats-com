import React from 'react'
import { Card, Container, Header } from 'semantic-ui-react'
import Link from 'next/link'
import tournaments from '../data/tournaments/tournaments.json'
import { TournamentCard } from '../src/Components/Common/TournamentCard/TournamentCard'
import { NextSeo } from 'next-seo'

export default function Home () {
  return (
    <>
      <NextSeo
        title={'Tournament Overview'}
        description={'In-depth Starcraft 2 Tournament Stats And Numbers'}
        openGraph={{
          title: 'Tournament Overview'
        }}
      />
      <Container style={{ minHeight: 'calc(100vh - 171px) ' }}>
        <div style={{ marginTop: 60, marginBottom: 60 }}>
          <Header size={'huge'}>All Tournaments</Header>
          <Card.Group itemsPerRow={3} stackable={true}>
            {tournaments.map(tournament => (
              <Link href={`/tournament/${tournament.id}`} passHref={true}>
                <
                  // @ts-ignore
                  TournamentCard
                  {...tournament}
                />
              </Link>
            ))}
          </Card.Group>
        </div>
      </Container>
    </>
  )
}
