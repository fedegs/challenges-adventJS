const decodeNumbers = (symbols) => {
  const values = {
    '.': 1,
    ',': 5,
    ':': 10,
    ';': 50,
    '!': 100
  }
  return symbols
    .split('')
    .map((symbol) => values[symbol] || NaN)
    .reduce((acc, value, index, array) => {
      return acc + (value < array[index + 1] ? -value : value)
    }, 0)
}

module.exports = decodeNumbers
