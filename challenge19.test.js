/* eslint-env jest */

const learn = require('./challenge19/challenge19')

test('Challenge 19!', () => {
  expect(learn(25, [10, 15, 20, 5])).toEqual([0, 1])
  expect(learn(4, [10, 14, 20])).toBe(null)
})
