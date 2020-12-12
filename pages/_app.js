import 'semantic-ui-css/semantic.min.css'
import '../styles/timeline-custom.scss'
import '../styles/font-starcraft.css'
import 'vis-timeline/dist/vis-timeline-graph2d.min.css'
import 'rc-slider/assets/index.css'
import '../styles/styles.scss'
import { TopBar } from '../src/Components/Nav/TopBar/TopBar'
import React from 'react'
import { Footer } from '../src/Components/Nav/Footer/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <div style={{
      width: '100vw',
      position: 'absolute',
      marginTop: 64
    }}>
      <TopBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
