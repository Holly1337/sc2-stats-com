import { TournamentPageWrapper } from '../../../../../src/Components/Layout/TournamentPageWrapper'
import { Breadcrumb } from 'semantic-ui-react'
import Link from 'next/link'
import { HeatmapSection } from '../../../../../src/Components/Sections/Heatmap/HeatmapSection'
import { UnitsBuilt } from '../../../../../src/types/stats'
import { UnitsTwoPlayers } from '../../../../../src/Components/Sections/Units/UnitsCount/UnitsTwoPlayers'
import { UpgradeTimesTwoPlayers } from '../../../../../src/Components/Sections/Upgrades/CompletionTimes/UpgradeTimesTwoPlayers'
import { BuildingsTwoPlayers } from '../../../../../src/Components/Sections/Units/UnitsCount/BuildingsTwoPlayers'
import { SingleGameHeaderSection } from '../../../../../src/Components/Sections/SingleGame/SingleGameHeaderSection'
import { splitName } from '../../../../../src/util/playerNames'
import { Router } from 'next/router'
import { NextPageContext } from 'next/types'

interface Props {
  tournamentMeta: TournamentMeta
  matchMeta: MatchMeta
  heatmap: Array<HeatmapDataPoint>
  unitsBuilt: { player1: UnitsBuilt, player2: UnitsBuilt }
  upgrades: { player1: {[upgradeId: string]: number}, player2: {[upgradeId: string]: number}}
}

const GameHome = (props: Props) => {
  const { matchMeta, unitsBuilt, upgrades } = props
  const { id, name } = props.tournamentMeta
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
          {splitName(matchMeta.players[0]).name} vs {splitName(matchMeta.players[1]).name}
        </Breadcrumb.Section>
      </Breadcrumb>
      <SingleGameHeaderSection matchMeta={matchMeta} />
      <HeatmapSection dataPoints={props.heatmap} mapId={matchMeta.mapId} mapName={matchMeta.mapName} />
      <UnitsTwoPlayers units={[unitsBuilt.player1, unitsBuilt.player2]} names={matchMeta.players} />
      <BuildingsTwoPlayers units={[unitsBuilt.player1, unitsBuilt.player2]} names={matchMeta.players} />
      <UpgradeTimesTwoPlayers upgrades={[upgrades.player1, upgrades.player2]} names={matchMeta.players} />
    </TournamentPageWrapper>
  )
}

GameHome.getInitialProps = async (ctx: NextPageContext) => {
  const { query: { id, mid } } = ctx
  const res = await fetch(`/api/tournament/${id}/matches/${mid}`)
  if (res.status !== 200) {
    if (ctx.res) {
      // On the server, we'll use an HTTP response to
      // redirect with the status code of our choice.
      // 307 is for temporary redirects.
      ctx.res.writeHead(307, { Location: '/404' })
      ctx.res.end()
    } else {
      // On the client, we'll use the Router-object
      // from the 'next/router' module.
      // @ts-ignore
      Router.replace('/404')
    }
  }
  const json = await res.json()
  return {
    ...json
  }
}

export default GameHome
