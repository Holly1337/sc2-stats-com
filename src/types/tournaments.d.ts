interface TournamentData {
  id: string
  name: string
  from: string
  to: string
  description: string
  games: number
  pricepool: number
  currency: string
  tier: 'premier' | 'major' | 'minor' | 'other'
  image?: string
}
