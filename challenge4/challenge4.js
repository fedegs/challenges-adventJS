const createXmasTree = (height) => {
  const width = height * 2 - 1
  const mid = Math.floor(width / 2)
  let tree = ''
  for (let i = 0; i < height; i++) {
    tree +=
        '_'.repeat(mid - i) +
        '*'.repeat((i + 1) * 2 - 1) +
        '_'.repeat(mid - i) +
        '\n'
  }
  tree += '_'.repeat(mid) + '#' + '_'.repeat(mid) + '\n'
  tree += '_'.repeat(mid) + '#' + '_'.repeat(mid)
  return tree
}

module.exports = createXmasTree
