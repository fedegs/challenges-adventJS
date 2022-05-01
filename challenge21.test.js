/* eslint-env jest */

const canCarry = require('./challenge21/challenge21')

test('Challenge 21!', () => {
  expect(canCarry(4, [[2, 3, 8], [2, 5, 7]])).toBe(true)
  expect(canCarry(2, [[1, 2, 4], [2, 3, 8]])).toBe(false)
})
