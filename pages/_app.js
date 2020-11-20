import 'semantic-ui-css/semantic.min.css'
import '../styles/styles.scss'
import { Container, Menu } from 'semantic-ui-react'
import { SidebarCustom } from '../src/Components/SidebarCustom'


const menuStyle = {
  border: 'none',
  borderRadius: 0,
  marginBottom: 0,
}

function MyApp({ Component, pageProps }) {
  return (
    <div>
      {/*<Menu borderless={true} size={'huge'} style={menuStyle}>
        <Container>
          <Menu.Item as={'a'} active={true}>Home</Menu.Item>
          <Menu.Item as={'a'}>Test 1</Menu.Item>
          <Menu.Item as={'a'}>Test 2</Menu.Item>
        </Container>
      </Menu>*/}
      <div style={{
        height: '100vh',
        width: '100vw',
        position: 'absolute'
      }}>
        <SidebarCustom>
          <div style={{ marginLeft: 150 }}>
            <Component {...pageProps} />
          </div>
        </SidebarCustom>
      </div>
    </div>
  )
}

export default MyApp
