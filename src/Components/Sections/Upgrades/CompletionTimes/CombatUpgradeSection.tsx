import React, { useState } from 'react'
import Timeline from '../../../Common/ReactVisJSTimeline/ReactVisJSTimeline'
import { createTimelineItem } from '../../../Common/ReactVisJSTimeline/TimelineItem'
import { timelineOptions } from '../../../Common/ReactVisJSTimeline/options'
import { Checkbox, Header } from 'semantic-ui-react'
import { SegmentCustom } from '../../../Segments/SegmentCustom'
import { combatUpgradeIcons } from '../../../Common/Icons/Upgrades/combatUpgrades'
import unitMetaData from '../../../../data/units-meta.json'

interface UpgradeData {
  id: number
  content: string
  start: number
  amount: number
}

const upgradeTimings = [
  {
    "id": 1,
    "content": "RewardDanceOverlord",
    "start": 0
  },
  {
    "id": 2,
    "content": "RewardDanceStalker",
    "start": 0
  },
  {
    "id": 3,
    "content": "RewardDanceGhost",
    "start": 0
  },
  {
    "id": 4,
    "content": "RewardDanceColossus",
    "start": 0
  },
  {
    "id": 5,
    "content": "RewardDanceRoach",
    "start": 0
  },
  {
    "id": 6,
    "content": "RewardDanceOracle",
    "start": 0
  },
  {
    "id": 7,
    "content": "RewardDanceMule",
    "start": 0
  },
  {
    "id": 8,
    "content": "RewardDanceViking",
    "start": 0
  },
  {
    "id": 9,
    "content": "RewardDanceInfestor",
    "start": 0
  },
  {
    "id": 10,
    "content": "GameHeartActive",
    "start": 0
  },
  {
    "id": 11,
    "content": "zerglingmovementspeed",
    "start": 233000
  },
  {
    "id": 12,
    "content": "WarpGateResearch",
    "start": 249000
  },
  {
    "id": 13,
    "content": "BansheeCloak",
    "start": 328000
  },
  {
    "id": 14,
    "content": "AdeptPiercingAttack",
    "start": 386000
  },
  {
    "id": 15,
    "content": "Stimpack",
    "start": 410000
  },
  {
    "id": 16,
    "content": "ShieldWall",
    "start": 476000
  },
  {
    "id": 17,
    "content": "TerranInfantryWeaponsLevel1",
    "start": 485000
  },
  {
    "id": 18,
    "content": "GlialReconstitution",
    "start": 489000
  },
  {
    "id": 19,
    "content": "BlinkTech",
    "start": 494000
  },
  {
    "id": 20,
    "content": "overlordspeed",
    "start": 516000
  },
  {
    "id": 21,
    "content": "CentrificalHooks",
    "start": 530000
  },
  {
    "id": 22,
    "content": "TerranInfantryArmorsLevel1",
    "start": 530000
  },
  {
    "id": 23,
    "content": "ProtossGroundWeaponsLevel1",
    "start": 532000
  },
  {
    "id": 24,
    "content": "BattlecruiserEnableSpecializations",
    "start": 532000
  },
  {
    "id": 25,
    "content": "Charge",
    "start": 538000
  },
  {
    "id": 26,
    "content": "ZergMeleeWeaponsLevel1",
    "start": 539000
  },
  {
    "id": 27,
    "content": "PunisherGrenades",
    "start": 547000
  },
  {
    "id": 28,
    "content": "ZergMissileWeaponsLevel1",
    "start": 553000
  },
  {
    "id": 29,
    "content": "ZergGroundArmorsLevel1",
    "start": 582000
  },
  {
    "id": 30,
    "content": "ExtendedThermalLance",
    "start": 583000
  },
  {
    "id": 31,
    "content": "EvolveMuscularAugments",
    "start": 588000
  },
  {
    "id": 32,
    "content": "HighCapacityBarrels",
    "start": 589000
  },
  {
    "id": 33,
    "content": "CycloneLockOnDamageUpgrade",
    "start": 594000
  },
  {
    "id": 34,
    "content": "EvolveGroovedSpines",
    "start": 596000
  },
  {
    "id": 35,
    "content": "DrillClaws",
    "start": 610000
  },
  {
    "id": 36,
    "content": "SprayTerran",
    "start": 623000
  },
  {
    "id": 37,
    "content": "BansheeSpeed",
    "start": 642000
  },
  {
    "id": 38,
    "content": "VoidRaySpeedUpgrade",
    "start": 652000
  },
  {
    "id": 39,
    "content": "ZergFlyerWeaponsLevel1",
    "start": 667000
  },
  {
    "id": 40,
    "content": "SprayProtoss",
    "start": 668000
  },
  {
    "id": 41,
    "content": "PsiStormTech",
    "start": 672000
  },
  {
    "id": 42,
    "content": "GraviticDrive",
    "start": 682000
  },
  {
    "id": 43,
    "content": "ProtossGroundArmorsLevel1",
    "start": 687000
  },
  {
    "id": 44,
    "content": "TerranInfantryWeaponsLevel2",
    "start": 689000
  },
  {
    "id": 45,
    "content": "TerranVehicleWeaponsLevel1",
    "start": 691000
  },
  {
    "id": 46,
    "content": "ProtossGroundWeaponsLevel2",
    "start": 694000
  },
  {
    "id": 47,
    "content": "ZergMeleeWeaponsLevel2",
    "start": 705000
  },
  {
    "id": 48,
    "content": "ProtossAirWeaponsLevel1",
    "start": 705000
  },
  {
    "id": 49,
    "content": "TerranInfantryArmorsLevel2",
    "start": 706000
  },
  {
    "id": 50,
    "content": "TerranVehicleAndShipArmorsLevel1",
    "start": 711000
  },
  {
    "id": 51,
    "content": "SprayZerg",
    "start": 711000
  },
  {
    "id": 52,
    "content": "ZergMissileWeaponsLevel2",
    "start": 715000
  },
  {
    "id": 53,
    "content": "TunnelingClaws",
    "start": 722000
  },
  {
    "id": 54,
    "content": "LurkerRange",
    "start": 728000
  },
  {
    "id": 55,
    "content": "ZergGroundArmorsLevel2",
    "start": 758000
  },
  {
    "id": 56,
    "content": "DiggingClaws",
    "start": 787000
  },
  {
    "id": 57,
    "content": "EnhancedShockwaves",
    "start": 787000
  },
  {
    "id": 58,
    "content": "SmartServos",
    "start": 791000
  },
  {
    "id": 59,
    "content": "PhoenixRangeUpgrade",
    "start": 792000
  },
  {
    "id": 60,
    "content": "Burrow",
    "start": 820000
  },
  {
    "id": 61,
    "content": "ProtossGroundArmorsLevel2",
    "start": 820000
  },
  {
    "id": 62,
    "content": "zerglingattackspeed",
    "start": 841000
  },
  {
    "id": 63,
    "content": "TerranShipWeaponsLevel1",
    "start": 859000
  },
  {
    "id": 64,
    "content": "TerranVehicleWeaponsLevel2",
    "start": 872000
  },
  {
    "id": 65,
    "content": "ProtossGroundWeaponsLevel3",
    "start": 874000
  },
  {
    "id": 66,
    "content": "TerranInfantryWeaponsLevel3",
    "start": 882000
  },
  {
    "id": 67,
    "content": "TerranVehicleAndShipArmorsLevel2",
    "start": 888000
  },
  {
    "id": 68,
    "content": "ZergFlyerWeaponsLevel2",
    "start": 890000
  },
  {
    "id": 69,
    "content": "DarkTemplarBlinkUpgrade",
    "start": 899000
  },
  {
    "id": 70,
    "content": "TerranInfantryArmorsLevel3",
    "start": 908000
  },
  {
    "id": 71,
    "content": "InfestorEnergyUpgrade",
    "start": 917000
  },
  {
    "id": 72,
    "content": "LiberatorAGRangeUpgrade",
    "start": 918000
  },
  {
    "id": 73,
    "content": "ProtossAirWeaponsLevel2",
    "start": 921000
  },
  {
    "id": 74,
    "content": "ZergFlyerArmorsLevel1",
    "start": 923000
  },
  {
    "id": 75,
    "content": "ObserverGraviticBooster",
    "start": 924000
  },
  {
    "id": 76,
    "content": "ChitinousPlating",
    "start": 927000
  },
  {
    "id": 77,
    "content": "ZergMissileWeaponsLevel3",
    "start": 942000
  },
  {
    "id": 78,
    "content": "ZergMeleeWeaponsLevel3",
    "start": 979000
  },
  {
    "id": 79,
    "content": "AnabolicSynthesis",
    "start": 979000
  },
  {
    "id": 80,
    "content": "ProtossShieldsLevel1",
    "start": 985000
  },
  {
    "id": 81,
    "content": "ZergGroundArmorsLevel3",
    "start": 994000
  },
  {
    "id": 82,
    "content": "ProtossGroundArmorsLevel3",
    "start": 1026000
  },
  {
    "id": 83,
    "content": "MedivacIncreaseSpeedBoost",
    "start": 1033000
  },
  {
    "id": 84,
    "content": "RavenCorvidReactor",
    "start": 1037000
  },
  {
    "id": 85,
    "content": "HiSecAutoTracking",
    "start": 1054000
  },
  {
    "id": 86,
    "content": "TerranShipWeaponsLevel2",
    "start": 1055000
  },
  {
    "id": 87,
    "content": "TerranVehicleWeaponsLevel3",
    "start": 1059000
  },
  {
    "id": 88,
    "content": "NeuralParasite",
    "start": 1065000
  },
  {
    "id": 89,
    "content": "PersonalCloaking",
    "start": 1067000
  },
  {
    "id": 90,
    "content": "TerranVehicleAndShipArmorsLevel3",
    "start": 1085000
  },
  {
    "id": 91,
    "content": "TerranBuildingArmor",
    "start": 1086000
  },
  {
    "id": 92,
    "content": "ProtossAirWeaponsLevel3",
    "start": 1090000
  },
  {
    "id": 93,
    "content": "ProtossAirArmorsLevel1",
    "start": 1108000
  },
  {
    "id": 94,
    "content": "ProtossShieldsLevel2",
    "start": 1124000
  },
  {
    "id": 95,
    "content": "ZergFlyerArmorsLevel2",
    "start": 1147000
  },
  {
    "id": 96,
    "content": "ZergFlyerWeaponsLevel3",
    "start": 1170000
  },
  {
    "id": 97,
    "content": "TerranShipWeaponsLevel3",
    "start": 1225000
  },
  {
    "id": 98,
    "content": "ProtossAirArmorsLevel2",
    "start": 1368000
  },
  {
    "id": 99,
    "content": "ProtossShieldsLevel3",
    "start": 1399000
  },
  {
    "id": 100,
    "content": "ZergFlyerArmorsLevel3",
    "start": 1457000
  },
  {
    "id": 101,
    "content": "TempestGroundAttackUpgrade",
    "start": 1517000
  },
  {
    "id": 102,
    "content": "ProtossAirArmorsLevel3",
    "start": 1542000
  }
]
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

