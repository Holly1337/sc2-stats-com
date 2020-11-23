import { SegmentCustom } from '../src/Components/Segments/SegmentCustom'
import { Breadcrumb, Grid, Header, Statistic } from 'semantic-ui-react'
import { GeneralSection } from '../src/Components/Sections/GeneralSection'
import { MatchupsSection } from '../src/Components/Sections/Matchups/MatchupsSection'
import { WorkerSection } from '../src/Components/Sections/Workers/WorkerSection'
import { SupplySection } from '../src/Components/Sections/Supply/SupplySection'
import { PopularUnitsSection } from '../src/Components/Sections/PopularUnits/PopularUnitsSection'
import MapsPlayedSectionHorizontal from '../src/Components/Sections/Maps/MapsPlayed'

export default function Home() {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Section href={'/'}>
          Home
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section href={'/hscxviii'}>
          Home Story Cup XVIII
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section active>
          Units
        </Breadcrumb.Section>
      </Breadcrumb>
      <GeneralSection />
      <MatchupsSection />
      <MapsPlayedSectionHorizontal />
      <SupplySection />
      <WorkerSection />
      <PopularUnitsSection />
      <Header as={'h1'}>
        Resources
      </Header>
      <SegmentCustom>
        My segment without heading
      </SegmentCustom>
    </div>
  )
}
