import { TournamentPageWrapper } from '../../../../src/Components/Layout/TournamentPageWrapper'
import { Breadcrumb } from 'semantic-ui-react'
import Link from 'next/link'
import { UnitsCountSection } from '../../../../src/Components/Sections/Units/UnitsCount/UnitsCountSection'
import { BuildingsCountSection } from '../../../../src/Components/Sections/Units/UnitsCount/BuildingsCountSection'
import { GetStaticPaths, GetStaticProps } from 'next'
import { loadTournamentData, loadTournaments } from '../../../../src/util/loadFile'
import { MatchupStats, UnitsBuilt } from '../../../../src/types/stats'
import { getTournamentPaths } from '../../../../src/util/paths'
import { useState } from 'react'

interface Props {
  id: string
  name: string
  tournament: TournamentData
  matchups: MatchupStats
  unitsBuilt: UnitsBuilt
}

const MapsHome = (props: Props) => {
  const { id, name, matchups, unitsBuilt, tournament } = props
  const [showAverage, setShowAverage] = useState(false)
  const pageName = 'Units & Buildings'

  const toggleShowAverage = () => {
    setShowAverage(showAverage => !showAverage)
  }

  return (
    <TournamentPageWrapper
      tournament={tournament}
      pageName={pageName}
    >
      <Breadcrumb>
        <Breadcrumb.Section href={'/'}>
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
      <UnitsCountSection
        matchups={matchups}
        unitsBuilt={unitsBuilt}
        showAverage={showAverage}
        onToggleShowAverage={toggleShowAverage}
      />
      <BuildingsCountSection
        matchups={matchups}
        unitsBuilt={unitsBuilt}
        showAverage={showAverage}
        onToggleShowAverage={toggleShowAverage}
      />
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
  const meta = await loadTournamentData(id, 'meta')
  const matchupStats = await loadTournamentData(id, 'matchups')
  const unitsBuiltStats = await loadTournamentData(id, 'unitsBuilt')

  return {
    props: {
      ...meta,
      tournament,
      matchups: matchupStats,
      unitsBuilt: unitsBuiltStats,
    }
  }
}

export default MapsHome
