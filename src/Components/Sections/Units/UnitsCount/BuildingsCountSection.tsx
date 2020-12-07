import React, { useState } from 'react'
import { SegmentCustom } from '../../../Segments/SegmentCustom'
import { UnitCount } from './UnitCount'
import unitsMeta from '../../../../data/units-meta.json'
import { Checkbox, Header } from 'semantic-ui-react'

const unitsBuilt = {
  'LabMineralField': 7104,
  'LabMineralField750': 7104,
  'MineralField': 26208,
  'PurifierVespeneGeyser': 2880,
  'UnbuildablePlatesDestructible': 884,
  'MineralField750': 26208,
  'Ursadon': 240,
  'DestructibleRockEx16x6': 3086,
  'VespeneGeyser': 8484,
  'XelNagaTower': 604,
  'DestructibleRockEx1DiagonalHugeBLUR': 120,
  'BeaconArmy': 1598,
  'BeaconDefend': 1598,
  'BeaconAttack': 1598,
  'BeaconHarass': 1598,
  'BeaconIdle': 1598,
  'BeaconAuto': 1598,
  'BeaconDetect': 1598,
  'BeaconScout': 1598,
  'BeaconClaim': 1598,
  'BeaconExpand': 1598,
  'BeaconRally': 1598,
  'BeaconCustom1': 1598,
  'BeaconCustom2': 1598,
  'BeaconCustom3': 1598,
  'BeaconCustom4': 1598,
  'CommandCenter': 2154,
  'SCV': 34399,
  'Nexus': 2677,
  'Probe': 42521,
  'Pylon': 10030,
  'SupplyDepot': 6832,
  'Gateway': 4755,
  'Barracks': 2458,
  'Refinery': 2706,
  'Assimilator': 3656,
  'CyberneticsCore': 702,
  'MULE': 6847,
  'Reaper': 557,
  'BarracksReactor': 1181,
  'Stalker': 13766,
  'Factory': 847,
  'KD8Charge': 890,
  'TwilightCouncil': 498,
  'BarracksTechLab': 879,
  'RoboticsFacility': 752,
  'Adept': 2616,
  'Marine': 40137,
  'Starport': 614,
  'DarkShrine': 211,
  'FactoryReactor': 320,
  'FactoryTechLab': 619,
  'WarpPrism': 545,
  'EngineeringBay': 728,
  'Bunker': 339,
  'Medivac': 3609,
  'DarkTemplar': 2245,
  'StarportReactor': 408,
  'MissileTurret': 1882,
  'SiegeTank': 3551,
  'Observer': 1423,
  'VikingFighter': 2267,
  'Archon': 1761,
  'RoboticsBay': 273,
  'Forge': 570,
  'ShieldBattery': 3170,
  'Sentry': 1843,
  'Zealot': 18599,
  'Colossus': 521,
  'Liberator': 1015,
  'ForceField': 2365,
  'Armory': 413,
  'Marauder': 7017,
  'PurifierMineralField': 14984,
  'UnbuildableBricksDestructible': 566,
  'PurifierMineralField750': 14984,
  'ShakurasVespeneGeyser': 2920,
  'RichVespeneGeyser': 1628,
  'Phoenix': 2038,
  'Stargate': 736,
  'AdeptPhaseShift': 7636,
  'PhotonCannon': 3208,
  'TemplarArchive': 272,
  'HighTemplar': 4221,
  'Immortal': 1165,
  'Hatchery': 3149,
  'Larva': 148872,
  'Drone': 53143,
  'Overlord': 11817,
  'Extractor': 3769,
  'SpawningPool': 554,
  'Zergling': 97028,
  'BanelingNest': 344,
  'Queen': 3835,
  'SpineCrawler': 936,
  'Baneling': 19349,
  'CreepTumorQueen': 6177,
  'RoachWarren': 353,
  'CreepTumor': 12372,
  'EvolutionChamber': 893,
  'Roach': 14639,
  'Broodling': 9505,
  'ProtossVespeneGeyser': 6812,
  'DestructibleRockEx14x4': 364,
  'KarakMale': 364,
  'KarakFemale': 364,
  'Hellion': 3336,
  'StarportTechLab': 210,
  'SporeCrawler': 2620,
  'InfestationPit': 269,
  'UltraliskCavern': 66,
  'Spire': 338,
  'ExtractorRich': 206,
  'Ultralisk': 464,
  'RefineryRich': 82,
  'Corruptor': 2628,
  'WidowMine': 2794,
  'GhostAcademy': 111,
  'Ghost': 758,
  'Changeling': 3147,
  'ChangelingMarineShield': 578,
  'HydraliskDen': 173,
  'Hydralisk': 8765,
  'LurkerDenMP': 116,
  'InvisibleTargetDummy': 263416,
  'SensorTower': 411,
  'Mutalisk': 4433,
  'Infestor': 300,
  'DestructibleRockEx1DiagonalHugeULBR': 226,
  'NydusNetwork': 52,
  'NydusCanal': 285,
  'LoadOutSpray@1': 179,
  'ChangelingZergling': 51,
  'ChangelingZerglingWings': 323,
  'AccelerationZoneSmall': 420,
  'DestructibleRampDiagonalHugeBLUR': 280,
  'VoidRay': 1305,
  'FleetBeacon': 149,
  'Carrier': 832,
  'Interceptor': 9878,
  'Viper': 540,
  'ChangelingZealot': 1711,
  'Disruptor': 1796,
  'DisruptorPhased': 3632,
  'ParasiticBombRelayDummy': 137,
  'ParasiticBombDummy': 127,
  'Oracle': 491,
  'AssimilatorRich': 143,
  'Mothership': 92,
  'OracleStasisTrap': 490,
  'Tempest': 252,
  'SwarmHostMP': 315,
  'LocustMP': 2806,
  'LocustMPPrecursor': 2493,
  'FusionCore': 89,
  'ChangelingMarine': 155,
  'Battlecruiser': 136,
  'Thor': 425,
  'Raven': 266,
  'AutoTurret': 466,
  'Cyclone': 702,
  'PurifierRichMineralField': 276,
  'MineralField450': 1472,
  'PurifierRichMineralField750': 276,
  'CarrionBird': 276,
  'DestructibleRockEx1VerticalHuge': 46,
  'UnbuildableRocksDestructible': 148,
  'Banshee': 124,
  'HellionTank': 18,
  'SpacePlatformGeyser': 448,
  'BroodlingEscort': 2563,
  'Nuke': 49,
  'LoadOutSpray@14': 1,
  'GhostAlternate': 7
}

