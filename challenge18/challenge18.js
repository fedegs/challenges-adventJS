const fixFiles = (files) => {
  const count = {}
  return files.map((file) => {
    if (count[file] !== undefined) {
      count[file]++
      return `${file}(${count[file]})`
    } else {
      count[file] = 0
      return file
    }
  })
}

module.exports = fixFiles
