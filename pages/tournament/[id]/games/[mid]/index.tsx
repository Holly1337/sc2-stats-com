import { TournamentPageWrapper } from '../../../../../src/Components/Layout/TournamentPageWrapper'
import { Breadcrumb } from 'semantic-ui-react'
import Link from 'next/link'
import { HeatmapSection } from '../../../../../src/Components/Sections/Heatmap/HeatmapSection'
import { UnitsBuilt } from '../../../../../src/types/stats'
import { UnitsTwoPlayers } from '../../../../../src/Components/Sections/Units/UnitsCount/UnitsTwoPlayers'
import { UpgradeTimesTwoPlayers } from '../../../../../src/Components/Sections/Upgrades/CompletionTimes/UpgradeTimesTwoPlayers'
import { BuildingsTwoPlayers } from '../../../../../src/Components/Sections/Units/UnitsCount/BuildingsTwoPlayers'

type Result = 'Win' | 'Loss' | 'Draw'

interface Props {
  tournamentMeta: {
    id: string
    name: string
  }
  matchMeta: {
    mapName: string
    mapId: string
    races: [Race, Race]
    results: [Result, Result]
    duration: number
  }
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
        <Breadcrumb.Section href={`/tournament/${id}/matches`}>
          <Link href={`/tournament/${id}/matches`}>Matches</Link>
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section active>
          Showtime vs Maru
        </Breadcrumb.Section>
      </Breadcrumb>
      <HeatmapSection dataPoints={props.heatmap} mapId={matchMeta.mapId} mapName={matchMeta.mapName} />
      <UnitsTwoPlayers units={[unitsBuilt.player1, unitsBuilt.player2]} names={['Player 1 Name', 'Player 2 Name']} />
      <BuildingsTwoPlayers units={[unitsBuilt.player1, unitsBuilt.player2]} names={['Player 1 Name', 'Player 2 Name']} />
      <UpgradeTimesTwoPlayers names={['Player 1 Name', 'Player 2 Name']} upgrades={[upgrades.player1, upgrades.player2]} />
    </TournamentPageWrapper>
  )
}

GameHome.getInitialProps = async (ctx) => {
  const { query: { id, mid } } = ctx
  const res = await fetch(`http://localhost:3000/api/tournament/${id}/matches/${mid}`)
  const json = await res.json()
  console.log(json.unitsBuilt)
  return {
    ...json
  }
}

export default GameHome
