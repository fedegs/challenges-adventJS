/* eslint-env jest */

const decodeNumber = require('./challenge16/challenge16')

test('Challenge 16!', () => {
  expect(decodeNumber('.........!')).toBe(107)
  expect(decodeNumber('..,!')).toBe(95)
  expect(decodeNumber(';.W')).toBe(NaN)
})
