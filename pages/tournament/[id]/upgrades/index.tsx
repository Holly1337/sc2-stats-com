import { Breadcrumb } from 'semantic-ui-react'
import ResearchAmountSection from '../../../../src/Components/Sections/Upgrades/ResearchAmount/ResearchAmountSection'
import CombatUpgradeSection from '../../../../src/Components/Sections/Upgrades/CompletionTimes/CombatUpgradeSection'
import GeneralUpgradeSection from '../../../../src/Components/Sections/Upgrades/CompletionTimes/GeneralUpgradeSection'
import { TournamentPageWrapper } from '../../../../src/Components/Layout/TournamentPageWrapper'
import Link from 'next/link'
import CombatUpgradeAmountSection
  from '../../../../src/Components/Sections/Upgrades/ResearchAmount/CombatUpgradeAmountSection'
import { GetStaticPaths, GetStaticProps } from 'next'
import { loadTournamentData } from '../../../../src/util/loadFile'
import { MatchupStats, UpgradesCount, UpgradesTimes } from '../../../types/stats'

interface Props {
  id: string
  name: string
  matchups: MatchupStats
  upgradesCount: UpgradesCount
  upgradesTimes: UpgradesTimes
}

export default function Home(props: Props) {
  const { id, name, matchups, upgradesCount, upgradesTimes } = props
  return (
    <TournamentPageWrapper tournamentId={'dhmw2020'}>
      <Breadcrumb>
        <Breadcrumb.Section>
          <Link href={'/'}>Home</Link>
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section>
          <Link href={`/tournament/${id}`}>{name}</Link>
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section active>
          Upgrades
        </Breadcrumb.Section>
      </Breadcrumb>
      <ResearchAmountSection matchups={matchups} upgradesCount={upgradesCount} />
      <CombatUpgradeAmountSection matchups={matchups} upgradesCount={upgradesCount} />
      <CombatUpgradeSection upgradesCount={upgradesCount} upgradesTimes={upgradesTimes} />
      <GeneralUpgradeSection upgradesCount={upgradesCount} upgradesTimes={upgradesTimes} />
    </TournamentPageWrapper>
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
  const matchupStats = await loadTournamentData(context.params.id as string, 'matchups')
  const upgradesCountsStats = await loadTournamentData(context.params.id as string, 'upgradesCount')
  const upgradesTimesStats = await loadTournamentData(context.params.id as string, 'upgradesTimes')

  return {
    props: {
      ...metaData,
      matchups: matchupStats,
      upgradesCount: upgradesCountsStats,
      upgradesTimes: upgradesTimesStats
    }
  }
}