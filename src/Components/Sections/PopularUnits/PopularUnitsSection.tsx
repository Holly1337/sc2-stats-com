import React from 'react'
import { Divider, Grid, Header } from 'semantic-ui-react'
import { SegmentCustom } from '../../Segments/SegmentCustom'
import UnitStat from '../../Common/UnitStat/UnitStat'
import SectionHeading from '../../Common/SectionHeading/SectionHeading'
import MineralNumber from '../../Common/Numbers/MineralNumber'
import GasNumber from '../../Common/Numbers/GasNumber'

const data = {
  mostBuiltUnits: {
    "Zergling": 97028,
    "Marine": 40137,
    "Baneling": 19349,
    "Zealot": 18599
  }
}

export const PopularUnitsSection = () => {
  const { mostBuiltUnits } = data
  const unitData = Object.entries(mostBuiltUnits)
    .map(([unitName, amount]) => ({ id: unitName, count: amount }))
    .sort((u1, u2) => u2.count - u1.count)

  return (
    <>
      <SegmentCustom heading={'Most Popular Units'}>
        <SectionHeading
          title={<>They account for a total of <MineralNumber value={1337} /> minerals and <GasNumber value={42} /> Gas</>}
        />
        <Divider section />
        <Grid
          // can be ignored since length of popular units will never be > 16
          // @ts-ignore
          columns={unitData.length}
          textAlign={'center'}
        >
          <Grid.Row>
            {unitData.map(unit => (
              <Grid.Column key={unit.id}>
                <UnitStat
                  id={unit.id}
                  count={unit.count}
                  showCost
                />
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </SegmentCustom>
    </>
  )
}