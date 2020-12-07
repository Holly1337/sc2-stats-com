import React, { useState } from 'react'
import { combatUpgradeIcons } from '../../../Common/Icons/Upgrades/combatUpgrades'
import UpgradeIcon from '../../../Common/Icons/UpgradeIcon'
import { Checkbox, Header } from 'semantic-ui-react'
import { SegmentCustom } from '../../../Segments/SegmentCustom'
import { countGamesPerRace } from '../../../../util/countGamesPerRace'
import { MatchupStats } from '../../../../../pages/types/stats'
import unitMetaData from '../../../../data/units-meta.json'

const upgradesCount = {
  "BansheeSpeed": 2,
  "RavenCorvidReactor": 4,
  "MedivacIncreaseSpeedBoost": 5,
  "TempestGroundAttackUpgrade": 7,
  "ProtossAirArmorsLevel3": 9,
  "ZergFlyerArmorsLevel3": 10,
  "PhoenixRangeUpgrade": 11,
  "TerranShipWeaponsLevel3": 13,
  "ProtossShieldsLevel3": 15,
  "ProtossAirArmorsLevel2": 16,
  "TerranVehicleWeaponsLevel3": 17,
  "ZergFlyerArmorsLevel2": 18,
  "NeuralParasite": 18,
  "PersonalCloaking": 20,
  "BattlecruiserEnableSpecializations": 21,
  "TerranVehicleAndShipArmorsLevel3": 21,
  "SmartServos": 22,
  "HiSecAutoTracking": 22,
  "ZergFlyerWeaponsLevel3": 23,
  "ProtossGroundArmorsLevel3": 23,
  "TunnelingClaws": 24,
  "TerranBuildingArmor": 25,
  "ProtossAirArmorsLevel1": 26,
  "ProtossAirWeaponsLevel3": 29,
  "CycloneLockOnDamageUpgrade": 31,
  "AnabolicSynthesis": 32,
  "InfestorEnergyUpgrade": 32,
  "LiberatorAGRangeUpgrade": 33,
  "VoidRaySpeedUpgrade": 34,
  "TerranShipWeaponsLevel2": 34,
  "HighCapacityBarrels": 36,
  "GraviticDrive": 38,
  "ProtossShieldsLevel2": 39,
  "TerranVehicleAndShipArmorsLevel2": 39,
  "BansheeCloak": 42,
  "ChitinousPlating": 45,
  "AdeptPiercingAttack": 45,
  "TerranVehicleWeaponsLevel2": 48,
  "ObserverGraviticBooster": 50,
  "EnhancedShockwaves": 51,
  "TerranShipWeaponsLevel1": 55,
  "ZergFlyerArmorsLevel1": 57,
  "ZergGroundArmorsLevel3": 59,
  "ZergMeleeWeaponsLevel3": 59,
  "ZergMissileWeaponsLevel3": 60,
  "ProtossGroundArmorsLevel2": 60,
  "ProtossAirWeaponsLevel2": 67,
  "DarkTemplarBlinkUpgrade": 72,
  "ZergFlyerWeaponsLevel2": 75,
  "LurkerRange": 78,
  "DiggingClaws": 80,
  "ProtossShieldsLevel1": 81,
  "DrillClaws": 83,
  "TerranInfantryArmorsLevel3": 84,
  "Burrow": 91,
  "TerranVehicleAndShipArmorsLevel1": 91,
  "zerglingattackspeed": 94,
  "TerranVehicleWeaponsLevel1": 104,
  "ProtossGroundArmorsLevel1": 106,
  "TerranInfantryWeaponsLevel3": 107,
  "PsiStormTech": 120,
  "ExtendedThermalLance": 123,
  "ProtossGroundWeaponsLevel3": 127,
  "ProtossAirWeaponsLevel1": 129,
  "EvolveMuscularAugments": 130,
  "EvolveGroovedSpines": 133,
  "ZergGroundArmorsLevel2": 144,
  "ZergFlyerWeaponsLevel1": 153,
  "ZergMissileWeaponsLevel2": 155,
  "ZergMeleeWeaponsLevel2": 160,
  "PunisherGrenades": 167,
  "TerranInfantryArmorsLevel2": 198,
  "TerranInfantryWeaponsLevel2": 207,
  "CentrificalHooks": 214,
  "GlialReconstitution": 230,
  "ProtossGroundWeaponsLevel2": 251,
  "ZergMeleeWeaponsLevel1": 253,
  "overlordspeed": 258,
  "ZergGroundArmorsLevel1": 261,
  "ZergMissileWeaponsLevel1": 262,
  "TerranInfantryArmorsLevel1": 300,
  "ShieldWall": 326,
  "TerranInfantryWeaponsLevel1": 332,
  "BlinkTech": 333,
  "Stimpack": 344,
  "Charge": 364,
  "ProtossGroundWeaponsLevel1": 373,
  "zerglingmovementspeed": 500,
  "WarpGateResearch": 585,
  "RewardDanceGhost": 1366,
  "RewardDanceColossus": 1383,
  "RewardDanceInfestor": 1388,
  "RewardDanceOracle": 1460,
  "RewardDanceStalker": 1509,
  "RewardDanceRoach": 1512,
  "RewardDanceOverlord": 1532,
  "RewardDanceViking": 1540,
  "RewardDanceMule": 1549,
  "GameHeartActive": 1590,
  "SprayTerran": 4122,
  "SprayProtoss": 5017,
  "SprayZerg": 5882
}

