import 'semantic-ui-css/semantic.min.css'
import '../styles/timeline-custom.css'
import '../styles/font-starcraft.css'
import 'vis-timeline/dist/vis-timeline-graph2d.min.css'
import '../styles/styles.scss'
import { TopBar } from '../src/Components/Nav/TopBar/TopBar'
import React from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <div style={{
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
