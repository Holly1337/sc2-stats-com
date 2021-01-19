import React from 'react'
import { SidebarCustom } from '../Nav/SidebarCustom'
import { Container } from 'semantic-ui-react'
import Head from 'next/head'

interface Props {
  tournamentId: string
  tournamentName: string
  title?: string
}

export const TournamentPageWrapper: React.FC<Props> = (props) => {
  const { tournamentId, tournamentName, title, children } = props
  return (
    <>
      <Head>
        <title>{title || tournamentName}</title>
      </Head>
      <SidebarCustom tournamentId={tournamentId}>
        <div style={{ marginLeft: 150 }}>
          <Container>
            {children}
          </Container>
        </div>
      </SidebarCustom>
    </>
  )
}
