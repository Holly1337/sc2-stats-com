import { TournamentPageWrapper } from '../../../../src/Components/Layout/TournamentPageWrapper'
import { Breadcrumb } from 'semantic-ui-react'
import MapsPlayedSectionHorizontal from '../../../../src/Components/Sections/Maps/MapsPlayed'
import { MapsMatchupSection } from '../../../../src/Components/Sections/Maps/MapsDetail/MapsMatchupSection/MapsMatchupSection'
import Link from 'next/link'
import { MatchupLengthSection } from '../../../../src/Components/Sections/Maps/MapsDetail/MatchupLength/MatchupLengthSection'
import { GetStaticPaths, GetStaticProps } from 'next'
import { loadTournamentData, loadTournaments } from '../../../../src/util/loadFile'
import { FullMatchupStats, MapsPlayedStats } from '../../../../src/types/stats'
import { getTournamentPaths } from '../../../../src/util/paths'

interface Props {
  id: string
  name: string
  tournament: TournamentData
  mapsPlayed: MapsPlayedStats
  fullMatchupStats: FullMatchupStats
}

const MapsHome = (props: Props) => {
  const { id, name, tournament, mapsPlayed, fullMatchupStats } = props
  const pageName = 'Maps'
  return (
    <TournamentPageWrapper
      tournament={tournament}
      pageName={pageName}
    >
      <Breadcrumb>
        <Breadcrumb.Section href={'/'}>
          <Link href={'/'}>Home</Link>
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section>
          <Link href={`/tournament/${id}`}>{name}</Link>
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section active>
          {pageName}
        </Breadcrumb.Section>
      </Breadcrumb>
      <MapsPlayedSectionHorizontal stats={mapsPlayed} />
      <MapsMatchupSection
        allMapsStats={fullMatchupStats.perMap}
      />
      <MatchupLengthSection
        allMapsStats={fullMatchupStats.perMap}
      />
    </TournamentPageWrapper>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getTournamentPaths()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  let id = context.params.id as string

  const tournaments = await loadTournaments()
  const tournament = tournaments.find(tournament => tournament.id = id)
  const meta = await loadTournamentData(id, 'meta')
  const mapsPlayedStats = await loadTournamentData(id, 'mapsPlayed')
  const fullMatchupStats = await loadTournamentData(id, 'fullMatchupStats')

  return {
    props: {
      ...meta,
      tournament,
      mapsPlayed: mapsPlayedStats,
      fullMatchupStats
    }
  }
}

export default MapsHome

