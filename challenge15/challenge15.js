const checkSledJump = (heights) => {
  let maxHeight = false
  const sz = heights.length
  let i = 0
  let flag = true
  while (i < sz && flag) {
    if (heights[i] >= heights[i + 1] && !maxHeight) {
      maxHeight = true
    }
    if (heights[i] <= heights[i + 1] && maxHeight) {
      flag = false
    }
    i++
  }
  return maxHeight ? flag : false
}

module.exports = checkSledJump
