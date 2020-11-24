import React from 'react'
import { SidebarCustom } from '../Nav/SidebarCustom'
import { Container } from 'semantic-ui-react'

export const TournamentPageWrapper: React.FC = ({ children }) => {
  return (
    <SidebarCustom>
      <div style={{ marginLeft: 150 }}>
        <Container>
          {children}
        </Container>
      </div>
    </SidebarCustom>
  )
}