const countDecorations = (tree) => {
  if (tree) {
    return tree.value + countDecorations(tree.left) + countDecorations(tree.right)
  }
  return 0
}

module.exports = countDecorations
