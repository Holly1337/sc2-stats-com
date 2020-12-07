import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import { SegmentCustom } from '../../Segments/SegmentCustom'
import Number from '../../Common/Numbers/Number'
import { GeneralStats } from '../../../types/stats'

interface Props {
  stats: GeneralStats
}

export const GeneralSection = (props: Props) => {
  const { stats } = props
  return (
    <>
      <SegmentCustom heading={'General Stats'}>
        <Grid
          columns={3}
          divided={true}
          textAlign={'center'}
          stackable={true}
        >
          <Grid.Row>
            <Grid.Column>
              <Header style={{ fontSize: 32, marginBottom: 12, marginTop: 24 }}><Number value={stats.gamesPlayed} /></Header>
              <Header style={{ fontSize: 28, marginTop: 0, marginBottom: 24 }}>Games Played</Header>
            </Grid.Column>
            <Grid.Column>
              <Header style={{ fontSize: 32, marginBottom: 12, marginTop: 24 }}><Number value={Math.round(stats.secondsPlayed / 3600)} /></Header>
              <Header style={{ fontSize: 28, marginTop: 0, marginBottom: 24 }}>Hours Played</Header>
            </Grid.Column>
            <Grid.Column>
              <Header style={{ fontSize: 32, marginBottom: 12, marginTop: 24 }}><Number value={stats.actions} /></Header>
              <Header style={{ fontSize: 28, marginTop: 0, marginBottom: 24 }}>Actions Executed</Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </SegmentCustom>
    </>
  )
}
