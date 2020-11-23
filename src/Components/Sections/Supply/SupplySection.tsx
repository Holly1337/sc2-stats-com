import React from 'react'
import { Divider, Grid, Header } from 'semantic-ui-react'
import { SegmentCustom } from '../../Segments/SegmentCustom'
import UnitStat from '../../Common/UnitStat/UnitStat'
import Number from '../../Common/Numbers/Number'
import SectionHeading from '../../Common/SectionHeading/SectionHeading'

export const SupplySection = () => {
  return (
    <>
      <Header size={'huge'}>Look at the supply</Header>
      <SegmentCustom>
        <SectionHeading
          title={<><Number value={28679} /> supply structures generated <Number value={229432} /> free supply</>}
          subtitle={<>That's <Number value={6550} /> minerals</>}
        />
        <Divider section />
        <Grid columns={3} textAlign={'center'}>
          <Grid.Row>
            <Grid.Column>
              <UnitStat id={'Pylon'} count={100} averagePerGame={{ current: 33, previous: 66}} />
            </Grid.Column>
            <Grid.Column>
              <UnitStat id={'Overlord'} count={200} averagePerGame={{ current: 33, previous: 66}} />
            </Grid.Column>
            <Grid.Column>
              <UnitStat id={'SupplyDepot'} count={50} averagePerGame={{ current: 33, previous: 66}} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </SegmentCustom>
    </>
  )
}