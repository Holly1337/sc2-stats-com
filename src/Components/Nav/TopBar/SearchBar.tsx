import React from 'react'
import { Input } from 'semantic-ui-react'

export const SearchBar = (props) => {
    return (
      <Input
        size='large'
        icon='search'
        placeholder='Search...'
        className={'search-input-wrapper'}
        // loading={true}
      />
    )
}
