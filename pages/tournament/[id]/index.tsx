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
import { loadTournamentData } from '../../../src/util/loadFile'
import { createContext } from 'react'
import { TournamentIndexPageProps } from '../../types/TournamentIndexPage'

export const TournamentContext = createContext<TournamentIndexPageProps>(null)

export default function Home(props: TournamentIndexPageProps) {
  const { id, name } = props
  return (
    <TournamentContext.Provider value={props}>
      <TournamentPageWrapper tournamentId={id}>
        <Breadcrumb>
          <Breadcrumb.Section>
            <Link href={'/'}>Home</Link>
          </Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section active>
            {name}
          </Breadcrumb.Section>
        </Breadcrumb>
        <GeneralSection stats={props.general} />
        <MatchupsSection stats={props.matchups} />
        <ResourcesSpentGraphSection stats={props.resources} />
        <MapsPlayedSectionHorizontal />
        <SupplySection />
        <WorkerSection />
        <PopularUnitsSection />
      </TournamentPageWrapper>
    </TournamentContext.Provider>
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
  const metaData = await loadTournamentData(context.params.id as string, 'meta')
  const generalStats = await loadTournamentData(context.params.id as string, 'general')
  const matchupStats = await loadTournamentData(context.params.id as string, 'matchups')
  const resourcesStats = await loadTournamentData(context.params.id as string, 'resources')
  return {
    props: {
      ...metaData,
      general: generalStats,
      matchups: matchupStats,
      resources: resourcesStats
    }
  }
}