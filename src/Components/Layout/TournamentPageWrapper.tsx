import React from 'react'
import { SidebarCustom } from '../Nav/SidebarCustom'
import { Container } from 'semantic-ui-react'

interface Props {
  tournamentId: string
}

export const TournamentPageWrapper: React.FC<Props> = (props) => {
  const { tournamentId, children } = props
  return (
    <SidebarCustom tournamentId={tournamentId}>
      <div style={{ marginLeft: 150 }}>
        <Container>
          {children}
        </Container>
      </div>
    </SidebarCustom>
  )
}