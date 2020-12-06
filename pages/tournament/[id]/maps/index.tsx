import { TournamentPageWrapper } from '../../../../src/Components/Layout/TournamentPageWrapper'
import { Breadcrumb } from 'semantic-ui-react'
import MapsPlayedSectionHorizontal from '../../../../src/Components/Sections/Maps/MapsPlayed'
import { MapsMatchupSection } from '../../../../src/Components/Sections/Maps/MapsDetail/MapsMatchupSection/MapsMatchupSection'
import Link from 'next/link'
import { MatchupLengthSection } from '../../../../src/Components/Sections/Maps/MapsDetail/MatchupLength/MatchupLengthSection'

const data = {
  "matchups": {
    "ProtvTerr": 166,
    "ZergvZerg": 75,
    "TerrvZerg": 184,
    "ProtvZerg": 199,
    "ProtvProt": 126,
    "TerrvTerr": 49
  },
  "perMatchupDuration": {
    "ProtvTerr": 169452,
    "ZergvZerg": 64899,
    "TerrvZerg": 208359,
    "ProtvZerg": 241899,
    "ProtvProt": 131803,
    "TerrvTerr": 58472
  },
  "perMap": {
    "Ice and Chrome LE": {
      "ProtvTerr": {
        "games": 24,
        "time": 23648,
        "Prot": 10,
        "Terr": 14,
        "timeWhenProtWon": 10616,
        "timeWhenTerrWon": 13032
      },
      "ZergvZerg": {
        "games": 14,
        "time": 11810,
        "Zerg": 14,
        "timeWhenZergWon": 11810
      },
      "TerrvZerg": {
        "games": 26,
        "time": 34231,
        "Terr": 8,
        "Zerg": 18,
        "timeWhenTerrWon": 12296,
        "timeWhenZergWon": 21935
      },
      "ProtvZerg": {
        "games": 32,
        "time": 47293,
        "Prot": 14,
        "Zerg": 18,
        "timeWhenProtWon": 16559,
        "timeWhenZergWon": 30734
      },
      "ProtvProt": {
        "games": 19,
        "time": 18627,
        "Prot": 19,
        "timeWhenProtWon": 18627
      },
      "TerrvTerr": {
        "games": 5,
        "time": 7224,
        "Terr": 5,
        "timeWhenTerrWon": 7224
      }
    },
    "Eternal Empire LE": {
      "ProtvTerr": {
        "games": 44,
        "time": 48193,
        "Prot": 24,
        "Terr": 20,
        "timeWhenProtWon": 27060,
        "timeWhenTerrWon": 21133
      },
      "TerrvZerg": {
        "games": 41,
        "time": 48709,
        "Terr": 16,
        "Zerg": 25,
        "timeWhenTerrWon": 16006,
        "timeWhenZergWon": 32703
      },
      "ZergvZerg": {
        "games": 13,
        "time": 13462,
        "Zerg": 13,
        "timeWhenZergWon": 13462
      },
      "ProtvZerg": {
        "games": 51,
        "time": 64945,
        "Prot": 25,
        "Zerg": 26,
        "timeWhenProtWon": 31066,
        "timeWhenZergWon": 33879
      },
      "ProtvProt": {
        "games": 34,
        "time": 42138,
        "Prot": 34,
        "timeWhenProtWon": 42138
      },
      "TerrvTerr": {
        "games": 11,
        "time": 12719,
        "Terr": 11,
        "timeWhenTerrWon": 12719
      }
    },
    "Pillars of Gold LE": {
      "ZergvZerg": {
        "games": 9,
        "time": 8510,
        "Zerg": 9,
        "timeWhenZergWon": 8510
      },
      "ProtvProt": {
        "games": 19,
        "time": 19683,
        "Prot": 19,
        "timeWhenProtWon": 19683
      },
      "ProtvZerg": {
        "games": 29,
        "time": 31127,
        "Prot": 12,
        "Zerg": 17,
        "timeWhenProtWon": 13138,
        "timeWhenZergWon": 17989
      },
      "ProtvTerr": {
        "games": 27,
        "time": 26646,
        "Prot": 18,
        "Terr": 9,
        "timeWhenProtWon": 18508,
        "timeWhenTerrWon": 8138
      },
      "TerrvTerr": {
        "games": 6,
        "time": 7032,
        "Terr": 6,
        "timeWhenTerrWon": 7032
      },
      "TerrvZerg": {
        "games": 23,
        "time": 23423,
        "Terr": 13,
        "Zerg": 10,
        "timeWhenTerrWon": 12684,
        "timeWhenZergWon": 10739
      }
    },
    "Deathaura LE": {
      "ProtvZerg": {
        "games": 28,
        "time": 31845,
        "Prot": 18,
        "Zerg": 10,
        "timeWhenProtWon": 21832,
        "timeWhenZergWon": 10013
      },
      "TerrvZerg": {
        "games": 32,
        "time": 34635,
        "Terr": 17,
        "Zerg": 15,
        "timeWhenTerrWon": 16487,
        "timeWhenZergWon": 18148
      },
      "ProtvProt": {
        "games": 25,
        "time": 23781,
        "Prot": 25,
        "timeWhenProtWon": 23781
      },
      "ProtvTerr": {
        "games": 25,
        "time": 26922,
        "Prot": 18,
        "Terr": 7,
        "timeWhenProtWon": 18129,
        "timeWhenTerrWon": 8793
      },
      "ZergvZerg": {
        "games": 20,
        "time": 16066,
        "Zerg": 19,
        "timeWhenZergWon": 15435
      },
      "TerrvTerr": {
        "games": 10,
        "time": 12560,
        "Terr": 10,
        "timeWhenTerrWon": 12560
      }
    },
    "Ever Dream LE": {
      "ProtvZerg": {
        "games": 44,
        "time": 50136,
        "Prot": 20,
        "Zerg": 24,
        "timeWhenProtWon": 21489,
        "timeWhenZergWon": 28647
      },
      "ProtvProt": {
        "games": 22,
        "time": 21876,
        "Prot": 22,
        "timeWhenProtWon": 21876
      },
      "ZergvZerg": {
        "games": 14,
        "time": 10820,
        "Zerg": 14,
        "timeWhenZergWon": 10820
      },
      "ProtvTerr": {
        "games": 33,
        "time": 34127,
        "Prot": 11,
        "Terr": 22,
        "timeWhenProtWon": 9569,
        "timeWhenTerrWon": 24558
      },
      "TerrvZerg": {
        "games": 31,
        "time": 36853,
        "Terr": 16,
        "Zerg": 15,
        "timeWhenTerrWon": 17946,
        "timeWhenZergWon": 18907
      },
      "TerrvTerr": {
        "games": 14,
        "time": 15886,
        "Terr": 14,
        "timeWhenTerrWon": 15886
      }
    },
    "Golden Wall LE": {
      "ProtvTerr": {
        "games": 9,
        "time": 6287,
        "Prot": 4,
        "Terr": 5,
        "timeWhenProtWon": 2163,
        "timeWhenTerrWon": 4124
      },
      "TerrvZerg": {
        "games": 20,
        "time": 18408,
        "Terr": 11,
        "Zerg": 9,
        "timeWhenTerrWon": 9907,
        "timeWhenZergWon": 8501
      },
      "TerrvTerr": {
        "games": 1,
        "time": 1692,
        "Terr": 1,
        "timeWhenTerrWon": 1692
      },
      "ZergvZerg": {
        "games": 1,
        "time": 890,
        "Zerg": 1,
        "timeWhenZergWon": 890
      },
      "ProtvZerg": {
        "games": 10,
        "time": 11013,
        "Prot": 7,
        "Zerg": 3,
        "timeWhenProtWon": 8319,
        "timeWhenZergWon": 2694
      },
      "ProtvProt": {
        "games": 5,
        "time": 4310,
        "Prot": 5,
        "timeWhenProtWon": 4310
      }
    },
    "Submarine LE": {
      "TerrvZerg": {
        "games": 11,
        "time": 12100,
        "Terr": 5,
        "Zerg": 6,
        "timeWhenTerrWon": 5728,
        "timeWhenZergWon": 6372
      },
      "ZergvZerg": {
        "games": 4,
        "time": 3341,
        "Zerg": 4,
        "timeWhenZergWon": 3341
      },
      "ProtvTerr": {
        "games": 4,
        "time": 3629,
        "Prot": 2,
        "Terr": 2,
        "timeWhenProtWon": 2048,
        "timeWhenTerrWon": 1581
      },
      "TerrvTerr": {
        "games": 2,
        "time": 1359,
        "Terr": 2,
        "timeWhenTerrWon": 1359
      },
      "ProtvZerg": {
        "games": 5,
        "time": 5540,
        "Prot": 3,
        "Zerg": 2,
        "timeWhenProtWon": 3614,
        "timeWhenZergWon": 1926
      },
      "ProtvProt": {
        "games": 2,
        "time": 1388,
        "Prot": 2,
        "timeWhenProtWon": 1388
      }
    }
  }
}

const MapsHome = () => {
  return (
    <TournamentPageWrapper>
      <Breadcrumb>
        <Breadcrumb.Section href={'/'}>
          <Link href={'/'}>Home</Link>
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section>
          <Link href={'/tournament/hscxviii'}>Home Story Cup XVIII</Link>
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section active>
          Maps
        </Breadcrumb.Section>
      </Breadcrumb>
      <MapsPlayedSectionHorizontal />
      <MapsMatchupSection
        allMapsStats={data.perMap}
      />
      <MatchupLengthSection
        allMapsStats={data.perMap}
      />
    </TournamentPageWrapper>
  )
}

export default MapsHome