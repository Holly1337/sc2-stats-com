import fs from 'fs'

type TournamentPageType = 'meta' | 'general' | 'matchups' | 'resources' | 'mapsPlayed' | 'supply' | 'workers'

export const loadTournamentData = async (tournamentId: string, pageType: TournamentPageType): Promise<object> => {
  const file = await fs.promises.readFile(`./data/tournaments/${tournamentId}/${pageType}.json`, 'utf-8')
  return JSON.parse(file)
}