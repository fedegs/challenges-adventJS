/* eslint-env jest */

const shouldBuyFidelity = require('./challenge11/challenge11')

test('Challenge 11!', () => {
  expect(shouldBuyFidelity(1)).toBe(false)
  expect(shouldBuyFidelity(100)).toBe(true)
})
