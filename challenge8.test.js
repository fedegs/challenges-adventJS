/* eslint-env jest */

const maxProfit = require('./challenge8/challenge8')

const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
const pricesEth = [10, 20, 30, 40, 50, 60, 70]

test('Challenge 8', () => {
  expect(maxProfit(pricesBtc)).toBe(16)
  expect(maxProfit(pricesEth)).toBe(60)
})
