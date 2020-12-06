interface MapMatchupStats {
  [matchup: string]: {
    games: number
    [raceWins: string]: number
  }
}