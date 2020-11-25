import { TournamentPageWrapper } from '../../../../src/Components/Layout/TournamentPageWrapper'
import { Breadcrumb } from 'semantic-ui-react'
import MapsPlayedSectionHorizontal from '../../../../src/Components/Sections/Maps/MapsPlayed'
import { MapsMatchupSection } from '../../../../src/Components/Sections/Maps/MapsDetail/MapsMatchupSection'
import Link from 'next/link'

const data = {
  "matchups": {
    "ProtvTerr": 166,
    "ZergvZerg": 75,
    "TerrvZerg": 184,
    "ProtvZerg": 199,
    "ProtvProt": 126,
    "TerrvTerr": 49
  },
  "perMap": {
    "Ice and Chrome LE": {
      "ProtvTerr": {
        "games": 24,
        "Prot": 10,
        "Terr": 14
      },
      "ZergvZerg": {
        "games": 14,
        "Zerg": 14
      },
      "TerrvZerg": {
        "games": 26,
        "Terr": 8,
        "Zerg": 18
      },
      "ProtvZerg": {
        "games": 32,
        "Prot": 14,
        "Zerg": 18
      },
      "ProtvProt": {
        "games": 19,
        "Prot": 19
      },
      "TerrvTerr": {
        "games": 5,
        "Terr": 5
      }
    },
    "Eternal Empire LE": {
      "ProtvTerr": {
        "games": 44,
        "Prot": 24,
        "Terr": 20
      },
      "TerrvZerg": {
        "games": 41,
        "Terr": 16,
        "Zerg": 25
      },
      "ZergvZerg": {
        "games": 13,
        "Zerg": 13
      },
      "ProtvZerg": {
        "games": 51,
        "Prot": 25,
        "Zerg": 26
      },
      "ProtvProt": {
        "games": 34,
        "Prot": 34
      },
      "TerrvTerr": {
        "games": 11,
        "Terr": 11
      }
    },
    "Pillars of Gold LE": {
      "ZergvZerg": {
        "games": 9,
        "Zerg": 9
      },
      "ProtvProt": {
        "games": 19,
        "Prot": 19
      },
      "ProtvZerg": {
        "games": 29,
        "Prot": 12,
        "Zerg": 17
      },
      "ProtvTerr": {
        "games": 27,
        "Prot": 18,
        "Terr": 9
      },
      "TerrvTerr": {
        "games": 6,
        "Terr": 6
      },
      "TerrvZerg": {
        "games": 23,
        "Terr": 13,
        "Zerg": 10
      }
    },
    "Deathaura LE": {
      "ProtvZerg": {
        "games": 28,
        "Prot": 18,
        "Zerg": 10
      },
      "TerrvZerg": {
        "games": 32,
        "Terr": 17,
        "Zerg": 15
      },
      "ProtvProt": {
        "games": 25,
        "Prot": 25
      },
      "ProtvTerr": {
        "games": 25,
        "Prot": 18,
        "Terr": 7
      },
      "ZergvZerg": {
        "games": 20,
        "Zerg": 19
      },
      "TerrvTerr": {
        "games": 10,
        "Terr": 10
      }
    },
    "Ever Dream LE": {
      "ProtvZerg": {
        "games": 44,
        "Prot": 20,
        "Zerg": 24
      },
      "ProtvProt": {
        "games": 22,
        "Prot": 22
      },
      "ZergvZerg": {
        "games": 14,
        "Zerg": 14
      },
      "ProtvTerr": {
        "games": 33,
        "Prot": 11,
        "Terr": 22
      },
      "TerrvZerg": {
        "games": 31,
        "Terr": 16,
        "Zerg": 15
      },
      "TerrvTerr": {
        "games": 14,
        "Terr": 14
      }
    },
    "Golden Wall LE": {
      "ProtvTerr": {
        "games": 9,
        "Prot": 4,
        "Terr": 5
      },
      "TerrvZerg": {
        "games": 20,
        "Terr": 11,
        "Zerg": 9
      },
      "TerrvTerr": {
        "games": 1,
        "Terr": 1
      },
      "ZergvZerg": {
        "games": 1,
        "Zerg": 1
      },
      "ProtvZerg": {
        "games": 10,
        "Prot": 7,
        "Zerg": 3
      },
      "ProtvProt": {
        "games": 5,
        "Prot": 5
      }
    },
    "Submarine LE": {
      "TerrvZerg": {
        "games": 11,
        "Terr": 5,
        "Zerg": 6
      },
      "ZergvZerg": {
        "games": 4,
        "Zerg": 4
      },
      "ProtvTerr": {
        "games": 4,
        "Prot": 2,
        "Terr": 2
      },
      "TerrvTerr": {
        "games": 2,
        "Terr": 2
      },
      "ProtvZerg": {
        "games": 5,
        "Prot": 3,
        "Zerg": 2
      },
      "ProtvProt": {
        "games": 2,
        "Prot": 2
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
          Upgrades
        </Breadcrumb.Section>
      </Breadcrumb>
      <MapsPlayedSectionHorizontal />
      <MapsMatchupSection
        allMapsStats={data.perMap}
      />
    </TournamentPageWrapper>
  )
}

export default MapsHome