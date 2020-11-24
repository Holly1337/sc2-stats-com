import React from 'react'

import itemsCost from '../../../data/units-cost.json'
import { buildTreemapData } from './util'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Divider, Header, Statistic } from 'semantic-ui-react'
import { SegmentCustom } from '../../Segments/SegmentCustom'
import MineralNumber from '../../Common/Numbers/MineralNumber'
import GasNumber from '../../Common/Numbers/GasNumber'

interface BarChartDataPoint {
  name: string
  ProtossMinerals: number
  ProtossGas: number
  TerranMinerals: number
  TerranGas: number
  ZergMinerals: number
  ZergGas: number
}

interface PreFormattedPoint {
  ProtossMinerals: number
  ProtossGas: number
  TerranMinerals: number
  TerranGas: number
  ZergMinerals: number
  ZergGas: number
}

const CandyBar = (props: any) => {
  const {
    x: oX,
    y: oY,
    width: oWidth,
    height: oHeight,
    value,
    fill
  } = props

  let x = oX;
  let y = oHeight < 0 ? oY + oHeight : oY
  let width = oWidth
  let height = Math.abs(oHeight)

  return (
    <rect
      fill={fill}
      mask='url(#mask-stripe)'
      x={x}
      y={y}
      width={width}
      height={height}
    />
  )
}

interface GamesPerRace {
  protoss: number
  terran: number
  zerg: number
}

type Matchups = {
  "ProtvTerr": number,
  "ZergvZerg": number,
  "TerrvZerg": number,
  "ProtvZerg": number,
  "ProtvProt": number,
  "TerrvTerr": number
}

const getGamesPerRace = (matchups: Matchups): GamesPerRace => ({
  protoss: (matchups.ProtvProt * 2) + matchups.ProtvTerr + matchups.ProtvZerg,
  terran: (matchups.TerrvTerr * 2) + matchups.ProtvTerr + matchups.TerrvZerg,
  zerg: (matchups.ZergvZerg * 2) + matchups.ProtvZerg + matchups.TerrvZerg
})

const data = {
  upgradesCount: {
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
  },
  matchups: {
    "ProtvTerr": 166,
    "ZergvZerg": 75,
    "TerrvZerg": 184,
    "ProtvZerg": 199,
    "ProtvProt": 126,
    "TerrvTerr": 49
  },
  resourcesSpent: {
    "Minerals": 34628100,
    "Gas": 8143125
  },
  unitsBuilt: {
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
    "CommandCenter": 2154,
    "SCV": 34399,
    "Nexus": 2677,
    "Probe": 42521,
    "Pylon": 10030,
    "SupplyDepot": 6832,
    "Gateway": 4755,
    "Barracks": 2458,
    "Refinery": 2706,
    "Assimilator": 3656,
    "CyberneticsCore": 702,
    "MULE": 6847,
    "Reaper": 557,
    "BarracksReactor": 1181,
    "Stalker": 13766,
    "Factory": 847,
    "KD8Charge": 890,
    "TwilightCouncil": 498,
    "BarracksTechLab": 879,
    "RoboticsFacility": 752,
    "Adept": 2616,
    "Marine": 40137,
    "Starport": 614,
    "DarkShrine": 211,
    "FactoryReactor": 320,
    "FactoryTechLab": 619,
    "WarpPrism": 545,
    "EngineeringBay": 728,
    "Bunker": 339,
    "Medivac": 3609,
    "DarkTemplar": 2245,
    "StarportReactor": 408,
    "MissileTurret": 1882,
    "SiegeTank": 3551,
    "Observer": 1423,
    "VikingFighter": 2267,
    "Archon": 1761,
    "RoboticsBay": 273,
    "Forge": 570,
    "ShieldBattery": 3170,
    "Sentry": 1843,
    "Zealot": 18599,
    "Colossus": 521,
    "Liberator": 1015,
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
    "Larva": 148872,
    "Drone": 53143,
    "Overlord": 11817,
    "Extractor": 3769,
    "SpawningPool": 554,
    "Zergling": 97028,
    "BanelingNest": 344,
    "Queen": 3835,
    "SpineCrawler": 936,
    "Baneling": 19349,
    "CreepTumorQueen": 6177,
    "RoachWarren": 353,
    "CreepTumor": 12372,
    "EvolutionChamber": 893,
    "Roach": 14639,
    "Broodling": 9505,
    "ProtossVespeneGeyser": 6812,
    "DestructibleRockEx14x4": 364,
    "KarakMale": 364,
    "KarakFemale": 364,
    "Hellion": 3336,
    "StarportTechLab": 210,
    "SporeCrawler": 2620,
    "InfestationPit": 269,
    "UltraliskCavern": 66,
    "Spire": 338,
    "ExtractorRich": 206,
    "Ultralisk": 464,
    "RefineryRich": 82,
    "Corruptor": 2628,
    "WidowMine": 2794,
    "GhostAcademy": 111,
    "Ghost": 758,
    "Changeling": 3147,
    "ChangelingMarineShield": 578,
    "HydraliskDen": 173,
    "Hydralisk": 8765,
    "LurkerDenMP": 116,
    "InvisibleTargetDummy": 263416,
    "SensorTower": 411,
    "Mutalisk": 4433,
    "Infestor": 300,
    "DestructibleRockEx1DiagonalHugeULBR": 226,
    "NydusNetwork": 52,
    "NydusCanal": 285,
    "LoadOutSpray@1": 179,
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
    "Mothership": 92,
    "OracleStasisTrap": 490,
    "Tempest": 252,
    "SwarmHostMP": 315,
    "LocustMP": 2806,
    "LocustMPPrecursor": 2493,
    "FusionCore": 89,
    "ChangelingMarine": 155,
    "Battlecruiser": 136,
    "Thor": 425,
    "Raven": 266,
    "AutoTurret": 466,
    "Cyclone": 702,
    "PurifierRichMineralField": 276,
    "MineralField450": 1472,
    "PurifierRichMineralField750": 276,
    "CarrionBird": 276,
    "DestructibleRockEx1VerticalHuge": 46,
    "UnbuildableRocksDestructible": 148,
    "Banshee": 124,
    "HellionTank": 18,
    "SpacePlatformGeyser": 448,
    "BroodlingEscort": 2563,
    "Nuke": 49,
    "LoadOutSpray@14": 1,
    "GhostAlternate": 7
  },
}

