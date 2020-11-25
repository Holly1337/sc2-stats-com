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

export default function Home() {
  return (
    <TournamentPageWrapper>
      <Breadcrumb>
        <Breadcrumb.Section>
          <Link href={'/'}>Home</Link>
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section active>
          Home Story Cup XVIII
        </Breadcrumb.Section>
      </Breadcrumb>
      <GeneralSection />
      <MatchupsSection />
      <ResourcesSpentGraphSection />
      <MapsPlayedSectionHorizontal />
      <SupplySection />
      <WorkerSection />
      <PopularUnitsSection />
    </TournamentPageWrapper>
  )
}
