import React, { useState } from 'react'
import { List } from 'semantic-ui-react'
import { SegmentCustom } from '../../Segments/SegmentCustom'
import { TournamentListItem, TreeNode } from './TournamentListItem'

interface Props {
  tournamentId: string
  tree: TreeNode
}

export const TournamentSection = (props: Props) => {
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
          tournamentId={props.tournamentId}
          tree={props.tree}
          depth={0}
          initiallyClosedDepths={[3, 4]}
          isSearching={search !== ''}
        />
      </List>
    </SegmentCustom>
  )
}