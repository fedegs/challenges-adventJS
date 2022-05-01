/* eslint-env jest */

const getMinJump = require('./challenge12/challenge12')

const obstacles1 = [5, 3, 6, 7, 9] // 4
const obstacles2 = [2, 4, 6, 8, 10] // 7

test('Challenge 12!', () => {
  expect(getMinJump(obstacles1)).toBe(4)
  expect(getMinJump(obstacles2)).toBe(7)
})
