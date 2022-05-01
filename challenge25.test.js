/* eslint-env jest */

const canMouseEat = require('./challenge25/challenge25')

const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*']
]

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*']
]

test('Challenge 25!', () => {
  expect(canMouseEat('down', room)).toBe(true)
  expect(canMouseEat('up', room)).toBe(false)
  expect(canMouseEat('right', room2)).toBe(true)
  expect(canMouseEat('left', room2)).toBe(false)
})
