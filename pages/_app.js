import 'semantic-ui-css/semantic.min.css'
import 'vis-timeline/dist/vis-timeline-graph2d.min.css'
import 'rc-slider/assets/index.css'
import 'react-aspect-ratio/aspect-ratio.css'
import '../styles/timeline-custom.scss'
import '../styles/font-starcraft.css'
import '../styles/styles.scss'
import { TopBar } from '../src/Components/Nav/TopBar/TopBar'
import React from 'react'
import { Footer } from '../src/Components/Nav/Footer/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div style={{
      width: '100vw',
      position: 'absolute',
      marginTop: 64
    }}>
      <Head>
        <meta name='keywords' content='SC2, Starcraft2, Tournament, Stats, Statistics, Numbers, Replay'/>
      </Head>
      <TopBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
