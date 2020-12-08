import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import React from 'react'
import Link from 'next/link'

interface Props {
  tournamentId: string
}

export const SidebarCustom: React.FC<Props> = (props) => {
  const { tournamentId, children } = props
  return (
    <Sidebar.Pushable
      as={Segment}
      style={{ border: 'none', borderRadius: 0, height: '100%', minHeight: '100vh' }}
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
        <Link href={`/tournament/${tournamentId}`} passHref={true}>
          <Menu.Item as={'a'}>
            <Icon name='eye' />
            Overview
          </Menu.Item>
        </Link>
        <Link href={`/tournament/${tournamentId}/maps`} passHref={true}>
          <Menu.Item as={'a'}>
            <Icon name='map outline' />
            Maps
          </Menu.Item>
        </Link>
        <Link href={`/tournament/${tournamentId}/units`} passHref={true}>
          <Menu.Item as={'a'}>
            <Icon name='group' />
            Units & Buildings
          </Menu.Item>
        </Link>
        <Link href={`/tournament/${tournamentId}/upgrades`} passHref={true}>
          <Menu.Item as={'a'}>
            <Icon name='angle double up' />
            Upgrades
          </Menu.Item>
        </Link>
        <Link href={`/tournament/${tournamentId}/games`} passHref={true}>
          <Menu.Item as={'a'}>
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