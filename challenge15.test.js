/* eslint-env jest */

const checkSledJump = require('./challenge15/challenge15')

checkSledJump([1, 2, 3, 2, 1, 2, 3])
checkSledJump([0, 3, 2, 1])

test('Challenge 15!', () => {
  expect(checkSledJump([1, 2, 3, 2, 1, 2, 3])).toBe(false)
  expect(checkSledJump([0, 3, 2, 1])).toBe(true)
})
