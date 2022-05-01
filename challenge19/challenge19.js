const learn = (time, courses) => {
  const coursesToDo = []
  for (let i = 0; i < courses.length; i++) {
    for (let j = i + 1; j < courses.length; j++) {
      const sum = courses[i] + courses[j]
      if (sum <= time) {
        if (coursesToDo.length === 0) {
          coursesToDo[0] = i
          coursesToDo[1] = j
        } else {
          if (courses[coursesToDo[0]] + courses[coursesToDo[1]] < sum) {
            coursesToDo[0] = i
            coursesToDo[1] = j
          }
        }
      }
    }
  }
  return coursesToDo.length !== 0 ? coursesToDo : null
}

module.exports = learn
