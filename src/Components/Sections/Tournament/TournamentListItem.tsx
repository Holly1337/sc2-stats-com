import Link from 'next/link'
import React, { useState } from 'react'
import { Icon, List } from 'semantic-ui-react'

export type TreeNode = {
  id: string
  name: string
  type: 'folder' | 'file'
  children?: Array<TreeNode>
}

interface Props {
  tournamentId: string
  tree: TreeNode
  depth: number
  initiallyClosedDepths: Array<number>
  isSearching: boolean
}

export const TournamentListItem = (props: Props) => {
  const { tree, depth, initiallyClosedDepths, isSearching, tournamentId } = props
  const hasChildren = tree.children !== undefined
  const [isOpenState, setIsOpenState] = useState<boolean>(!initiallyClosedDepths.includes(depth))

  const onToggle = () => {
    if (tree.type === 'file') {
      return
    }
    setIsOpenState(isOpen => !isOpen)
  }

  const style = tree.type === 'folder' ? { cursor: 'pointer' } : {}
  const isOpen = isOpenState || isSearching

  return (
    <List.Item>
      <List.Icon name={tree.type} />
      <List.Content>
        {tree.type === 'folder' && (
          <List.Header onClick={onToggle} style={style}>
            {tree.name}
            <Icon name={isOpen ? 'caret down' : 'caret right'} style={{ paddingLeft: '.5em' }} />
          </List.Header>
        )}
        {tree.type === 'file' && (
          <List.Header onClick={onToggle} style={style}>
            <Link href={`/tournament/${tournamentId}/games/${tree.id}`} passHref={true}>
              <a>
                {tree.name}
              </a>
            </Link>
          </List.Header>
        )}
        {isOpen && hasChildren && (
          tree.children.map(child => (
            <List.List>
              <TournamentListItem
                tournamentId={tournamentId}
                tree={child}
                depth={depth + 1}
                initiallyClosedDepths={initiallyClosedDepths}
                isSearching={isSearching}
              />
            </List.List>
          ))
        )}
      </List.Content>
    </List.Item>
  )
}