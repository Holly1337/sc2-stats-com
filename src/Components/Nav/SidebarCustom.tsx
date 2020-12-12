import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface Props {
  tournamentId: string
}

export const SidebarCustom: React.FC<Props> = (props) => {
  const { tournamentId, children } = props
  const router = useRouter()
  const path = router.asPath

  const hrefs = {
    overview: `/tournament/${tournamentId}`,
    maps: `/tournament/${tournamentId}/maps`,
    units: `/tournament/${tournamentId}/units`,
    upgrades: `/tournament/${tournamentId}/upgrades`,
    games: `/tournament/${tournamentId}/games`
  }

  return (
    <Sidebar.Pushable
      as={Segment}
      style={{ border: 'none', borderRadius: 0, height: '100%', minHeight: '100vh', marginBottom: 0 }}
      id={'base-segment'}
      className={'mt-0'}
    >
      <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        vertical
        visible
        width='thin'
        style={{ height: '100%' }}
      >
        <Link href={hrefs.overview} passHref={true}>
          <Menu.Item as={'a'} active={path === hrefs.overview}>
            <Icon name='eye' />
            Overview
          </Menu.Item>
        </Link>
        <Link href={hrefs.maps} passHref={true}>
          <Menu.Item as={'a'} active={path === hrefs.maps}>
            <Icon name='map outline' />
            Maps
          </Menu.Item>
        </Link>
        <Link href={hrefs.units} passHref={true}>
          <Menu.Item as={'a'} active={path === hrefs.units}>
            <Icon name='group' />
            Units & Buildings
          </Menu.Item>
        </Link>
        <Link href={hrefs.upgrades} passHref={true}>
          <Menu.Item as={'a'} active={path === hrefs.upgrades}>
            <Icon name='angle double up' />
            Upgrades
          </Menu.Item>
        </Link>
        <Link href={hrefs.games} passHref={true}>
          <Menu.Item as={'a'} active={path.startsWith(hrefs.games)}>
            <Icon name='sitemap' />
            All Games
          </Menu.Item>
        </Link>
      </Sidebar>

      <Sidebar.Pusher>
        <Segment basic>
          {children}
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  )
}