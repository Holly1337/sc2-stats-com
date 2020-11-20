import React from 'react'
import { Grid, Header, Statistic } from 'semantic-ui-react'
import { SegmentCustom } from '../SegmentCustom'

export const GeneralSection = (props) => {
    return (
      <>
        <Header as={'h1'}>
          General Stats
        </Header>
        <SegmentCustom>
          <Grid columns={3} divided={true} textAlign={'center'}>
            <Grid.Row>
              <Grid.Column>
                <Statistic>
                  <Statistic.Value>799</Statistic.Value>
                  <Statistic.Label>Games Played</Statistic.Label>
                </Statistic>
              </Grid.Column>
              <Grid.Column>
                <Statistic>
                  <Statistic.Value>243</Statistic.Value>
                  <Statistic.Label>Hours Played</Statistic.Label>
                </Statistic>
              </Grid.Column>
              <Grid.Column>
                <Statistic>
                  <Statistic.Value>~10.641.512</Statistic.Value>
                  <Statistic.Label>Actions Executed</Statistic.Label>
                </Statistic>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </SegmentCustom>
      </>
    )
}
