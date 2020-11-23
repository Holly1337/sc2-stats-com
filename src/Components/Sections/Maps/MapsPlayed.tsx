import React from 'react'
import MapStatHorizontal from './MapStatHorizontal'

import { Header } from 'semantic-ui-react'
import { SegmentCustom } from '../../Segments/SegmentCustom'

interface MapData {
    id: string
    name: string
    count: number
}

const MapsPlayedSectionHorizontal = () => {
    return (
      <>
          <Header size={'huge'}>Maps Played</Header>
          <SegmentCustom>
            <div className={'mt-4'}>
              <MapStatHorizontal
                count={12}
                maxPlayCount={12}
                name={'Death Aura'}
                image={'https://placehold.it/780x780'}
              />
              <MapStatHorizontal
                count={7}
                maxPlayCount={12}
                name={'Sandstorm'}
                image={'https://placehold.it/780x780'}
              />
              <MapStatHorizontal
                count={5}
                maxPlayCount={12}
                name={'Derelict Watcher'}
                image={'https://placehold.it/780x780'}
              />
            </div>
          </SegmentCustom>
      </>
    )
    /*
    return (
      <Section id={'maps-played'}>
          <SectionHeading title={'Maps played'} />
          <Container>
              <div>
                  {maps.map(map => (
                    <MapStatHorizontal key={map.id} {...map} maxPlayCount={maxPlayCount} />
                  ))}
              </div>
          </Container>
      </Section>
    )
     */
}

export default MapsPlayedSectionHorizontal
