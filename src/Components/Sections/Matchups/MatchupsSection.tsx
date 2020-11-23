import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import { SegmentCustom } from '../../Segments/SegmentCustom'
import MatchupItem from './MatchupItem'

export const MatchupsSection = (props) => {
    // TODO: add possibility for user to get a list of all games of a specific matchup and link to their pages.
    return (
      <>
        <Header size={'huge'}>
          Matchups
        </Header>
        <SegmentCustom>
          <Grid columns={3} divided={"vertically"} stackable={true} celled='internally'>
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
        </SegmentCustom>
      </>

    )
}
