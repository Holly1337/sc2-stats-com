import React from 'react'
import { Grid } from 'semantic-ui-react'
import { SegmentCustom } from '../../Segments/SegmentCustom'
import MatchupItem from './MatchupItem'

export const MatchupsSection = (props) => {
    // TODO: add possibility for user to get a list of all games of a specific matchup and link to their pages.
    return (
      <>
        <SegmentCustom heading={'Matchups'}>
          <Grid columns={3} divided={"vertically"} stackable={true} celled='internally'>
            <Grid.Row>
              <Grid.Column>
                <MatchupItem race1={"Prot"} race2={"Zerg"} race1Wins={99} race2Wins={100} />
              </Grid.Column>
              <Grid.Column>
                <MatchupItem race1={"Terr"} race2={"Zerg"} race1Wins={86} race2Wins={98} />
              </Grid.Column>
              <Grid.Column>
                <MatchupItem race1={"Prot"} race2={"Terr"} race1Wins={87} race2Wins={79} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <MatchupItem race1={"Prot"} race2={"Prot"} race1Wins={126} race2Wins={0} />
              </Grid.Column>
              <Grid.Column>
                <MatchupItem race1={"Zerg"} race2={"Zerg"} race1Wins={75} race2Wins={0} />
              </Grid.Column>
              <Grid.Column>
                <MatchupItem race1={"Terr"} race2={"Terr"} race1Wins={49} race2Wins={0} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </SegmentCustom>
      </>

    )
}
