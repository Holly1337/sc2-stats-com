import { SegmentCustom } from '../src/Components/SegmentCustom'
import { Breadcrumb, Grid, Header, Statistic } from 'semantic-ui-react'
import { GeneralSection } from '../src/Components/Sections/GeneralSection'
import { MatchupsSection } from '../src/Components/Sections/Maps/MatchupsSection'

export default function Home() {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Section link href={'/'}>
          Home
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section link href={'/hscxviii'}>
          Home Story Cup XVIII
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section active>
          Units
        </Breadcrumb.Section>
      </Breadcrumb>
      <GeneralSection />
      <MatchupsSection />
      <Header as={'h1'}>
        Resources
      </Header>
      <SegmentCustom>
        My segment without heading
      </SegmentCustom>
    </div>
  )
}
