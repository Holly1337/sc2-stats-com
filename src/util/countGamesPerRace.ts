import { MatchupStats } from '../../pages/types/stats'

export type GamesPerRace = {
  Prot: number
  Terr: number
  Zerg: number
  Rand: number
}

export const countGamesPerRace = (matchups: MatchupStats): GamesPerRace => {
  const totalGames: GamesPerRace = {
    Zerg: 0,
    Terr: 0,
    Prot: 0,
    Rand: 0
  }

  matchups.forEach((matchup) => {
    const games = matchup.race1Wins + matchup.race2Wins
    totalGames[matchup.race1] += games
    totalGames[matchup.race2] += games
  })

  return totalGames
}