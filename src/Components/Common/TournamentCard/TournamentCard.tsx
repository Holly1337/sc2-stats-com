import React from 'react'
import { Card, Grid, Icon, Image } from 'semantic-ui-react'

const dhMastersBackground = '/assets/images/TournamentCardBackgrounds/DH_SC2_Masters.png'

interface Props {
  name: string
  from: Date
  to: Date
  description: string
  games: number
  pricepool: number
  tier: 'premier' | 'major' | 'minor' | 'other'
}

export const TournamentCard = (props: Props) => {
  const { name, from, to, description, games, pricepool } = props
  // TODO: include tier

  return (
    <Card link={true} color={'red'}>
      <Image
        src={dhMastersBackground}
        fluid={true}
        label={{
          color: 'red',
          content: 'Premier',
          ribbon: true
        }}
      />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className='date'>{from.toLocaleDateString()} - {to.toLocaleDateString()}</span>
        </Card.Meta>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Grid columns={2} stackable divided>
          <Grid.Row>
            <Grid.Column textAlign={'left'}>
              <Icon name='game' />
              {games} games
            </Grid.Column>
            <Grid.Column textAlign={'right'}>
              <Icon name='money bill alternate' />
              {new Intl.NumberFormat('en-EN').format(pricepool)}$ pricepool
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
    </Card>
  )
}