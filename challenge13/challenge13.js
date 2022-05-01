const wrapGifts = (gifts) => {
  if (gifts.length === 0) return gifts
  const length = gifts[0].length
  const wrapedGifts = [
    '*'.repeat(length + 2),
    ...gifts.map((g) => '*' + g + '*'),
    '*'.repeat(length + 2)
  ]
  return wrapedGifts
}

module.exports = wrapGifts
