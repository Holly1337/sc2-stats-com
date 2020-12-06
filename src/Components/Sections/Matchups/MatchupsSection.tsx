import React from 'react'
import { Grid } from 'semantic-ui-react'
import { SegmentCustom } from '../../Segments/SegmentCustom'
import MatchupItem from './MatchupItem'
import { MatchupStats } from '../../../../pages/types/stats'

interface Props {
  stats: MatchupStats
}

export const MatchupsSection = (props: Props) => {
  const { stats } = props
  // TODO: add possibility for user to get a list of all games of a specific matchup and link to their pages.
  return (
    <>
      <SegmentCustom heading={'Matchups'}>
        <Grid columns={3} divided={'vertically'} stackable={true} celled='internally'>
          <Grid.Row>
            {stats[0] && (
              <Grid.Column>
                <MatchupItem {...stats[0]} />
              </Grid.Column>
            )}
            {stats[1] && (
              <Grid.Column>
                <MatchupItem {...stats[1]} />
              </Grid.Column>
            )}
            {stats[2] && (
              <Grid.Column>
                <MatchupItem {...stats[2]} />
              </Grid.Column>
            )}
          </Grid.Row>
          <Grid.Row>
            {stats[3] && (
              <Grid.Column>
                <MatchupItem {...stats[3]} />
              </Grid.Column>
            )}
            {stats[4] && (
              <Grid.Column>
                <MatchupItem {...stats[4]} />
              </Grid.Column>
            )}
            {stats[5] && (
              <Grid.Column>
                <MatchupItem {...stats[5]} />
              </Grid.Column>
            )}
          </Grid.Row>
        </Grid>
      </SegmentCustom>
    </>

  )
}
