import React, { useState } from 'react'
import { SegmentCustom } from '../../../Segments/SegmentCustom'
import { UnitCount } from './UnitCount'
import unitsMeta from '../../../../data/units-meta.json'
import { Checkbox, Header } from 'semantic-ui-react'
import { groupUnits } from './utils/groupUnits'
import { MatchupStats } from '../../../../../pages/types/stats'
import { countMatchupsPerRace } from '../../../../util/countMatchupsPerRace'
import { roundTwoDecimals } from '../../../../util/round'

const unitsBuiltStatic = {
  "LabMineralField": 7104,
  "LabMineralField750": 7104,
  "MineralField": 26208,
  "PurifierVespeneGeyser": 2880,
  "UnbuildablePlatesDestructible": 884,
  "MineralField750": 26208,
  "Ursadon": 240,
  "DestructibleRockEx16x6": 3086,
  "VespeneGeyser": 8484,
  "XelNagaTower": 604,
  "DestructibleRockEx1DiagonalHugeBLUR": 120,
  "BeaconArmy": 1598,
  "BeaconDefend": 1598,
  "BeaconAttack": 1598,
  "BeaconHarass": 1598,
  "BeaconIdle": 1598,
  "BeaconAuto": 1598,
  "BeaconDetect": 1598,
  "BeaconScout": 1598,
  "BeaconClaim": 1598,
  "BeaconExpand": 1598,
  "BeaconRally": 1598,
  "BeaconCustom1": 1598,
  "BeaconCustom2": 1598,
  "BeaconCustom3": 1598,
  "BeaconCustom4": 1598,
  "CommandCenter": 2650,
  "SCV": 34399,
  "Nexus": 2677,
  "Probe": 42521,
  "Pylon": 10030,
  "SupplyDepot": 7946,
  "Gateway": 4756,
  "Barracks": 3469,
  "Refinery": 2706,
  "Assimilator": 3656,
  "CyberneticsCore": 702,
  "OrbitalCommand": 2067,
  "MULE": 6847,
  "Reaper": 557,
  "BarracksReactor": 1539,
  "Stalker": 13766,
  "Factory": 1697,
  "KD8Charge": 890,
  "SupplyDepotLowered": 4231,
  "TwilightCouncil": 498,
  "BarracksTechLab": 1156,
  "RoboticsFacility": 752,
  "Adept": 2616,
  "Marine": 40137,
  "Starport": 1186,
  "DarkShrine": 211,
  "FactoryReactor": 572,
  "WarpGate": 4499,
  "StarportFlying": 581,
  "FactoryFlying": 866,
  "Reactor": 824,
  "StarportReactor": 556,
  "FactoryTechLab": 789,
  "WarpPrism": 1626,
  "EngineeringBay": 728,
  "Bunker": 339,
  "Medivac": 3609,
  "WarpPrismPhasing": 1264,
  "DarkTemplar": 2245,
  "MissileTurret": 1882,
  "SiegeTank": 8729,
  "BarracksFlying": 1056,
  "Observer": 2098,
  "VikingFighter": 2742,
  "Archon": 1761,
  "ObserverSiegeMode": 1103,
  "RoboticsBay": 273,
  "Forge": 570,
  "VikingAssault": 799,
  "ShieldBattery": 3170,
  "Sentry": 1843,
  "Zealot": 18599,
  "Colossus": 521,
  "Liberator": 2260,
  "SiegeTankSieged": 7835,
  "LiberatorAG": 1942,
  "OrbitalCommandFlying": 734,
  "ForceField": 2365,
  "Armory": 413,
  "Marauder": 7017,
  "PurifierMineralField": 14984,
  "UnbuildableBricksDestructible": 566,
  "PurifierMineralField750": 14984,
  "ShakurasVespeneGeyser": 2920,
  "RichVespeneGeyser": 1628,
  "Phoenix": 2038,
  "Stargate": 736,
  "AdeptPhaseShift": 7636,
  "PhotonCannon": 3208,
  "TemplarArchive": 272,
  "HighTemplar": 4221,
  "Immortal": 1165,
  "Hatchery": 3149,
  "Larva": 287750,
  "Drone": 53260,
  "Overlord": 11851,
  "Egg": 142220,
  "Extractor": 3769,
  "SpawningPool": 554,
  "Zergling": 116881,
  "BanelingNest": 344,
  "Queen": 3841,
  "SpineCrawler": 1228,
  "BanelingCocoon": 19980,
  "Baneling": 19407,
  "SpineCrawlerUprooted": 307,
  "CreepTumorQueen": 6177,
  "CreepTumorBurrowed": 17552,
  "RoachWarren": 353,
  "CreepTumor": 12372,
  "EvolutionChamber": 893,
  "Roach": 15437,
  "RavagerCocoon": 2358,
  "Lair": 482,
  "Ravager": 2292,
  "Broodling": 9505,
  "ProtossVespeneGeyser": 6812,
  "DestructibleRockEx14x4": 364,
  "KarakMale": 364,
  "KarakFemale": 364,
  "Hellion": 3543,
  "StarportTechLab": 332,
  "SporeCrawler": 4320,
  "HellionTank": 1211,
  "TechLab": 654,
  "InfestationPit": 269,
  "Hive": 216,
  "UltraliskCavern": 66,
  "CommandCenterFlying": 550,
  "Spire": 338,
  "ExtractorRich": 206,
  "PlanetaryFortress": 350,
  "Ultralisk": 465,
  "RefineryRich": 82,
  "Corruptor": 2628,
  "WidowMine": 4628,
  "WidowMineBurrowed": 4052,
  "GhostAcademy": 111,
  "OverlordCocoon": 1606,
  "Overseer": 1756,
  "Ghost": 758,
  "Changeling": 3147,
  "ChangelingMarineShield": 578,
  "SporeCrawlerUprooted": 1769,
  "HydraliskDen": 173,
  "Hydralisk": 8849,
  "LurkerDenMP": 116,
  "LurkerMPEgg": 2090,
  "LurkerMP": 9876,
  "LurkerMPBurrowed": 9415,
  "InvisibleTargetDummy": 263416,
  "SensorTower": 411,
  "Mutalisk": 4433,
  "RoachBurrowed": 922,
  "Infestor": 439,
  "InfestorBurrowed": 203,
  "DestructibleRockEx1DiagonalHugeULBR": 226,
  "NydusNetwork": 52,
  "NydusCanal": 285,
  "LoadOutSpray@1": 179,
  "OverseerSiegeMode": 360,
  "ChangelingZergling": 51,
  "ChangelingZerglingWings": 323,
  "AccelerationZoneSmall": 420,
  "DestructibleRampDiagonalHugeBLUR": 280,
  "VoidRay": 1305,
  "FleetBeacon": 149,
  "Carrier": 832,
  "Interceptor": 9878,
  "Viper": 540,
  "ChangelingZealot": 1711,
  "Disruptor": 1796,
  "DisruptorPhased": 3632,
  "ParasiticBombRelayDummy": 137,
  "ParasiticBombDummy": 127,
  "Oracle": 491,
  "AssimilatorRich": 143,
  "TransportOverlordCocoon": 164,
  "OverlordTransport": 158,
  "Mothership": 92,
  "OracleStasisTrap": 490,
  "Tempest": 252,
  "SwarmHostMP": 315,
  "LocustMP": 5197,
  "LocustMPFlying": 2806,
  "LocustMPPrecursor": 2493,
  "FusionCore": 89,
  "ChangelingMarine": 155,
  "Battlecruiser": 136,
  "Thor": 438,
  "Raven": 266,
  "AutoTurret": 466,
  "Cyclone": 702,
  "ThorAP": 186,
  "PurifierRichMineralField": 276,
  "MineralField450": 1472,
  "PurifierRichMineralField750": 276,
  "CarrionBird": 276,
  "DestructibleRockEx1VerticalHuge": 46,
  "UnbuildableRocksDestructible": 148,
  "ZerglingBurrowed": 523,
  "Banshee": 124,
  "SpacePlatformGeyser": 448,
  "BanelingBurrowed": 180,
  "GreaterSpire": 29,
  "DroneBurrowed": 177,
  "BroodLordCocoon": 125,
  "BroodLord": 125,
  "BroodlingEscort": 2563,
  "HydraliskBurrowed": 46,
  "Nuke": 49,
  "QueenBurrowed": 8,
  "SwarmHostBurrowedMP": 18,
  "LoadOutSpray@14": 1,
  "UltraliskBurrowed": 2,
  "GhostAlternate": 7
}
const matchups: MatchupStats = [
  {
    "race1": "Prot",
    "race2": "Zerg",
    "race1Wins": 99,
    "race2Wins": 100
  },
  {
    "race1": "Terr",
    "race2": "Zerg",
    "race1Wins": 86,
    "race2Wins": 98
  },
  {
    "race1": "Prot",
    "race2": "Terr",
    "race1Wins": 87,
    "race2Wins": 79
  },
  {
    "race1": "Prot",
    "race2": "Prot",
    "race1Wins": 126,
    "race2Wins": 0
  },
  {
    "race1": "Zerg",
    "race2": "Zerg",
    "race1Wins": 75,
    "race2Wins": 0
  },
  {
    "race1": "Terr",
    "race2": "Terr",
    "race1Wins": 49,
    "race2Wins": 0
  }
]

