import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import React from 'react'
import Link from 'next/link'

export const SidebarCustom: React.FC = ({ children }) => (
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
      <Link href={'/tournament/hscxiii'}>
        <Menu.Item as={'a'} active>
          <Icon name='area graph' />
          General
        </Menu.Item>
      </Link>
      <Menu.Item as='a'>
        <Icon name='map outline' />
        Maps
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='group' />
        Units
      </Menu.Item>
      <Link href={'/tournament/hscxiii/upgrades'}>
        <Menu.Item as={'a'}>
          <Icon name='cut' />
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
