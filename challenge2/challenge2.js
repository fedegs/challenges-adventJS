const listGifts = (letter) => {
  const gifts = letter.split(' ').filter((gift) => gift.trim().length > 0)
  const giftsObj = gifts.reduce((prev, curr) => {
    if (curr[0] !== '_') {
      return {
        ...prev,
        [curr]: (prev[curr] || 0) + 1
      }
    }
    return {
      ...prev
    }
  }, {})
  return giftsObj
}

module.exports = listGifts