const matchups: MatchupStats = [
  {
    'race1': 'Prot',
    'race2': 'Zerg',
    'race1Wins': 99,
    'race2Wins': 100
  },
  {
    'race1': 'Terr',
    'race2': 'Zerg',
    'race1Wins': 86,
    'race2Wins': 98
  },
  {
    'race1': 'Prot',
    'race2': 'Terr',
    'race1Wins': 87,
    'race2Wins': 79
  },
  {
    'race1': 'Prot',
    'race2': 'Prot',
    'race1Wins': 126,
    'race2Wins': 0
  },
  {
    'race1': 'Zerg',
    'race2': 'Zerg',
    'race1Wins': 75,
    'race2Wins': 0
  },
  {
    'race1': 'Terr',
    'race2': 'Terr',
    'race1Wins': 49,
    'race2Wins': 0
  }
]

const CombatUpgradeAmountSection = () => {
  const [showPercentage, setShowPercentage] = useState<boolean>(false)

  const onToggleShowPercentage = () => {
    setShowPercentage(showPercentage => !showPercentage)
  }

  // TODO: add checkboxes to filter for each race
  const gamesPerRace = countGamesPerRace(matchups)
  const generalUpgrades = Object.entries(upgradesCount)
    .map(
      ([key, amount]) => {
        const race = unitMetaData[key] ? unitMetaData[key].Race.substr(0, 4) : 'Prot' // TODO: fix fallback
        const games = gamesPerRace[race]
        return {
          id: key,
          value: !showPercentage ? amount : amount / games,
          race,
          // @ts-ignore
          image: combatUpgradeIcons[key]
        }
      }
    )
    .filter(data => data.image !== undefined)
    .sort((a, b) => {
      if (a.value === b.value) return a.id.localeCompare(b.id)
      return b.value - a.value
    })

  const byRace = { Prot: [], Terr: [], Zerg: [] }
  generalUpgrades.forEach(upgrade => {
    byRace[upgrade.race].push(upgrade)
  })

  const protossUpgrades = byRace.Prot.map(data =>
    <UpgradeIcon key={data.id} {...data} showPercentage={showPercentage} gamesPerRace={gamesPerRace} />
  )

  const terranUpgrades = byRace.Terr.map(data =>
    <UpgradeIcon key={data.id} {...data} showPercentage={showPercentage} gamesPerRace={gamesPerRace} />
  )

  const zergUpgrades = byRace.Zerg.map(data =>
    <UpgradeIcon key={data.id} {...data} showPercentage={showPercentage} gamesPerRace={gamesPerRace} />
  )

  return (
    <>
      <SegmentCustom heading={'General Research'}>
        <div className={'d-flex justify-content-end'}>
          <Checkbox toggle label={'Show Percentage'} checked={showPercentage} onClick={onToggleShowPercentage} className={'mr-4'} />
        </div>
        <Header size={'large'} className={'ml-2'}>Protoss</Header>
        <div className={'d-flex flex-wrap mt-4'}>
          {protossUpgrades}
        </div>
        <Header size={'large'} className={'ml-2'}>Terran</Header>
        <div className={'d-flex flex-wrap mt-4'}>
          {terranUpgrades}
        </div>
        <Header size={'large'} className={'ml-2'}>Zerg</Header>
        <div className={'d-flex flex-wrap mt-4'}>
          {zergUpgrades}
        </div>
      </SegmentCustom>
    </>
  )
}

export default CombatUpgradeAmountSection
