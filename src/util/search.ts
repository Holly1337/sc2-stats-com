import fs from 'fs'
import Fuse from 'fuse.js'

const tournamentsPath = 'data/tournaments'
const tournamentFolders = fs.readdirSync(tournamentsPath)

export type SearchObject = {
  matchId: string
  tournamentId: string
  map: string
  matchup: string
  matchupLong: string
  race1: string
  race2: string
}

const races = {
  Prot: 'Protoss',
  Terr: 'Terran',
  Zerg: 'Zerg'
}

const getMetaFromFile = (filePath: string, tournamentId: string): SearchObject | null => {
  try {
    const data = fs.readFileSync(filePath)
    const fileName = filePath.substr(filePath.lastIndexOf('/') + 1).replace('.json', '')
    // @ts-ignore
    const meta = JSON.parse(data)
    return {
      tournamentId,
      matchId: fileName,
      map: meta.mapName,
      matchup: meta.races.sort((a, b) => a.localeCompare(b)).map(r => r.substr(0, 1).toUpperCase()).join('v'),
      matchupLong: meta.races.sort((a, b) => a.localeCompare(b)).map(r => races[r]).join('v'),
      race1: races[meta.races[0]],
      race2: races[meta.races[1]],
    }
  } catch {
    return null
  }
}

const getAllGameMetaForTournament = (tournamentId): Array<SearchObject> => {
  const path = `${tournamentsPath}/${tournamentId}/matches/meta`
  try {
    const files = fs.readdirSync(path)
    return files
      .map(file => `${path}/${file}`)
      .map(file => getMetaFromFile(file, tournamentId))
      .filter(Boolean)
  } catch {

  }
}

const allSearchObjects = getAllGameMetaForTournament(tournamentFolders[4])

let options = {
  includeScore: true,
  keys: ['map', 'matchup', 'race1', 'race2'],
  threshold: 0.5
}

const searchIndex = Fuse.createIndex(options.keys, allSearchObjects)

const fuse = new Fuse(allSearchObjects, options, searchIndex)

export const search = (searchString) => {
  return fuse.search(searchString).slice(0, 10)
}