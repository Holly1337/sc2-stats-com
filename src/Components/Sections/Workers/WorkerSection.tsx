import React from 'react'
import { Divider, Grid, Header } from 'semantic-ui-react'
import { SegmentCustom } from '../../Segments/SegmentCustom'
import UnitStat from '../../Common/UnitStat/UnitStat'
import Number from '../../Common/Numbers/Number'
import SectionHeading from '../../Common/SectionHeading/SectionHeading'

export const WorkerSection = () => {
  return (
    <>
      <Header size={'huge'}>Workers</Header>
      <SegmentCustom>
        <SectionHeading
          title={<><Number value={1337} /> workers created</>}
          subtitle={<>That's <Number value={6550} /> minerals</>}
        />
        <Divider section />
        <Grid columns={3} textAlign={'center'}>
          <Grid.Row>
            <Grid.Column>
              <UnitStat id={'Probe'} count={55} averagePerGame={{ current: 33, previous: 66}} />
            </Grid.Column>
            <Grid.Column>
              <UnitStat id={'Drone'} count={44} averagePerGame={{ current: 33, previous: 66}} />
            </Grid.Column>
            <Grid.Column>
              <UnitStat id={'SCV'} count={66} averagePerGame={{ current: 33, previous: 66}} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </SegmentCustom>
    </>
  )
}