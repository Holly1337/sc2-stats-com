import { Breadcrumb } from 'semantic-ui-react'
import ResearchAmountSection from '../../../../src/Components/Sections/Upgrades/ResearchAmount/ResearchAmountSection'
import CombatUpgradeSection from '../../../../src/Components/Sections/Upgrades/CompletionTimes/CombatUpgradeSection'
import GeneralUpgradeSection from '../../../../src/Components/Sections/Upgrades/CompletionTimes/GeneralUpgradeSection'
import { TournamentPageWrapper } from '../../../../src/Components/Layout/TournamentPageWrapper'
import Link from 'next/link'

export default function Home() {
  return (
    <TournamentPageWrapper tournamentId={'dhmw2020'}>
      <Breadcrumb>
        <Breadcrumb.Section>
          <Link href={'/'}>Home</Link>
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section>
          <Link href={'/tournament/hscxviii'}>Home Story Cup XVIII</Link>
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
