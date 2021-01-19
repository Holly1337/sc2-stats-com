import { TournamentPageWrapper } from '../../../../src/Components/Layout/TournamentPageWrapper'
import { Breadcrumb } from 'semantic-ui-react'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import { loadTournamentData, loadTournaments } from '../../../../src/util/loadFile'
import { getTournamentPaths } from '../../../../src/util/paths'
import { TournamentSection } from '../../../../src/Components/Sections/Tournament/TournamentSection'
import { TreeNode } from '../../../../src/Components/Sections/Tournament/TournamentListItem'

interface Props {
  id: string
  name: string
  tournament: TournamentData
  tree: TreeNode
}

const GamesHome = (props: Props) => {
  const { id, name, tree, tournament } = props
  const pageName = 'All games'
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
      <TournamentSection tournamentId={id} tournamentName={name} tree={tree} />
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
  const tree = await loadTournamentData(id, 'tree')

  return {
    props: {
      ...meta,
      tournament,
      tree
    }
  }
}

export default GamesHome
