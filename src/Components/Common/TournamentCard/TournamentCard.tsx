import React from 'react'
import { Card, Grid, Icon, Image } from 'semantic-ui-react'

const dhMastersBackground = '/assets/images/TournamentCardBackgrounds/DH_SC2_Masters.png'

interface TournamentCardProps {
  id: string
  name: string
  from: string
  to: string
  description: string
  games: number
  pricepool: number
  tier: 'premier' | 'major' | 'minor' | 'other'
  href?: string
  image: string
}

export const TournamentCard = (props: TournamentCardProps) => {
  const { name, from, to, description, games, pricepool, href, image } = props
  // TODO: include tier, and maybe points (allow custom points type for the future. EPT <-> WCS)

  return (
    <Card link={href !== undefined} color={'red'} href={href}>
      <Image
        src={image}
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
          <span className='date'>{new Date(from).toLocaleDateString()} - {new Date(to).toLocaleDateString()}</span>
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