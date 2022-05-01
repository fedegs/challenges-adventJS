/* eslint-env jest */

const groupBy = require('./challenge9/challenge9')

test('Challenge 9!', () => {
  expect(groupBy([
    { title: 'JavaScript: The Good Parts', rating: 8 },
    { title: 'Aprendiendo Git', rating: 10 },
    { title: 'Clean Code', rating: 9 }
  ], 'rating')).toEqual({
    8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
    9: [{ title: 'Clean Code', rating: 9 }],
    10: [{ title: 'Aprendiendo Git', rating: 10 }]
  })

  expect(groupBy(
    [1397639141184, 1363223700000],
    timestamp => new Date(timestamp).getFullYear()
  )).toEqual({ 2013: [1363223700000], 2014: [1397639141184] })
})
