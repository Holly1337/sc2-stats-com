import tournaments from '../../../../../data/tournaments/tournaments.json'
import fs from 'fs'

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

  const tournamentMetaFile = await fs.promises.readFile(`${tournamentsPath}/${tid}/meta.json`)
  const matchMetaFile = await fs.promises.readFile(`${tournamentsPath}/${tid}/matches/meta/${mid}.json`)
  const heatmapFile = await fs.promises.readFile(`${tournamentsPath}/${tid}/matches/heatmaps/${mid}.json`)

  const tournamentMeta = JSON.parse(tournamentMetaFile)
  const matchMeta = JSON.parse(matchMetaFile)
  const heatmap = JSON.parse(heatmapFile)

  res.statusCode = 200
  res.json({
    tournamentMeta,
    matchMeta,
    heatmap,
    status: 200
  })
}
