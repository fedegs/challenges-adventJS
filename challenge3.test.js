/* eslint-env jest */

const isValid = require('./challenge3/challenge3')

const letter1 = 'bici coche (balón) bici coche peluche'
const letter2 = '(muñeca) consola bici'
const letter3 = 'bici coche (balón bici coche'
const letter4 = 'bici coche (balón bici coche'
const letter5 = '() bici'

test('Challenge 3!', () => {
  expect(isValid(letter1)).toBe(true)
  expect(isValid(letter2)).toBe(true)
  expect(isValid(letter3)).toBe(false)
  expect(isValid(letter4)).toBe(false)
  expect(isValid(letter5)).toBe(false)
})
