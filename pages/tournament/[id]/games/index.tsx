import { TournamentPageWrapper } from '../../../../src/Components/Layout/TournamentPageWrapper'
import { Breadcrumb } from 'semantic-ui-react'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import { loadTournamentData } from '../../../../src/util/loadFile'
import { getTournamentPaths } from '../../../../src/util/paths'
import { TournamentSection } from '../../../../src/Components/Sections/Tournament/TournamentSection'

interface Props {
  id: string
  name: string
}

const GamesHome = (props: Props) => {
  const { id, name, } = props
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
          Units
        </Breadcrumb.Section>
      </Breadcrumb>
      <TournamentSection />
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

  return {
    props: {
      ...meta,
    }
  }
}

export default GamesHome
