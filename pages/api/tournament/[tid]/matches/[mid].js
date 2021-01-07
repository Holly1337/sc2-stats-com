import tournaments from '../../../../../data/tournaments/tournaments.json'
import fs from 'fs'
import { flattenTournamentTree } from '../../../../../src/util/flattenTournamentTree'

const tournamentsPath = 'data/tournaments'

export default async (req, res) => {
  const { query: { tid, mid } } = req
  const existingTournamentIds = tournaments.map(t => t.id)

  if (!existingTournamentIds.includes(tid)) {
    res.statusCode = 404
    res.json({ status: 404 })
    return
  }

  const matchIdsFile = await fs.promises.readFile(`${tournamentsPath}/${tid}/matches/matchIds.json`)
  const existingMatchIds = JSON.parse(matchIdsFile)

  if (!existingMatchIds.includes(mid)) {
    res.statusCode = 404
    res.json({ status: 404 })
    return
  }

  try {
    const tournamentMetaFile = await fs.promises.readFile(`${tournamentsPath}/${tid}/meta.json`)
    const matchMetaFile = await fs.promises.readFile(`${tournamentsPath}/${tid}/matches/meta/${mid}.json`)
    const heatmapFile = await fs.promises.readFile(`${tournamentsPath}/${tid}/matches/heatmaps/${mid}.json`)
    const unitsBuiltFile = await fs.promises.readFile(`${tournamentsPath}/${tid}/matches/unitsBuilt/${mid}.json`)
    const upgradesFile = await fs.promises.readFile(`${tournamentsPath}/${tid}/matches/upgrades/${mid}.json`)
    const treeFile = await fs.promises.readFile(`${tournamentsPath}/${tid}/tree.json`)

    const tournamentMeta = JSON.parse(tournamentMetaFile)
    const matchMeta = JSON.parse(matchMetaFile)
    const heatmap = JSON.parse(heatmapFile)
    const unitsBuilt = JSON.parse(unitsBuiltFile)
    const upgrades = JSON.parse(upgradesFile)
    const tree = JSON.parse(treeFile)

    // get tournament tree, flatten it, find currente game, and extract previous/next games
    const allGames = flattenTournamentTree(tree)
    const gameIndex = allGames.findIndex(node => node.id === mid)
    let previousGameId = null
    let nextGameId = null
    if (gameIndex > 0) {
      previousGameId = allGames[gameIndex - 1].id
    }
    if (gameIndex < allGames.length - 1) {
      nextGameId = allGames[gameIndex + 1].id
    }

    res.statusCode = 200
    res.json({
      tournamentMeta,
      matchMeta,
      heatmap,
      unitsBuilt,
      upgrades,
      gameIndex,
      previousGameId,
      nextGameId,
      status: 200
    })
  } catch (e) {
    return res.json({
      status: 500
    })
  }
}
