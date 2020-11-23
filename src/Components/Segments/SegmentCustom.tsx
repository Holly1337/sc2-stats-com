import React from 'react'
import { Header, Segment } from 'semantic-ui-react'
import styles from './segment.module.scss'

interface Props {
  heading?: React.ReactChild
  subheading?: React.ReactChild
}

export const SegmentCustom: React.FC<Props> = ({ heading, subheading, children }) => {
  const hasHeading = heading !== undefined || subheading !== undefined
  return (
    <>
      <Segment className={styles.segment}>
        {hasHeading && (
          <div style={{ marginBottom: '2rem' }}>
            {heading && (
              <Header as={'h2'} style={{ marginBottom: 0 }}>
                {heading}
              </Header>
            )}
            {subheading && (
              <Header.Subheader as={'h3'} style={{ marginTop: 0 }}>
                {subheading}
              </Header.Subheader>
            )}
          </div>
        )}
        {children}
      </Segment>
    </>
  )
}
