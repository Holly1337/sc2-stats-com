import { Header, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import React from 'react'

export const SidebarCustom: React.FC = ({ children }) => (
  <Sidebar.Pushable as={Segment} style={{ border: 'none', borderRadius: 0 }}>
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      visible
      width='thin'
    >
      <Menu.Item as='a'>
        <Icon name='home' />
        Home
      </Menu.Item>
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
      <Menu.Item as='a'>
        <Icon name='cut' />
        Upgrades
      </Menu.Item>
    </Sidebar>

    <Sidebar.Pusher>
      <Segment basic>
        {children}
      </Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
)
