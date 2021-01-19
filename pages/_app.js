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
import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const ogUrl = router.asPath.split('?')[0]

  return (
    <div style={{
      width: '100vw',
      position: 'absolute',
      marginTop: 64
    }}>
      <DefaultSeo
        titleTemplate={'%s | SC2 Stats'}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: `${process.env.BASE_URL}${ogUrl}`,
          site_name: 'SC2 Stats',
          images: [{
            url: `${process.env.BASE_URL}/assets/images/logo_open_graph.png`,
            alt: 'SC2 Stats logo',
            width: 350,
            height: 64
          }]
        }}
        twitter={{
          handle: '@HollySC2',
          site: '@HollySC2',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          { name: 'keywords', content:'SC2, Starcraft2, Tournament, Stats, Statistics, Numbers, Replay' }
        ]}
      />
      <TopBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
