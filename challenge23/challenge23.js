const canReconfigure = (from, to) => {
  if (from.length !== to.length) return false
  const obj = {}
  for (let i = 0; i < from.length; i++) {
    if (obj[from[i]] !== undefined) {
      if (obj[from[i]] !== to[i]) return false
    }
    if (obj[to[i]] !== undefined) {
      if (obj[to[i]] !== from[i]) return false
    }
    obj[from[i]] = to[i]
    obj[to[i]] = from[i]
  }
  return true
}

module.exports = canReconfigure
