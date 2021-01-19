import { loadTournaments } from './loadFile'

export const getTournamentPaths = async () => {
  const tournaments = await loadTournaments()
  return tournaments.map(tournament => ({
    params: { id: tournament.id }
  }))
}
