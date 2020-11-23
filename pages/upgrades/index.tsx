import { Breadcrumb } from 'semantic-ui-react'
import ResearchAmountSection from '../../src/Components/Sections/Upgrades/ResearchAmount/ResearchAmountSection'
import CombatUpgradeSection from '../../src/Components/Sections/Upgrades/CompletionTimes/CombatUpgradeSection'
import GeneralUpgradeSection from '../../src/Components/Sections/Upgrades/CompletionTimes/GeneralUpgradeSection'

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
          Upgrades
        </Breadcrumb.Section>
      </Breadcrumb>
      <ResearchAmountSection />
      <CombatUpgradeSection />
      <GeneralUpgradeSection />
    </div>
  )
}
