/* eslint-env jest */

const contarOvejas = require('./challenge1/challenge1')

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo' }
]

test('Challenge 1!', () => {
  expect(contarOvejas(ovejas)).toEqual([
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' }
  ])
})
