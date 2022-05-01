const getCoins = (change) => {
  const array = [0, 0, 0, 0, 0, 0]
  if (change / 50 >= 1) {
    array[5] = Math.floor(change / 50)
    change = change - array[5] * 50
  }
  if (change / 20 >= 1) {
    array[4] = Math.floor(change / 20)
    change = change - array[4] * 20
  }
  if (change / 10 >= 1) {
    array[3] = Math.floor(change / 10)
    change = change - array[3] * 10
  }
  if (change / 5 >= 1) {
    array[2] = Math.floor(change / 5)
    change = change - array[2] * 5
  }
  if (change / 2 >= 1) {
    array[1] = Math.floor(change / 2)
    change = change - array[1] * 2
  }
  if (change / 1 >= 1) {
    array[0] = Math.floor(change / 1)
    change = change - array[0]
  }
  return array
}

module.exports = getCoins