export const UnitsCountSection = (props) => {
  const [showAveragePerGame, setShowAveragePerGame] = useState<boolean>(true)
  const unitsBuilt = groupUnits({ ...unitsBuiltStatic })

  const onToggleShowAverage = () => {
    setShowAveragePerGame(showAverage => !showAverage)
  }

  const unitsSorted = Object.entries(unitsBuilt).sort(([unitId1, count1], [unitId2, count2]) => count2 - count1)
  const byRace = { Protoss: [], Terran: [], Zerg: [] }

  const totalGamesPerRace = showAveragePerGame
    ? countMatchupsPerRace(matchups)
    : { Prot: 1, Terr: 1, Zerg: 1, Rand: 1}

  unitsSorted.forEach(([unitId, count]) => {
    const unitMeta = unitsMeta[unitId]
    if (unitMeta === undefined) {
      return
    }
    const countToShow = roundTwoDecimals(
      count / totalGamesPerRace[unitMeta.Race.substr(0, 4)]
    )
    byRace[unitMeta.Race].push([unitId, countToShow])
  })

  // Add options to filter
  // by matchup
  // game length
  return (
    <SegmentCustom heading={'Units Trained'}>
      <div className={'d-flex justify-content-end'}>
        <Checkbox toggle label={'Show Average Per Game'} checked={showAveragePerGame} onClick={onToggleShowAverage} className={'mr-4'} />
      </div>
      <Header size={'large'} className={'ml-4'}>Protoss</Header>
      <div className={'d-flex flex-wrap mt-4'}>
        {byRace.Protoss.map(([unitId, count]) => (
          <UnitCount key={unitId} id={unitId} name={unitId} count={count} type={'unit'} />
        ))}
      </div>
      <Header size={'large'} className={'ml-4'}>Terran</Header>
      <div className={'d-flex flex-wrap mt-4'}>
        {byRace.Terran.map(([unitId, count]) => (
          <UnitCount key={unitId} id={unitId} name={unitId} count={count} type={'unit'} />
        ))}
      </div>
      <Header size={'large'} className={'ml-4'}>Zerg</Header>
      <div className={'d-flex flex-wrap mt-4'}>
        {byRace.Zerg.map(([unitId, count]) => (
          <UnitCount key={unitId} id={unitId} name={unitId} count={count} type={'unit'} />
        ))}
      </div>
    </SegmentCustom>
  )
}
