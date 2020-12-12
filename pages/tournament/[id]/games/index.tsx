import { TournamentPageWrapper } from '../../../../src/Components/Layout/TournamentPageWrapper'
import { Breadcrumb } from 'semantic-ui-react'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import { loadTournamentData } from '../../../../src/util/loadFile'
import { getTournamentPaths } from '../../../../src/util/paths'
import { TournamentSection } from '../../../../src/Components/Sections/Tournament/TournamentSection'
import { TreeNode } from '../../../../src/Components/Sections/Tournament/TournamentListItem'

interface Props {
  id: string
  name: string
  tree: TreeNode
}

const GamesHome = (props: Props) => {
  const { id, name, tree } = props
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
          All Games
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
  const meta = await loadTournamentData(context.params.id as string, 'meta')
  const tree = await loadTournamentData(context.params.id as string, 'tree')

  return {
    props: {
      ...meta,
      tree
    }
  }
}

export default GamesHome
