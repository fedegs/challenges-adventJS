const pangram = (letter) => {
  const abecedario = 'abcdefghijklmnñopqrstuvwxyz'
  const letterFix = letter
    .toLowerCase()
    .replace(/á|à|ä/g, 'a')
    .replace(/é|è|ë/g, 'e')
    .replace(/í|ì|ï/g, 'i')
    .replace(/ó|ò|ö/g, 'o')
    .replace(/ú|ù|ü/g, 'u')
    .replace(/\s/g, '')
  let flag = true
  for (const char of abecedario) {
    if (flag) {
      flag = !!letterFix.includes(char)
    }
  }
  return flag
}

module.exports = pangram
