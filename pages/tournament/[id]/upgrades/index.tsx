import { Breadcrumb } from 'semantic-ui-react'
import ResearchAmountSection from '../../../../src/Components/Sections/Upgrades/ResearchAmount/ResearchAmountSection'
import CombatUpgradeSection from '../../../../src/Components/Sections/Upgrades/CompletionTimes/CombatUpgradeSection'
import GeneralUpgradeSection from '../../../../src/Components/Sections/Upgrades/CompletionTimes/GeneralUpgradeSection'
import { TournamentPageWrapper } from '../../../../src/Components/Layout/TournamentPageWrapper'

export default function Home() {
  return (
    <TournamentPageWrapper>
      <Breadcrumb>
        <Breadcrumb.Section href={'/'}>
          Home
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section href={'/tournament/hscxviii'}>
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
    </TournamentPageWrapper>
  )
}
