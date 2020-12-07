import { TournamentPageWrapper } from '../../../../src/Components/Layout/TournamentPageWrapper'
import { Breadcrumb } from 'semantic-ui-react'
import MapsPlayedSectionHorizontal from '../../../../src/Components/Sections/Maps/MapsPlayed'
import { MapsMatchupSection } from '../../../../src/Components/Sections/Maps/MapsDetail/MapsMatchupSection/MapsMatchupSection'
import Link from 'next/link'
import { MatchupLengthSection } from '../../../../src/Components/Sections/Maps/MapsDetail/MatchupLength/MatchupLengthSection'
import { GetStaticPaths, GetStaticProps } from 'next'
import { loadTournamentData } from '../../../../src/util/loadFile'
import { FullMatchupStats, MapsPlayedStats } from '../../../types/stats'

interface Props {
  id: string
  name: string
  mapsPlayed: MapsPlayedStats
  fullMatchupStats: FullMatchupStats
}

const MapsHome = (props: Props) => {
  return (
    <TournamentPageWrapper tournamentId={'dhmw2020'}>
      <Breadcrumb>
        <Breadcrumb.Section href={'/'}>
          <Link href={'/'}>Home</Link>
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section>
          <Link href={`/tournament/${props.id}`}>{props.name}</Link>
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section active>
          Maps
        </Breadcrumb.Section>
      </Breadcrumb>
      <MapsPlayedSectionHorizontal stats={props.mapsPlayed} />
      <MapsMatchupSection
        allMapsStats={props.fullMatchupStats.perMap}
      />
      <MatchupLengthSection
        allMapsStats={props.fullMatchupStats.perMap}
      />
    </TournamentPageWrapper>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'dhmw2020' } } // See the "paths" section below
    ],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const meta = await loadTournamentData(context.params.id as string, 'meta')
  const mapsPlayedStats = await loadTournamentData(context.params.id as string, 'mapsPlayed')
  const fullMatchupStats = await loadTournamentData(context.params.id as string, 'fullMatchupStats')

  return {
    props: {
      ...meta,
      mapsPlayed: mapsPlayedStats,
      fullMatchupStats
    }
  }
}

export default MapsHome

