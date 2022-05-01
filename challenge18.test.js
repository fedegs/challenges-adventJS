/* eslint-env jest */

const fixFiles = require('./challenge18/challenge18')

const files = ['photo', 'postcard', 'photo', 'photo', 'video']
const files2 = ['file', 'file', 'file', 'game', 'game']
const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']

test('Challenge 18!', () => {
  expect(fixFiles(files)).toEqual(['photo', 'postcard', 'photo(1)', 'photo(2)', 'video'])
  expect(fixFiles(files2)).toEqual(['file', 'file(1)', 'file(2)', 'game', 'game(1)'])
  expect(fixFiles(files3)).toEqual(['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)'])
})
