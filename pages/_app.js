import 'semantic-ui-css/semantic.min.css'
import '../styles/styles.scss'
import '../styles/timeline-custom.css'
import '../styles/font-starcraft.css'
import 'vis-timeline/dist/vis-timeline-graph2d.min.css'
import { TopBar } from '../src/Components/Nav/TopBar'
import React from 'react'

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  marginBottom: 0,
}

function MyApp({ Component, pageProps }) {
  return (
    <div style={{
      // TODO: Fix height
      height: 'calc(100vh - 64px)',
      width: '100vw',
      position: 'absolute',
      marginTop: 64
    }}>
      <TopBar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
