/* eslint-env jest */

const canReconfigure = require('./challenge23/challenge23')

test('Challenge 23!', () => {
  expect(canReconfigure('BAL', 'LIB')).toBe(true)
  expect(canReconfigure('XBOX', 'XXBO')).toBe(false)
  expect(canReconfigure('XBOX', 'XOBX')).toBe(true)
})
