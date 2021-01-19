import React from 'react'
import { Card, Container, Header } from 'semantic-ui-react'
import Link from 'next/link'
import tournaments from '../data/tournaments/tournaments.json'
import { TournamentCard } from '../src/Components/Common/TournamentCard/TournamentCard'
import Head from 'next/head'
import { TITLE } from '../src/constants/meta'
import { MetaDescription } from '../src/Components/Common/Meta/MetaDescription'

export default function Home () {
  return (
    <>
      <Head>
        <title>{`Tournament Overview - ${TITLE}`}</title>
        <MetaDescription>In-depth Starcraft 2 Tournament Stats And Numbers</MetaDescription>
      </Head>
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
