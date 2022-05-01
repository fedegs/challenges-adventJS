/* eslint-env jest */

const getCoins = require('./challenge10/challenge10')

test('Challenge 10!', () => {
  expect(getCoins(51)).toEqual([1, 0, 0, 0, 0, 1])
  expect(getCoins(3)).toEqual([1, 1, 0, 0, 0, 0])
  expect(getCoins(100)).toEqual([0, 0, 0, 0, 0, 2])
})
