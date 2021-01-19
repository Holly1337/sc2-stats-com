import { Breadcrumb, Header } from 'semantic-ui-react'
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
import { loadTournamentData } from '../../../src/util/loadFile'
import { TournamentIndexPageProps } from '../../../src/types/TournamentIndexPage'
import { getTournamentPaths } from '../../../src/util/paths'
import { TournamentNameHeading } from '../../../src/Components/Common/Headings/TournamentNameHeading/TournamentNameHeading'
import { TITLE } from '../../../src/constants/meta'

export default function Home(props: TournamentIndexPageProps) {
  const { id, name } = props
  return (
    <TournamentPageWrapper
      tournamentId={id}
      tournamentName={name}
      title={`Overview - ${props.name} - ${TITLE}`}
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
  const metaData = await loadTournamentData(context.params.id as string, 'meta')
  const generalStats = await loadTournamentData(context.params.id as string, 'general')
  const matchupStats = await loadTournamentData(context.params.id as string, 'matchups')
  const resourcesStats = await loadTournamentData(context.params.id as string, 'resources')
  const mapsPlayedStats = await loadTournamentData(context.params.id as string, 'mapsPlayed')
  const supplyStats = await loadTournamentData(context.params.id as string, 'supply')
  const workerStats = await loadTournamentData(context.params.id as string, 'workers')
  const popularUnitsStats = await loadTournamentData(context.params.id as string, 'popularUnits')

  return {
    props: {
      ...metaData,
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