const CombatUpgradeSection = () => {
  const [showProtoss, setShowProtoss] = useState(true)
  const [showTerran, setShowTerran] = useState(true)
  const [showZerg, setShowZerg] = useState(true)

  const racesToShow = [
    showProtoss ? 'Prot' : undefined,
    showTerran ? 'Terr' : undefined,
    showZerg ? 'Zerg' : undefined,
  ].filter(Boolean)

  const onToggleShowProtoss = () => {
    setShowProtoss(p => !p)
  }

  const onToggleShowTerran = () => {
    setShowTerran(p => !p)
  }

  const onToggleShowZerg = () => {
    setShowZerg(p => !p)
  }

  const upgrades: UpgradeData[] = (upgradeTimings as UpgradeData[])

  // @ts-ignore
  const timelineItems = upgrades.map(upgrade => ({
    id: upgrade.content,
    start: upgrade.start / 60,
    race: unitMetaData[upgrade.content] ? unitMetaData[upgrade.content].Race.substr(0, 4) : 'Prot', // TODO: fix fallback
    // @ts-ignore
    image: combatUpgradeIcons[upgrade.content],
    amount: upgradesCount[upgrade.content],
  })).filter(
    upgrade => upgrade.image !== undefined
  ).filter(
    upgrade => racesToShow.includes(upgrade.race)
  ).map(createTimelineItem)

  return (
    <>
      <SegmentCustom heading={'Mean Combat Upgrade Completion Times'}>
        <div className={'d-flex justify-content-end'}>
          <Checkbox toggle label={'Protoss'} checked={showProtoss} onClick={onToggleShowProtoss} className={'mr-4'} />
          <Checkbox toggle label={'Terran'} checked={showTerran} onClick={onToggleShowTerran} className={'mr-4'} />
          <Checkbox toggle label={'Zerg'} checked={showZerg} onClick={onToggleShowZerg} className={'mr-4'} />
        </div>
        <Timeline
          options={timelineOptions}
          items={timelineItems}
        />
      </SegmentCustom>
    </>
  )
}

export default CombatUpgradeSection
