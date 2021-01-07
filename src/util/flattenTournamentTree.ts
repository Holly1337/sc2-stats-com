import { TreeNode } from '../Components/Sections/Tournament/TournamentListItem'

export const flattenTournamentTree = (tree: TreeNode): Array<TreeNode> => {
  if (tree.type === 'file') {
    return [tree]
  }
  if (tree.type === 'folder') {
    return tree.children.flatMap(node => flattenTournamentTree(node))
  }
}