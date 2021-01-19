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
import { MatchupStats, UpgradesCount, UpgradesTimes } from '../../../../src/types/stats'
import { getTournamentPaths } from '../../../../src/util/paths'
import { useState } from 'react'
import { TITLE } from '../../../../src/constants/meta'

interface Props {
  id: string
  name: string
  matchups: MatchupStats
  upgradesCount: UpgradesCount
  upgradesTimes: UpgradesTimes
}

export default function Home(props: Props) {
  const { id, name, matchups, upgradesCount, upgradesTimes } = props
  const [showPercentage, setShowPercentage] = useState(false)

  const toggleShowPercentage = () => {
    setShowPercentage(showPercentage => !showPercentage)
  }

  return (
    <TournamentPageWrapper
      tournamentId={id}
      tournamentName={name}
      title={`Upgrades - ${props.name} - ${TITLE}`}
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
          Upgrades
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
