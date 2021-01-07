import React, { useEffect, useRef, useState } from 'react'
import { Search, SearchResultData, SearchResultProps } from 'semantic-ui-react'
import { useRouter } from 'next/router'
import { splitName } from '../../../util/playerNames'
import { getMapImageByName } from '../../Sections/Maps/mapsImages'
import { useDebounce } from 'use-debounce'

export const SearchBar = (props) => {
  const [search, setSearch] = useState('')
  const timestampOfSearchRequest = useRef<number>(Date.now ())
  const [debouncedSearch] = useDebounce(search, 400)
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState([])
  const router = useRouter()

  const handleSearchChange = async (event: React.MouseEvent, data: SearchResultData) => {
    let newValue = data.value
    setSearch(newValue)
  }

  const startSearch = async (searchString) => {
    if (searchString === '') {
      setResults([])
      return
    }

    const timestampBeforeRequest = Date.now()
    setLoading(true)
    const response = await fetch(`/api/search?q=${searchString}`)
    const json = await response.json()
    const results = json.results

    if (timestampBeforeRequest > timestampOfSearchRequest.current) {
      timestampOfSearchRequest.current = timestampBeforeRequest
      setResults(results)
      setLoading(false)
    }
  }

  useEffect(() => {
    startSearch(debouncedSearch)
  }, [debouncedSearch])

  const onResultSelect = (e: React.MouseEvent<HTMLDivElement>, data: SearchResultData) => {
    const item = data.result.item
    setSearch('')
    router.push(`/tournament/${item.tournamentId}/games/${item.matchId}`)
  }

  return (
    <Search
      className={'search-input-wrapper'}
      value={search}
      placeholder={'Search for players, maps, races, tournaments or matchups'}
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
