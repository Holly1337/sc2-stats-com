import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import { SegmentCustom } from '../../Segments/SegmentCustom'
import MatchupItem from './MatchupItem'

export const MatchupsSection = (props) => {
    return (
      <>
        <Header size={'huge'}>
          Matchups
        </Header>
        <SegmentCustom>
          <Grid columns={3} divided={"vertically"} stackable={true}>
            <Grid.Row>
              <Grid.Column>
                <MatchupItem race1={"Prot"} race2={"Terr"} race1Wins={1} race2Wins={2} />
              </Grid.Column>
              <Grid.Column>
                <MatchupItem race1={"Prot"} race2={"Zerg"} race1Wins={1} race2Wins={2} />
              </Grid.Column>
              <Grid.Column>
                <MatchupItem race1={"Zerg"} race2={"Terr"} race1Wins={1} race2Wins={2} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <MatchupItem race1={"Zerg"} race2={"Zerg"} race1Wins={1} race2Wins={2} />
              </Grid.Column>
              <Grid.Column>
                <MatchupItem race1={"Terr"} race2={"Terr"} race1Wins={1} race2Wins={2} />
              </Grid.Column>
              <Grid.Column>
                <MatchupItem race1={"Prot"} race2={"Prot"} race1Wins={1} race2Wins={2} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          {/*
            <Grid columns={3} divided={true} textAlign={'center'}>
            <Grid.Row>
              <Grid.Column>
                <div><Header size={"huge"}>Test</Header></div>
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
          */}
        </SegmentCustom>
      </>

    )
}
