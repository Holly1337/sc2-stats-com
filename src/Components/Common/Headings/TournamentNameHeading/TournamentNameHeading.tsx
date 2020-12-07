import React from 'react'
import { Header } from 'semantic-ui-react'
import styles from './styles.module.scss'

export const TournamentNameHeading: React.FC = (props) => {
  return (
    <Header className={styles.heading}>
      {props.children}
    </Header>
  )
}