export const ResourcesSpentGraphSection: React.FC = () => {
  const gamesPerRace = getGamesPerRace(data.matchups)
  const upgradesCounts: { [key: string]: number } = data.upgradesCount
  const spent: { Minerals: number, Gas: number } = { ...data.resourcesSpent }
  const treemapData = buildTreemapData(data.unitsBuilt, data.upgradesCount)
  const raceData: {[id: string]: number} = {
    ProtossMinerals: 0,
    ProtossGas: 0,
    TerranMinerals: 0,
    TerranGas: 0,
    ZergMinerals: 0,
    ZergGas: 0
  }

  const preData: any = {}

  treemapData.forEach(data => {
    const name = data.Type
    preData[name] = {
      ...preData[name],
      [`${data.Race}Minerals`]: data.Minerals,
      [`${data.Race}Gas`]: data.Gas
    }
    // add to global race data
    raceData[`${data.Race}Minerals`] += data.Minerals
    raceData[`${data.Race}Gas`] += data.Gas
  })

  // @ts-ignore
  const chartData = Object.entries(preData).map(([name, data]) => ({ name, ...data }))
  chartData.unshift({ name: 'Total', ...raceData })
  chartData.forEach(data => {
    data.ProtossMinerals = Math.ceil(data.ProtossMinerals / gamesPerRace.protoss)
    data.ProtossGas = Math.ceil(data.ProtossGas / gamesPerRace.protoss)
    data.TerranMinerals = Math.ceil(data.TerranMinerals / gamesPerRace.terran)
    data.TerranGas = Math.ceil(data.TerranGas / gamesPerRace.terran)
    data.ZergMinerals = Math.ceil(data.ZergMinerals / gamesPerRace.zerg)
    data.ZergGas = Math.ceil(data.ZergGas / gamesPerRace.zerg)
  })

  Object.entries(upgradesCounts).forEach(
    ([name, amount]) => {
      // @ts-ignore
      const upgradeData = itemsCost[name]
      if (upgradeData === undefined) {
        return
      }
      spent.Minerals += upgradeData.Minerals * amount
      spent.Gas += upgradeData.Gas * amount
    }
  )

  return (
    <>
      <Header size={'huge'}>Average Resources spent per game</Header>
      <SegmentCustom>
        <Statistic.Group widths='two' className={'mt-4'}>
          <Statistic>
            <Statistic.Value><MineralNumber value={spent.Minerals} /></Statistic.Value>
            <Statistic.Label><Header size={'large'}>Total Minerals</Header></Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value><GasNumber value={spent.Gas} /></Statistic.Value>
            <Statistic.Label><Header size={'large'}>Total Gas</Header></Statistic.Label>
          </Statistic>
        </Statistic.Group>
        <Divider section />
        <ResponsiveContainer height={460}>
          <BarChart
            data={chartData}
            margin={{
              top: 0, right: 20, left: 0, bottom: 0
            }}
          >
            <pattern
              id="pattern-stripe"
              width="8" height="8"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <rect width="4" height="8" transform="translate(0,0)" fill="white"></rect>
            </pattern>
            <mask id="mask-stripe">
              <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe)" />
            </mask>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tickLine={false} />
            <Legend
              iconSize={36}
              iconType='square'
              payload={[
                { value: 'Protoss', type: 'square', id: 'Protoss', color: 'orange' },
                { value: 'Terran', type: 'square', id: 'Terran', color: '#b00' },
                { value: 'Zerg', type: 'square', id: 'Zerg', color: '#8884d8' }
              ]}
              verticalAlign={'top'}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                borderRadius: 10,
                borderColor: '#a6a6a6'
              }}
              cursor={{ fill: '#eee' }}
            />
            <Bar dataKey="ProtossMinerals" fill="orange" stackId={'Protoss'} />
            <Bar dataKey="ProtossGas" fill="orange" shape={CandyBar} stackId={'Protoss'} />
            <Bar dataKey="TerranMinerals" fill="#a00" stackId={'Terran'} />
            <Bar dataKey="TerranGas" fill="#a00" shape={CandyBar} stackId={'Terran'} />
            <Bar dataKey="ZergMinerals" fill="#8884d8" stackId={'Zerg'} />
            <Bar dataKey="ZergGas" fill="#8884d8" shape={CandyBar} stackId={'Zerg'} />
          </BarChart>
        </ResponsiveContainer>
      </SegmentCustom>
    </>
  )
}
