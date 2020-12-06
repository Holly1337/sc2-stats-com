import React from 'react'
import { Divider, Grid } from 'semantic-ui-react'
import { SegmentCustom } from '../../Segments/SegmentCustom'
import UnitStat from '../../Common/UnitStat/UnitStat'
import SectionHeading from '../../Common/SectionHeading/SectionHeading'
import MineralNumber from '../../Common/Numbers/MineralNumber'
import GasNumber from '../../Common/Numbers/GasNumber'
import { PopularUnit } from '../../../../pages/types/stats'
import allUnitCost from '../../../data/units-cost.json'

interface Props {
  stats: Array<PopularUnit>
}

export const PopularUnitsSection = (props: Props) => {
  const popularUnits = [...props.stats].sort((u1, u2) => u2.count - u1.count)

  const totalCostPerUnit = popularUnits.map(unit => ({
    Minerals: allUnitCost[unit.id].Minerals * unit.count,
    Gas: allUnitCost[unit.id].Gas * unit.count
  }))

  const totalCost = totalCostPerUnit.reduce((total, current) => {
    total.Minerals += current.Minerals
    total.Gas += current.Gas
    return total
  }, { Minerals: 0, Gas: 0})

  return (
    <>
      <SegmentCustom heading={'Most Popular Units'}>
        <SectionHeading
          title={<>They account for a total of <MineralNumber value={totalCost.Minerals} /> minerals and <GasNumber value={totalCost.Gas} /> Gas</>}
        />
        <Divider section />
        <Grid
          // can be ignored since length of popularUnits will never be > 16
          // @ts-ignore
          columns={popularUnits.length}
          textAlign={'center'}
        >
          <Grid.Row>
            {popularUnits.map(unit => (
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