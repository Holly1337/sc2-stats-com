import React from 'react'
import { Card, Container, Icon } from 'semantic-ui-react'
import Image from 'next/image'
import Link from 'next/link'

const dhMastersBackground = '/assets/images/TournamentCardBackgrounds/DH_SC2_Masters.png'

export default function Home () {
  return (
    <Container>
      <div style={{ marginTop: 20 }}>
        <Link href={'/tournament/hscxiii'} passHref={false}>
          <Card link={true}>
            <Image src={dhMastersBackground} width={290} height={145} />
            <Card.Content>
              <Card.Header>Dreamhack Masters Winter</Card.Header>
              <Card.Meta>
                <span className='date'>20.10.2020 - 14.11.2020</span>
              </Card.Meta>
              {/*
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            */}
            </Card.Content>
            <Card.Content extra>
              <Icon name='game' />
              1089 Games
            </Card.Content>
          </Card>
        </Link>
      </div>
    </Container>
  )
}
