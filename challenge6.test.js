/* eslint-env jest */

const sumPairs = require('./challenge6/challenge6')

test('Challenge 6!', () => {
  expect(sumPairs([3, 5, 7, 2], 10)).toEqual([3, 7])
  expect(sumPairs([-3, -2, 7, -5], 10)).toEqual(null)
  expect(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)).toEqual([1, 5])
})
