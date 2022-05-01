function canCarry (capacity, trip) {
  let gifts = []
  for (let i = 0; i < trip.length; i++) {
    const currentStop = trip[i]
    const cant = currentStop[0]
    const point = currentStop[1]
    const nextPoint = currentStop[2]
    if (capacity < cant) {
      return false
    }
    gifts = gifts.filter(gift => gift[1] > point)
    const currentCant = gifts.reduce((prev, curr) => {
      return prev + curr[0]
    }, 0)
    if (currentCant + cant > capacity) {
      return false
    }
    gifts.push([cant, nextPoint])
  }
  return true
}

module.exports = canCarry
