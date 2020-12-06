import React from 'react'
import { Header, Segment } from 'semantic-ui-react'
import styles from './segment.module.scss'

interface Props {
  heading?: React.ReactChild
}

export const SegmentCustom: React.FC<Props> = ({ heading, children }) => {
  const hasHeading = heading !== undefined
  return (
    <div className={styles.wrapper}>
      {hasHeading && (
        <Header size={'huge'}>
          {heading}
        </Header>
      )}
      <Segment className={styles.segment}>
        {children}
      </Segment>
    </div>
  )
}
