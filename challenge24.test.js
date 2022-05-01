/* eslint-env jest */

const checkIsSameTree = require('./challenge24/challenge24')

const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null }
}

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
}

test('Challenge 24!', () => {
  expect(checkIsSameTree(tree, tree)).toBe(true)
  expect(checkIsSameTree(tree, tree2)).toBe(false)
})
