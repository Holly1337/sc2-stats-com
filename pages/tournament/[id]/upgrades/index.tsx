import { Breadcrumb } from 'semantic-ui-react'
import ResearchAmountSection from '../../../../src/Components/Sections/Upgrades/ResearchAmount/ResearchAmountSection'
import CombatUpgradeSection from '../../../../src/Components/Sections/Upgrades/CompletionTimes/CombatUpgradeSection'
import GeneralUpgradeSection from '../../../../src/Components/Sections/Upgrades/CompletionTimes/GeneralUpgradeSection'
import { TournamentPageWrapper } from '../../../../src/Components/Layout/TournamentPageWrapper'
import Link from 'next/link'
import CombatUpgradeAmountSection
  from '../../../../src/Components/Sections/Upgrades/ResearchAmount/CombatUpgradeAmountSection'
import { GetStaticPaths, GetStaticProps } from 'next'
import { loadTournamentData, loadTournaments } from '../../../../src/util/loadFile'
import { MatchupStats, UpgradesCount, UpgradesTimes } from '../../../../src/types/stats'
import { getTournamentPaths } from '../../../../src/util/paths'
import { useState } from 'react'

interface Props {
  id: string
  name: string
  tournament: TournamentData
  matchups: MatchupStats
  upgradesCount: UpgradesCount
  upgradesTimes: UpgradesTimes
}

export default function Home(props: Props) {
  const { id, name, tournament, matchups, upgradesCount, upgradesTimes } = props
  const [showPercentage, setShowPercentage] = useState(false)
  const pageName = 'Upgrades'

  const toggleShowPercentage = () => {
    setShowPercentage(showPercentage => !showPercentage)
  }

  return (
    <TournamentPageWrapper
      tournament={tournament}
      pageName={pageName}
    >
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
          {pageName}
        </Breadcrumb.Section>
      </Breadcrumb>
      <ResearchAmountSection
        matchups={matchups}
        upgradesCount={upgradesCount}
        showPercentage={showPercentage}
        onToggleShowPercentage={toggleShowPercentage}
      />
      <GeneralUpgradeSection upgradesCount={upgradesCount} upgradesTimes={upgradesTimes} />
      <CombatUpgradeAmountSection
        matchups={matchups}
        upgradesCount={upgradesCount}
        showPercentage={showPercentage}
        onToggleShowPercentage={toggleShowPercentage}
      />
      <CombatUpgradeSection upgradesCount={upgradesCount} upgradesTimes={upgradesTimes} />
    </TournamentPageWrapper>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getTournamentPaths()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  let id = context.params.id as string

  const tournaments = await loadTournaments()
  const tournament = tournaments.find(tournament => tournament.id = id)
  const metaData = await loadTournamentData(id, 'meta')
  const matchupStats = await loadTournamentData(id, 'matchups')
  const upgradesCountsStats = await loadTournamentData(id, 'upgradesCount')
  const upgradesTimesStats = await loadTournamentData(id, 'upgradesTimes')

  return {
    props: {
      ...metaData,
      tournament,
      matchups: matchupStats,
      upgradesCount: upgradesCountsStats,
      upgradesTimes: upgradesTimesStats
    }
  }
}
