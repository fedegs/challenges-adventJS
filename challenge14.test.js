/* eslint-env jest */

const missingReindeer = require('./challenge14/challenge14')

test('Challenge 14!', () => {
  expect(missingReindeer([5, 6, 1, 2, 3, 7, 0])).toBe(4)
  expect(missingReindeer([0, 1])).toBe(2)
  expect(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1])).toBe(8)
})
