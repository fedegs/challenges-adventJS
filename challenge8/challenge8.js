const maxProfit = (prices) => {
  let rango = 0

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] > prices[i] && rango < prices[j] - prices[i]) {
        rango = prices[j] - prices[i]
      }
    }
  }

  return rango === 0 ? -1 : rango
}

module.exports = maxProfit
