import React from 'react'
import { SidebarCustom } from '../Nav/SidebarCustom'
import { Container } from 'semantic-ui-react'
import Head from 'next/head'
import { MetaDescription } from '../Common/Meta/MetaDescription'
import { TITLE } from '../../constants/meta'

interface Props {
  tournament: TournamentData
  pageName: string
}

export const TournamentPageWrapper: React.FC<Props> = (props) => {
  const { tournament, pageName, children } = props
  const { description, pricepool, currency } = tournament
  const metaDescription = `${pageName} - ${pricepool}${currency} ${tournament.name} - ${description}`
  return (
    <>
      <Head>
        <title>{`${pageName} - ${tournament.name} - ${TITLE}`}</title>
        {description && <MetaDescription>{metaDescription}</MetaDescription>}
      </Head>
      <SidebarCustom tournamentId={tournament.id}>
        <div style={{ marginLeft: 150 }}>
          <Container>
            {children}
          </Container>
        </div>
      </SidebarCustom>
    </>
  )
}
