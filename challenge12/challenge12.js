const getMinJump = (obstacles) => {
  const max = Math.max(...obstacles)
  for (let i = 2; i < max; i++) {
    let flag = false
    for (let j = 0; j < obstacles.length; j++) {
      if (obstacles[j] % i === 0) {
        flag = true
      }
    }
    if (!flag) {
      return i
    }
  }
  return null
}

module.exports = getMinJump
