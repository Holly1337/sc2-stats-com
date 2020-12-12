import React from 'react'
import { Grid } from 'semantic-ui-react'
import { SegmentCustom } from '../../Segments/SegmentCustom'
import MatchupItem from './MatchupItem'
import { MatchupStats } from '../../../types/stats'

interface Props {
  stats: MatchupStats
}

export const MatchupsSection = (props: Props) => {
  const { stats } = props
  // TODO: add possibility for user to get a list of all games of a specific matchup and link to their pages.
  const sortedStats = [...stats].sort((a, b) => {
    return (b.race1Wins + b.race2Wins) - (a.race1Wins + a.race2Wins)
  })
  return (
    <>
      <SegmentCustom heading={'Matchups'}>
        <Grid columns={3} divided={'vertically'} stackable={true} celled='internally'>
          <Grid.Row>
            {sortedStats[0] && (
              <Grid.Column>
                <MatchupItem {...sortedStats[0]} />
              </Grid.Column>
            )}
            {sortedStats[1] && (
              <Grid.Column>
                <MatchupItem {...sortedStats[1]} />
              </Grid.Column>
            )}
            {sortedStats[2] && (
              <Grid.Column>
                <MatchupItem {...sortedStats[2]} />
              </Grid.Column>
            )}
          </Grid.Row>
          {sortedStats.length > 3 && (
            <Grid.Row>
              {sortedStats[3] && (
                <Grid.Column>
                  <MatchupItem {...sortedStats[3]} />
                </Grid.Column>
              )}
              {sortedStats[4] && (
                <Grid.Column>
                  <MatchupItem {...sortedStats[4]} />
                </Grid.Column>
              )}
              {sortedStats[5] && (
                <Grid.Column>
                  <MatchupItem {...sortedStats[5]} />
                </Grid.Column>
              )}
            </Grid.Row>
          )}
        </Grid>
      </SegmentCustom>
    </>

  )
}
