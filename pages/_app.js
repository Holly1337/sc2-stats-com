import 'semantic-ui-css/semantic.min.css'
import 'vis-timeline/dist/vis-timeline-graph2d.min.css'
import 'rc-slider/assets/index.css'
import 'react-aspect-ratio/aspect-ratio.css'
import '../styles/timeline-custom.scss'
import '../styles/font-starcraft.css'
import '../styles/mediaquery.css'
import '../styles/styles.scss'
import { TopBar } from '../src/Components/Nav/TopBar/TopBar'
import React, { createContext, useState } from 'react'
import { Footer } from '../src/Components/Nav/Footer/Footer'
import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'

export const SidebarContext = createContext([true, () => {}])

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const ogUrl = router.asPath.split('?')[0]
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div style={{
      width: '100vw',
      position: 'absolute',
      marginTop: 64
    }}>
      <SidebarContext.Provider value={[isSidebarOpen, setIsSidebarOpen]}>
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
              width: 600,
              height: 315
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
      </SidebarContext.Provider>
    </div>
  )
}

export default MyApp