export const BuildingsCountSection = (props) => {
  const [groupByRace, setGroupByRace] = useState<boolean>(true)

  const onToggleGroupByRace = () => {
    setGroupByRace(g => !g)
  }

  const unitsSorted = Object.entries(unitsBuilt).sort(([unitId1, count1], [unitId2, count2]) => count2 - count1)
  const byRace = { Protoss: [], Terran: [], Zerg: [] }

  unitsSorted.forEach(([unitId, count]) => {
    const unitMeta = unitsMeta[unitId]
    if (unitMeta === undefined) {
      return
    }
    byRace[unitMeta.Race].push([unitId, count])
  })
  // Add options to filter
  // by matchup
  // game length
  return (
    <SegmentCustom heading={'Buildings Constructed'}>
      <div className={'d-flex justify-content-end'}>
        <Checkbox toggle label={'Group by race'} checked={groupByRace} onClick={onToggleGroupByRace} />
      </div>
      {!groupByRace && (
        <div className={'d-flex flex-wrap'}>
          {Object.entries(unitsBuilt)
            .sort(([key1, value1], [key2, value2]) => value2 - value1)
            .map(([unitId, count]) => (
              <UnitCount key={unitId} id={unitId} name={unitId} count={count} type={'building'} />
            ))}
        </div>
      )}
      {groupByRace && (
        <>
          <Header size={'large'} className={'ml-4'}>Protoss</Header>
          <div className={'d-flex flex-wrap mt-4'}>
            {byRace.Protoss.map(([unitId, count]) => (
              <UnitCount key={unitId} id={unitId} name={unitId} count={count} type={'building'} />
            ))}
          </div>
          <Header size={'large'} className={'ml-4'}>Terran</Header>
          <div className={'d-flex flex-wrap mt-4'}>
            {byRace.Terran.map(([unitId, count]) => (
              <UnitCount key={unitId} id={unitId} name={unitId} count={count} type={'building'} />
            ))}
          </div>
          <Header size={'large'} className={'ml-4'}>Zerg</Header>
          <div className={'d-flex flex-wrap mt-4'}>
            {byRace.Zerg.map(([unitId, count]) => (
              <UnitCount key={unitId} id={unitId} name={unitId} count={count} type={'building'} />
            ))}
          </div>
        </>
      )}
    </SegmentCustom>
  )
}
