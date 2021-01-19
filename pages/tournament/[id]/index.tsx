import { Breadcrumb } from 'semantic-ui-react'
import { GeneralSection } from '../../../src/Components/Sections/General/GeneralSection'
import { MatchupsSection } from '../../../src/Components/Sections/Matchups/MatchupsSection'
import { ResourcesSpentGraphSection } from '../../../src/Components/Sections/Resources/ResourcesSpentGraphSection'
import MapsPlayedSectionHorizontal from '../../../src/Components/Sections/Maps/MapsPlayed'
import { SupplySection } from '../../../src/Components/Sections/Supply/SupplySection'
import { WorkerSection } from '../../../src/Components/Sections/Workers/WorkerSection'
import { PopularUnitsSection } from '../../../src/Components/Sections/PopularUnits/PopularUnitsSection'
import { TournamentPageWrapper } from '../../../src/Components/Layout/TournamentPageWrapper'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import { loadTournamentData, loadTournaments } from '../../../src/util/loadFile'
import { TournamentIndexPageProps } from '../../../src/types/TournamentIndexPage'
import { getTournamentPaths } from '../../../src/util/paths'
import { TournamentNameHeading } from '../../../src/Components/Common/Headings/TournamentNameHeading/TournamentNameHeading'

export default function Home(props: TournamentIndexPageProps) {
  const { id, name, tournament } = props
  return (
    <TournamentPageWrapper
      tournament={tournament}
      pageName={'Overview'}
    >
      <Breadcrumb>
        <Breadcrumb.Section>
          <Link href={'/'}>Home</Link>
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section active>
          {name}
        </Breadcrumb.Section>
      </Breadcrumb>
      <TournamentNameHeading>{name}</TournamentNameHeading>
      <GeneralSection stats={props.general} />
      <MatchupsSection stats={props.matchups} />
      <ResourcesSpentGraphSection stats={props.resources} />
      <MapsPlayedSectionHorizontal stats={props.mapsPlayed} />
      <SupplySection current={props.supply.current} previous={props.supply.previous} matchups={props.matchups} />
      <WorkerSection current={props.workers.current} previous={props.workers.previous} matchups={props.matchups} />
      <PopularUnitsSection stats={props.popularUnits} />
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
  let id: string = context.params.id as string

  const tournaments = await loadTournaments()
  const tournament = tournaments.find(tournament => tournament.id = id)
  const metaData = await loadTournamentData(id, 'meta')
  const generalStats = await loadTournamentData(id, 'general')
  const matchupStats = await loadTournamentData(id, 'matchups')
  const resourcesStats = await loadTournamentData(id, 'resources')
  const mapsPlayedStats = await loadTournamentData(id, 'mapsPlayed')
  const supplyStats = await loadTournamentData(id, 'supply')
  const workerStats = await loadTournamentData(id, 'workers')
  const popularUnitsStats = await loadTournamentData(id, 'popularUnits')

  return {
    props: {
      ...metaData,
      tournament,
      general: generalStats,
      matchups: matchupStats,
      resources: resourcesStats,
      mapsPlayed: mapsPlayedStats,
      supply: supplyStats,
      workers: workerStats,
      popularUnits: popularUnitsStats
    }
  }
}
