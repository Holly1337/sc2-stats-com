import { TournamentPageWrapper } from '../../../../src/Components/Layout/TournamentPageWrapper'
import { Breadcrumb } from 'semantic-ui-react'
import Link from 'next/link'
import { UnitsCountSection } from '../../../../src/Components/Sections/Units/UnitsCount/UnitsCountSection'
import { BuildingsCountSection } from '../../../../src/Components/Sections/Units/UnitsCount/BuildingsCountSection'

const MapsHome = () => {
  return (
    <TournamentPageWrapper tournamentId={'dhmw2020'}>
      <Breadcrumb>
        <Breadcrumb.Section href={'/'}>
          <Link href={'/'}>Home</Link>
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section>
          <Link href={'/tournament/hscxviii'}>Home Story Cup XVIII</Link>
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section active>
          Units
        </Breadcrumb.Section>
      </Breadcrumb>
      <UnitsCountSection />
      <BuildingsCountSection />
    </TournamentPageWrapper>
  )
}

export default MapsHome
