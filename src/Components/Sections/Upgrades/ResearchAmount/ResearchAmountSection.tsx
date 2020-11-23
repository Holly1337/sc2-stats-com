import React, { useContext } from 'react'
import { generalUpgradeIcons } from '../../../Common/Icons/Upgrades/generalUpgrades'
import { combatUpgradeIcons } from '../../../Common/Icons/Upgrades/combatUpgrades'
import UpgradeIcon from '../../../Common/Icons/UpgradeIcon'
import { Grid, Header } from 'semantic-ui-react'
import { SegmentCustom } from '../../../Segments/SegmentCustom'

interface UpgradeData {
  id: number
  content: string
  start: number
  amount: number
}

const ResearchAmountSection = () => {
  // TODO: add toggle/hover between total amount and percentage
  return (
    <>
      <Header size={'huge'}>Research Stats</Header>
      <SegmentCustom>
        <Grid columns={2} divided={'vertically'} stackable={true}>
          <Grid.Row>
            <Grid.Column>
              <Header size={'large'} textAlign={'center'} className={'mt-4'}>Combat Upgrades</Header>
            </Grid.Column>
            <Grid.Column>
              <Header size={'large'} textAlign={'center'} className={'mt-4'}>General Research</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <div className='d-flex flex-wrap justify-content-center'>
                <UpgradeIcon id={'Protoss Air Armor'} amount={10} image={combatUpgradeIcons.ProtossAirArmorsLevel1} />
                <UpgradeIcon id={'Protoss Air Armor'} amount={10} image={combatUpgradeIcons.ProtossAirArmorsLevel1} />
                <UpgradeIcon id={'Protoss Air Armor'} amount={10} image={combatUpgradeIcons.ProtossAirArmorsLevel1} />
                <UpgradeIcon id={'Protoss Air Armor'} amount={10} image={combatUpgradeIcons.ProtossAirArmorsLevel1} />
                <UpgradeIcon id={'Protoss Air Armor'} amount={10} image={combatUpgradeIcons.ProtossAirArmorsLevel1} />
                <UpgradeIcon id={'Protoss Air Armor'} amount={10} image={combatUpgradeIcons.ProtossAirArmorsLevel1} />
                <UpgradeIcon id={'Protoss Air Armor'} amount={10} image={combatUpgradeIcons.ProtossAirArmorsLevel1} />
                <UpgradeIcon id={'Protoss Air Armor'} amount={10} image={combatUpgradeIcons.ProtossAirArmorsLevel1} />
                <UpgradeIcon id={'Protoss Air Armor'} amount={10} image={combatUpgradeIcons.ProtossAirArmorsLevel2} />
                <UpgradeIcon id={'Protoss Air Armor'} amount={10} image={combatUpgradeIcons.ProtossAirArmorsLevel2} />
                <UpgradeIcon id={'Protoss Air Armor'} amount={10} image={combatUpgradeIcons.ProtossAirArmorsLevel2} />
                <UpgradeIcon id={'Protoss Air Armor'} amount={10} image={combatUpgradeIcons.ProtossAirArmorsLevel3} />
                <UpgradeIcon id={'Protoss Air Armor'} amount={10} image={combatUpgradeIcons.ProtossAirArmorsLevel2} />
                <UpgradeIcon id={'Protoss Air Armor'} amount={10} image={combatUpgradeIcons.ProtossAirArmorsLevel2} />
                <UpgradeIcon id={'Protoss Air Armor'} amount={10} image={combatUpgradeIcons.ProtossAirArmorsLevel2} />
                <UpgradeIcon id={'Protoss Air Armor'} amount={10} image={combatUpgradeIcons.ProtossAirArmorsLevel2} />
                <UpgradeIcon id={'Protoss Air Armor'} amount={10} image={combatUpgradeIcons.ProtossAirArmorsLevel2} />
                <UpgradeIcon id={'Protoss Air Armor'} amount={10} image={combatUpgradeIcons.ProtossAirArmorsLevel2} />
                <UpgradeIcon id={'Protoss Air Armor'} amount={10} image={combatUpgradeIcons.ProtossAirArmorsLevel2} />
                <UpgradeIcon id={'Protoss Air Armor'} amount={10} image={combatUpgradeIcons.ProtossAirArmorsLevel2} />
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className='d-flex flex-wrap justify-content-center'>
                <UpgradeIcon id={'Protoss Air Armor'} amount={10} image={generalUpgradeIcons.BlinkTech} />
                <UpgradeIcon id={'Protoss Air Armor'} amount={10} image={generalUpgradeIcons.BlinkTech} />
                <UpgradeIcon id={'Protoss Air Armor'} amount={10} image={generalUpgradeIcons.BlinkTech} />
                <UpgradeIcon id={'Protoss Air Armor'} amount={10} image={generalUpgradeIcons.BlinkTech} />
                <UpgradeIcon id={'Protoss Air Armor'} amount={10} image={generalUpgradeIcons.BlinkTech} />
                <UpgradeIcon id={'Protoss Air Armor'} amount={10} image={generalUpgradeIcons.BlinkTech} />
                <UpgradeIcon id={'Protoss Air Armor'} amount={10} image={generalUpgradeIcons.BlinkTech} />
                <UpgradeIcon id={'Protoss Air Armor'} amount={10} image={generalUpgradeIcons.BlinkTech} />
                <UpgradeIcon id={'Protoss Air Armor'} amount={10} image={generalUpgradeIcons.BlinkTech} />
                <UpgradeIcon id={'Protoss Air Armor'} amount={10} image={generalUpgradeIcons.BlinkTech} />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </SegmentCustom>
    </>
  )
}

export default ResearchAmountSection
