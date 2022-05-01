const groupBy = (collection, it) => {
  return collection.reduce((prev, curr) => {
    if (typeof it === 'function') {
      return {
        ...prev,
        [it(curr)]: prev[it(curr)] ? prev[it(curr)].concat([curr]) : [curr]
      }
    }
    return {
      ...prev,
      [curr[it]]: prev[curr[it]] ? prev[curr[it]].concat([curr]) : [curr]
    }
  }, {})
}

module.exports = groupBy
