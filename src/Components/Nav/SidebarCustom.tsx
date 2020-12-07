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
        <Link href={`/tournament/${tournamentId}`}>
          <Menu.Item as={'a'}>
            <Icon name='eye' />
            Overview
          </Menu.Item>
        </Link>
        <Link href={`/tournament/${tournamentId}/maps`}>
          <Menu.Item as={'a'}>
            <Icon name='map outline' />
            Maps
          </Menu.Item>
        </Link>
        <Link href={`/tournament/${tournamentId}/units`}>
          <Menu.Item as={'a'}>
            <Icon name='group' />
            Units
          </Menu.Item>
        </Link>
        <Link href={`/tournament/${tournamentId}/upgrades`}>
          <Menu.Item as={'a'}>
            <Icon name='angle double up' />
            Upgrades
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