import { TournamentPageWrapper } from '../../../../../src/Components/Layout/TournamentPageWrapper'
import { Breadcrumb, Placeholder } from 'semantic-ui-react'
import Link from 'next/link'
import { HeatmapSection } from '../../../../../src/Components/Sections/Heatmap/HeatmapSection'
import { UnitsBuilt } from '../../../../../src/types/stats'
import { UnitsTwoPlayers } from '../../../../../src/Components/Sections/Units/UnitsCount/UnitsTwoPlayers'
import { UpgradeTimesTwoPlayers } from '../../../../../src/Components/Sections/Upgrades/CompletionTimes/UpgradeTimesTwoPlayers'
import { BuildingsTwoPlayers } from '../../../../../src/Components/Sections/Units/UnitsCount/BuildingsTwoPlayers'
import { SingleGameHeaderSection } from '../../../../../src/Components/Sections/SingleGame/SingleGameHeaderSection'
import { splitName } from '../../../../../src/util/playerNames'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Error from 'next/error'
import { SegmentCustom } from '../../../../../src/Components/Segments/SegmentCustom'
import { GameNavigation } from '../../../../../src/Components/Sections/SingleGame/GameNavigation'

interface PageData {
  tournamentMeta: TournamentMeta
  matchMeta: MatchMeta
  heatmap: Array<HeatmapDataPoint>
  unitsBuilt: { player1: UnitsBuilt, player2: UnitsBuilt }
  upgrades: { player1: {[upgradeId: string]: number}, player2: {[upgradeId: string]: number}}
  previousGameId: null | string
  nextGameId: null | string
}

const GameHome = () => {
  const router = useRouter()
  const id = router.query.id as string
  const mid = router.query.mid as string

  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [data, setData] = useState<null | PageData>(null)

  const loadData = async () => {
    if (id === undefined || mid === undefined) {
      return
    }
    try {
      setIsLoading(true)
      const res = await fetch(`/api/tournament/${id}/matches/${mid}`)
      if (res.status === 404) {
        router.replace('/404')
        return
      }
      const json = await res.json()
      setData(json)
    } catch (e) {
      setHasError(true)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [id, mid])

  if (isLoading) {
    return (
      <TournamentPageWrapper tournamentId={id}>
        <SegmentCustom>
          <div>
            <Placeholder style={{ margin: '40px auto'}}>
              <Placeholder.Header>
                <Placeholder.Line />
              </Placeholder.Header>
            </Placeholder>
            <Placeholder style={{ margin: '0 auto'}}>
              <Placeholder.Image square />
            </Placeholder>
            <Placeholder style={{ margin: '40px 0px 40px 200px'}} fluid>
              <Placeholder.Header>
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
            </Placeholder>
          </div>
        </SegmentCustom>
      </TournamentPageWrapper>
    )
  }
  if (hasError) {
    return <Error statusCode={500} />
  }
  if (data === null) {
    return <Error statusCode={500} />
  }

  const { matchMeta, unitsBuilt, upgrades } = data
  const { name } = data.tournamentMeta
  return (
    <TournamentPageWrapper tournamentId={id}>
      <Breadcrumb>
        <Breadcrumb.Section href={'/'}>
          <Link href={'/'}>Home</Link>
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section href={`/tournament/${id}`}>
          <Link href={`/tournament/${id}`}>{name}</Link>
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section href={`/tournament/${id}/games`}>
          <Link href={`/tournament/${id}/games`}>All Games</Link>
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section active>
          {splitName(matchMeta.players[0]).name} vs {splitName(matchMeta.players[1]).name} - {matchMeta.mapName}
        </Breadcrumb.Section>
      </Breadcrumb>
      <GameNavigation tournamentId={id} previousGameId={data.previousGameId} nextGameId={data.nextGameId} />
      <SingleGameHeaderSection matchMeta={matchMeta} />
      <HeatmapSection dataPoints={data.heatmap} mapId={matchMeta.mapId} mapName={matchMeta.mapName} />
      <UnitsTwoPlayers units={[unitsBuilt.player1, unitsBuilt.player2]} names={matchMeta.players} />
      <BuildingsTwoPlayers units={[unitsBuilt.player1, unitsBuilt.player2]} names={matchMeta.players} />
      <UpgradeTimesTwoPlayers upgrades={[upgrades.player1, upgrades.player2]} names={matchMeta.players} />
    </TournamentPageWrapper>
  )
}

export default GameHome
