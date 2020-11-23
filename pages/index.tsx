import { Breadcrumb } from 'semantic-ui-react'
import { GeneralSection } from '../src/Components/Sections/GeneralSection'
import { MatchupsSection } from '../src/Components/Sections/Matchups/MatchupsSection'
import { WorkerSection } from '../src/Components/Sections/Workers/WorkerSection'
import { SupplySection } from '../src/Components/Sections/Supply/SupplySection'
import { PopularUnitsSection } from '../src/Components/Sections/PopularUnits/PopularUnitsSection'
import MapsPlayedSectionHorizontal from '../src/Components/Sections/Maps/MapsPlayed'
import { ResourcesSpentGraphSection } from '../src/Components/Sections/Resources/ResourcesSpentGraphSection'

export default function Home() {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Section href={'/'}>
          Home
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section active>
          Home Story Cup XVIII
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
      </Breadcrumb>
      <GeneralSection />
      <MatchupsSection />
      <ResourcesSpentGraphSection />
      <MapsPlayedSectionHorizontal />
      <SupplySection />
      <WorkerSection />
      <PopularUnitsSection />
    </div>
  )
}
