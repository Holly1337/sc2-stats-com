import React, { useState } from 'react'
import { Divider, Grid, Header } from 'semantic-ui-react'
import MatchupItem from '../../../Matchups/MatchupItem'

interface Props {
  mapName: string
  matchupStats: MapMatchupStats
  sortByMatchup?: boolean
}

interface MatchupGridColumnProps extends MatchupStat {
  matchup: string
}

const sortByGames = (a: MatchupGridColumnProps, b: MatchupGridColumnProps) => (a.race1Wins + a.race2Wins) - (b.race1Wins + b.race2Wins)
const sortByMatchup = (a: MatchupGridColumnProps, b: MatchupGridColumnProps) => b.matchup.localeCompare(a.matchup)

export const MatchupGrid = (props: Props) => {
  const { mapName, matchupStats } = props
  const matchups = Object.entries(matchupStats)

  const matchupItems = matchups.map(([matchup, data]) => {
    const [race1, race2] = matchup.split('v') as [Race, Race]
    const race1Wins = data[race1]
    const race2Wins = race1 !== race2 ? data[race2] : 0
    return { race1, race2, race1Wins, race2Wins, matchup }
  }).sort(props.sortByMatchup ? sortByMatchup : sortByGames)
    .map(({race1, race2, race1Wins, race2Wins, matchup}) => (
      <Grid.Column key={matchup}>
        <MatchupItem race1={race1} race2={race2} race1Wins={race1Wins} race2Wins={race2Wins} />
      </Grid.Column>
    ))

  let pairsOfTwo = []
  const totalItems = matchupItems.length
  for (let i = 0; i < totalItems; i = i + 2) {
    const pair = [matchupItems.pop(), matchupItems.pop()].filter(Boolean)
    pairsOfTwo.push(pair)
  }

  return (
    <>
      <Header size={'huge'} textAlign={'center'}>{mapName}</Header>
      <Divider />
      <Grid columns={2} stackable={true} celled={'internally'}>
        {pairsOfTwo.map((pair) => (
          <Grid.Row>
            {pair}
          </Grid.Row>
        ))}
      </Grid>
    </>
  )
}