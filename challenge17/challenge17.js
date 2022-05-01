const countPackages = (carriers, carrierID) => {
  const carrier = carriers.find(x => {
    return x[0] === carrierID
  })
  const subs = carrier[2]
  if (subs.length !== 0) {
    let res = carrier[1]
    for (let i = 0; i < subs.length; i++) {
      res += countPackages(carriers, subs[i])
    }
    return res
  }
  return carrier[1]
}

module.exports = countPackages
