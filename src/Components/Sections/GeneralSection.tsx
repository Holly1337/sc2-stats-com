import React from 'react'
import { Grid, Header, Statistic } from 'semantic-ui-react'
import { SegmentCustom } from '../Segments/SegmentCustom'

export const GeneralSection = (props) => {
    return (
      <>
        <Header as={'h1'}>
          General Stats
        </Header>
        <SegmentCustom>
          <Grid
            columns={3}
            divided={true}
            textAlign={'center'}
            stackable={true}
          >
            <Grid.Row>
              <Grid.Column>
                <Statistic color={'blue'}>
                  <Statistic.Value>799</Statistic.Value>
                  <Statistic.Label>
                      <Header size={"huge"}>Games Played</Header>
                  </Statistic.Label>
                </Statistic>
              </Grid.Column>
              <Grid.Column>
                <Statistic color={'blue'}>
                  <Statistic.Value>243</Statistic.Value>
                  <Statistic.Label>
                      <Header size={"huge"}>Hours Played</Header>
                  </Statistic.Label>
                </Statistic>
              </Grid.Column>
              <Grid.Column>
                <Statistic color={'blue'}>
                  <Statistic.Value>~10.641.512</Statistic.Value>
                  <Statistic.Label>
                      <Header size={"huge"}>Actions Executed</Header>
                  </Statistic.Label>
                </Statistic>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </SegmentCustom>
      </>
    )
}
