/* eslint-env jest */

const daysToXmas = require('./challenge5/challenge5')

const date1 = new Date('Dec 1, 2021') // 24
const date2 = new Date('Dec 24, 2021 00:00:01') // 1
const date3 = new Date('Dec 24, 2021 23:59:59') // 1
const date4 = new Date('December 20, 2021 03:24:00') // 5

test('Challenge 5!', () => {
  expect(daysToXmas(date1)).toEqual(24)
  expect(daysToXmas(date2)).toEqual(1)
  expect(daysToXmas(date3)).toEqual(1)
  expect(daysToXmas(date4)).toEqual(5)
})
