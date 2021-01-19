import React from 'react'
import { SidebarCustom } from '../Nav/SidebarCustom'
import { Container } from 'semantic-ui-react'
import { NextSeo } from 'next-seo'

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
      <NextSeo
        title={`${pageName} - ${tournament.name}`}
        description={metaDescription}
        openGraph={{
          description: metaDescription,
          images: [{
            url: `${process.env.BASE_URL}${tournament.image}`,
            alt: tournament.name,
          }]
        }}
      />
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
