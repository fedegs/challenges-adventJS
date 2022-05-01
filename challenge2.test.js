/* eslint-env jest */

const listGifts = require('./challenge2/challenge2')

const carta = 'bici coche balón _playstation bici coche peluche'

test('Challenge 2!', () => {
  expect(listGifts(carta)).toEqual({
    bici: 2,
    coche: 2,
    balón: 1,
    peluche: 1
  })
})
