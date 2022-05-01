const checkIsSameTree = (treeA, treeB) => {
  const countDecorations = (tree) => {
    if (tree) {
      return tree.value + countDecorations(tree.left) + countDecorations(tree.right)
    }
    return 0
  }
  return countDecorations(treeA) === countDecorations(treeB)
}

module.exports = checkIsSameTree
