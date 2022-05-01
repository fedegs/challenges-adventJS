const contains = (store, product) => {
  for (const key in store) {
    const value = store[key]
    if (typeof value === 'object') {
      if (contains(value, product)) {
        return true
      }
    }
    if (value === product) {
      return true
    }
  }
  return false
}

module.exports = contains
