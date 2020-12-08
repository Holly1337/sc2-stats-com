import React, { useState } from 'react'
import { Input, List } from 'semantic-ui-react'
import { SegmentCustom } from '../../Segments/SegmentCustom'

import tree from '../../../../data/tournaments/sahsc/tree.json'
import { TournamentListItem } from './TournamentListItem'

export const TournamentSection = () => {
  // TODO:
  //  - search
  //  - filter by race, matchup, map
  const [search, setSearch] = useState('')

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  return (
    <SegmentCustom heading={'Stay At Home Story Cup'}>
      <List>
        <TournamentListItem
          // @ts-ignore
          tree={tree}
          depth={0}
          initiallyClosedDepths={[3, 4]}
          isSearching={search !== ''}
        />
      </List>
    </SegmentCustom>
  )
}