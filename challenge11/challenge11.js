const shouldBuyFidelity = (times) => {
  let fidelityPrice = 250
  const normalPrice = times * 12
  for (let i = 0; i < times; i++) {
    fidelityPrice += 12 * Math.pow(0.75, i + 1)
  }
  return fidelityPrice < normalPrice
}

module.exports = shouldBuyFidelity
