import React from 'react'
import { Grid, Header, Statistic } from 'semantic-ui-react'
import { SegmentCustom } from '../../SegmentCustom'

export const MatchupsSection = (props) => {
    return (
      <>
        <Header size={'huge'}>
          Matchups
        </Header>
        <SegmentCustom>
          <Grid columns={3} celled={true} textAlign={'center'}>
            <Grid.Row>
              <Grid.Column>
                <Statistic>
                  <Statistic.Value>799</Statistic.Value>
                  <Statistic.Label>PvZ</Statistic.Label>
                </Statistic>
              </Grid.Column>
              <Grid.Column>
                <Statistic>
                  <Statistic.Value>243</Statistic.Value>
                  <Statistic.Label>PvT</Statistic.Label>
                </Statistic>
              </Grid.Column>
              <Grid.Column>
                <Statistic>
                  <Statistic.Value>436</Statistic.Value>
                  <Statistic.Label>PvP</Statistic.Label>
                </Statistic>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Statistic>
                  <Statistic.Value>651</Statistic.Value>
                  <Statistic.Label>PvZ</Statistic.Label>
                </Statistic>
              </Grid.Column>
              <Grid.Column>
                <Statistic>
                  <Statistic.Value>314</Statistic.Value>
                  <Statistic.Label>PvT</Statistic.Label>
                </Statistic>
              </Grid.Column>
              <Grid.Column>
                <Statistic>
                  <Statistic.Value>673</Statistic.Value>
                  <Statistic.Label>PvP</Statistic.Label>
                </Statistic>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </SegmentCustom>
      </>

    )
}
