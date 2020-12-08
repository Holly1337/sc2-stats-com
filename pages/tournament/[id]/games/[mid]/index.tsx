import { TournamentPageWrapper } from '../../../../../src/Components/Layout/TournamentPageWrapper'
import { Breadcrumb } from 'semantic-ui-react'
import Link from 'next/link'

type Result = 'Win' | 'Loss' | 'Draw'

type HeatmapDataPoint = {
  x: number,
  y: number,
  gameloop: number,
  killerPlayerId: 1 | 2,
  value: number
}

interface Props {
  tournamentMeta: {
    id: string
    name: string
  }
  matchMeta: {
    mapName: string
    races: [Race, Race]
    results: [Result, Result],
    duration: number
  },
  heatmap: Array<HeatmapDataPoint>
}

const GameHome = (props: Props) => {
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
      <div>Content here</div>
    </TournamentPageWrapper>
  )
}

GameHome.getInitialProps = async (ctx) => {
  const { query: { id, mid } } = ctx
  const res = await fetch(`http://localhost:3000/api/tournament/${id}/matches/${mid}`)
  const json = await res.json()
  return {
    ...json
  }
}

export default GameHome
