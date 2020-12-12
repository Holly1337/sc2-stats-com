import fs from 'fs'
import Fuse from 'fuse.js'
import tournaments from '../../data/tournaments/tournaments.json'

const tournamentsPath = 'data/tournaments'
const tournamentFolders = fs.readdirSync(tournamentsPath).filter(path => !path.endsWith('.json'))

export type SearchObject = {
  matchId: string
  tournamentId: string
  tournamentName: string
  map: string
  matchup: string
  matchupLong: string
  race1: string
  race2: string
  player1: string
  player2: string
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
    const tournamentMeta = tournaments.find(tournament => tournament.id === tournamentId)
    const tournamentName = tournamentMeta?.name ?? ''
    // @ts-ignore
    const meta = JSON.parse(data)
    return {
      tournamentId,
      tournamentName,
      matchId: fileName,
      map: meta.mapName,
      matchup: meta.racesShort.sort((a, b) => a.localeCompare(b)).map(r => r.substr(0, 1).toUpperCase()).join('v'),
      matchupLong: meta.racesShort.sort((a, b) => a.localeCompare(b)).map(r => races[r]).join('v'),
      race1: races[meta.racesShort[0]],
      race2: races[meta.racesShort[1]],
      player1: meta.players[0],
      player2: meta.players[1],
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
  } catch (e) {
    console.log('there was an error')
    console.log(e)
    return []
  }
}

const objectsPerTournament = tournamentFolders.map(getAllGameMetaForTournament)
console.log(objectsPerTournament.length)
const allSearchObjects = []
objectsPerTournament.forEach(objectArray => allSearchObjects.push(...objectArray))

let options = {
  includeScore: true,
  keys: ['map', 'matchup', 'race1', 'race2', 'player1', 'player2', 'tournamentName'],
  threshold: 0.5
}

const searchIndex = Fuse.createIndex(options.keys, allSearchObjects)

const fuse = new Fuse(allSearchObjects, options, searchIndex)

export const search = (searchString) => {
  return fuse.search(searchString).slice(0, 10)
}