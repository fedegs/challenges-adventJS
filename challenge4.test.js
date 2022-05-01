/* eslint-env jest */

const createXmasTree = require('./challenge4/challenge4')

const tree5 = '____*____\n___***___\n__*****__\n_*******_\n*********\n____#____\n____#____'

test('Challenge 4!', () => {
  expect(createXmasTree(5)).toEqual(tree5)
})
