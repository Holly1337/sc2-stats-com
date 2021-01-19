import { TournamentPageWrapper } from '../../../../src/Components/Layout/TournamentPageWrapper'
import { Breadcrumb } from 'semantic-ui-react'
import Link from 'next/link'
import { UnitsCountSection } from '../../../../src/Components/Sections/Units/UnitsCount/UnitsCountSection'
import { BuildingsCountSection } from '../../../../src/Components/Sections/Units/UnitsCount/BuildingsCountSection'
import { GetStaticPaths, GetStaticProps } from 'next'
import { loadTournamentData } from '../../../../src/util/loadFile'
import { MatchupStats, UnitsBuilt } from '../../../../src/types/stats'
import { getTournamentPaths } from '../../../../src/util/paths'
import { useState } from 'react'
import { TITLE } from '../../../../src/constants/meta'

interface Props {
  id: string
  name: string
  matchups: MatchupStats
  unitsBuilt: UnitsBuilt
}

const MapsHome = (props: Props) => {
  const { id, name, matchups, unitsBuilt } = props
  const [showAverage, setShowAverage] = useState(false)

  const toggleShowAverage = () => {
    setShowAverage(showAverage => !showAverage)
  }

  return (
    <TournamentPageWrapper
      tournamentId={id}
      tournamentName={name}
      title={`Units & Buildings - ${props.name} - ${TITLE}`}
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
          Units & Buildings
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
  const meta = await loadTournamentData(context.params.id as string, 'meta')
  const matchupStats = await loadTournamentData(context.params.id as string, 'matchups')
  const unitsBuiltStats = await loadTournamentData(context.params.id as string, 'unitsBuilt')

  return {
    props: {
      ...meta,
      matchups: matchupStats,
      unitsBuilt: unitsBuiltStats,
    }
  }
}

export default MapsHome
