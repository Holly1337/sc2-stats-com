import React, { useState } from 'react'
import { Header, Search, SearchResultData, SearchResultProps } from 'semantic-ui-react'
import { useRouter } from 'next/router'

export const SearchBar = (props) => {
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState([])
  const router = useRouter()

  const handleSearchChange = async (event: React.MouseEvent, data: SearchResultData) => {
    setSearch(data.value)
    setLoading(true)
    const response = await fetch(`http://localhost:3000/api/search?q=${data.value}`)
    const json = await response.json()
    const results = json.results
    setResults(results)
    setLoading(false)
  }

  const onResultSelect = (e: React.MouseEvent<HTMLDivElement>, data: SearchResultData) => {
    const item = data.result.item
    router.push(`/tournament/${item.tournamentId}/games/${item.matchId}`)
    console.log(item)
  }

  return (
    <Search
      className={'search-input-wrapper'}
      value={search}
      placeholder={'Search for maps or matchups'}
      loading={loading}
      onResultSelect={onResultSelect}
      onSearchChange={handleSearchChange}
      resultRenderer={resultRenderer}
      results={results}
    />
  )
}

const resultRenderer = (result: SearchResultProps) => {
  const item = result.item
  return (
    <div>
      <div><Header size={'small'}>Stay At Home Story Cup</Header></div>
      <strong>{item.map}</strong> - <span>{item.matchup}</span>
    </div>
  )
}
