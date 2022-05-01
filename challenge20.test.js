/* eslint-env jest */

const pangram = require('./challenge20/challenge20')

test('Challenge 20!', () => {
  expect(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')).toBe(true)
  expect(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')).toBe(false)
})
