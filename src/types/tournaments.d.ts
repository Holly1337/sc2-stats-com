interface TournamentData {
  id: string
  name: string
  from: string
  to: string
  description: string
  games: number
  pricepool: number
  tier: 'premier' | 'major' | 'minor' | 'other'
  href?: string
}