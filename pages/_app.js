import 'semantic-ui-css/semantic.min.css'
import '../styles/styles.scss'
import '../styles/timeline-custom.css'
import '../styles/font-starcraft.css'
import 'vis-timeline/dist/vis-timeline-graph2d.min.css'
import { Container, Menu } from 'semantic-ui-react'
import { SidebarCustom } from '../src/Components/Nav/SidebarCustom'
import {TopBar} from "../src/Components/Nav/TopBar";


const menuStyle = {
  border: 'none',
  borderRadius: 0,
  marginBottom: 0,
}

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <TopBar />
      {/*<Menu borderless={true} size={'huge'} style={menuStyle}>
        <Container>
          <Menu.Item as={'a'} active={true}>Home</Menu.Item>
          <Menu.Item as={'a'}>Test 1</Menu.Item>
          <Menu.Item as={'a'}>Test 2</Menu.Item>
        </Container>
      </Menu>*/}
      <div style={{
        // TODO: Fix height
        height: 'calc(100vh - 64px)',
        width: '100vw',
        position: 'absolute',
        marginTop: 64
      }}>
        <SidebarCustom>
          <div style={{ marginLeft: 150 }}>
            <Container>
              <Component {...pageProps} />
            </Container>
          </div>
        </SidebarCustom>
      </div>
    </div>
  )
}

export default MyApp
