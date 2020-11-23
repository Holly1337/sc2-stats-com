import React from 'react'
import { Divider, Grid, Header } from 'semantic-ui-react'
import { SegmentCustom } from '../../Segments/SegmentCustom'
import UnitStat from '../../Common/UnitStat/UnitStat'
import SectionHeading from '../../Common/SectionHeading/SectionHeading'
import MineralNumber from '../../Common/Numbers/MineralNumber'
import GasNumber from '../../Common/Numbers/GasNumber'

export const PopularUnitsSection = () => {
  return (
    <>
      <Header size={'huge'}>Most Popular Units</Header>
      <SegmentCustom>
        <SectionHeading
          title={<>They account for a total of <MineralNumber value={1337} /> minerals and <GasNumber value={42} /> Gas</>}
        />
        <Divider section />
        <Grid columns={3} textAlign={'center'}>
          <Grid.Row>
            <Grid.Column>
              <UnitStat id={'Marine'} count={100} showCost />
            </Grid.Column>
            <Grid.Column>
              <UnitStat id={'Zergling'} count={200} showCost />
            </Grid.Column>
            <Grid.Column>
              <UnitStat id={'Zealot'} count={50} showCost />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </SegmentCustom>
    </>
  )
}