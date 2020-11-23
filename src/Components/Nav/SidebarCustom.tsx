import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import React from 'react'
import Link from 'next/link'

export const SidebarCustom: React.FC = ({ children }) => (
  <Sidebar.Pushable as={Segment} style={{ border: 'none', borderRadius: 0 }} id={'base-segment'}>
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      visible
      width='thin'
    >
      <Link href={'/'}>
        <Menu.Item as={'a'}>
          <Icon name='home' />
          Home
        </Menu.Item>
      </Link>
      <Menu.Item as='a'>
        <Icon name='area graph' />
        General
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='map outline' />
        Maps
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='group' />
        Units
      </Menu.Item>
      <Link href={'/upgrades'}>
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
