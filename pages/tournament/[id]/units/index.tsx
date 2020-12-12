import { TournamentPageWrapper } from '../../../../src/Components/Layout/TournamentPageWrapper'
import { Breadcrumb } from 'semantic-ui-react'
import Link from 'next/link'
import { UnitsCountSection } from '../../../../src/Components/Sections/Units/UnitsCount/UnitsCountSection'
import { BuildingsCountSection } from '../../../../src/Components/Sections/Units/UnitsCount/BuildingsCountSection'
import { GetStaticPaths, GetStaticProps } from 'next'
import { loadTournamentData } from '../../../../src/util/loadFile'
import { MatchupStats, UnitsBuilt } from '../../../../src/types/stats'
import { getTournamentPaths } from '../../../../src/util/paths'

interface Props {
  id: string
  name: string
  matchups: MatchupStats
  unitsBuilt: UnitsBuilt
}

const MapsHome = (props: Props) => {
  const { id, name, matchups, unitsBuilt } = props
  return (
    <TournamentPageWrapper tournamentId={id}>
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
      <UnitsCountSection matchups={matchups} unitsBuilt={unitsBuilt} />
      <BuildingsCountSection matchups={matchups} unitsBuilt={unitsBuilt} />
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
