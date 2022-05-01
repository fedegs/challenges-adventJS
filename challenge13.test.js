/* eslint-env jest */

const wrapGifts = require('./challenge13/challenge13')

const result1 = ['****',
  '*📷*',
  '*⚽️*',
  '****'
]
const result2 = ['******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]

test('Challenge 13!', () => {
  expect(wrapGifts(['📷', '⚽️'])).toEqual(result1)
  expect(wrapGifts(['🏈🎸', '🎮🧸'])).toEqual(result2)
})
