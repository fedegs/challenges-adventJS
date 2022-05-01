const isValid = (letter) => {
  if (letter.includes('{') || letter.includes('[') || letter.includes('()')) return false

  const isBalanced = (letter) => {
    const stack = []
    for (const char of letter) {
      if (char === '(') {
        stack.push(1)
      }
      if (char === ')') {
        if (stack.pop() === undefined) {
          return false
        }
      }
    }
    return stack.length === 0
  }

  if (!isBalanced(letter)) return false

  return true
}

module.exports = isValid
