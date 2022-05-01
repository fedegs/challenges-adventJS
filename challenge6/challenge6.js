const sumPairs = (numbers, result) => {
  let solution = null
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (!solution) {
        if (numbers[i] + numbers[j] === result) {
          solution = [numbers[i], numbers[j]]
        }
      }
    }
  }
  return solution
}

module.exports = sumPairs
