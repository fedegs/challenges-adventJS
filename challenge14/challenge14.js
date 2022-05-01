const missingReindeer = (ids) => {
  const total = (ids.length * (ids.length + 1)) / 2
  let sum = 0
  ids.forEach((element) => {
    sum += element
  })
  return total - sum
}

module.exports = missingReindeer
