import React, { useState } from 'react'
import { Header, Search, SearchResultData, SearchResultProps } from 'semantic-ui-react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { splitName } from '../../../util/playerNames'
import { getMapImageByName } from '../../Sections/Maps/mapsImages'

export const SearchBar = (props) => {
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState([])
  const router = useRouter()

  const handleSearchChange = async (event: React.MouseEvent, data: SearchResultData) => {
    let newValue = data.value
    setSearch(newValue)
    if (newValue === '') {
      setResults([])
      return
    }
    setLoading(true)
    const response = await fetch(`http://localhost:3000/api/search?q=${newValue}`)
    const json = await response.json()
    const results = json.results
    setResults(results)
    setLoading(false)
  }

  const onResultSelect = (e: React.MouseEvent<HTMLDivElement>, data: SearchResultData) => {
    const item = data.result.item
    setSearch('')
    router.push(`/tournament/${item.tournamentId}/games/${item.matchId}`)
  }

  return (
    <Search
      className={'search-input-wrapper'}
      value={search}
      placeholder={'Search for players, maps or races'}
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
  const mapImage = getMapImageByName(item.map)
  return (
    <div className={'d-flex'}>
      <img src={mapImage} height={48} alt={item.map} style={{ marginRight: 16 }} />
      <div>
        <div><strong>{splitName(item.player1).name}</strong> vs <strong>{splitName(item.player2).name}</strong></div>
        <div><strong>{item.map}</strong></div>
        <div>{item.tournamentName}</div>
      </div>
    </div>
  )
}
