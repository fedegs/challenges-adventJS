const canMouseEat = (direction, game) => {
  const foods = []
  let mouse = null
  game.forEach((row, rIndex) => {
    row.forEach((col, cIndex) => {
      if (col === '*') foods.push([rIndex, cIndex])
      if (col === 'm') mouse = [rIndex, cIndex]
    })
  })

  if (direction === 'up') return foods.some(x => (x[0] === mouse[0] - 1 && x[1] === mouse[1]))
  if (direction === 'down') return foods.some(x => (x[0] === mouse[0] + 1 && x[1] === mouse[1]))
  if (direction === 'right') return foods.some(x => (x[0] === mouse[0] && x[1] === mouse[1] + 1))
  if (direction === 'left') return foods.some(x => (x[0] === mouse[0] && x[1] === mouse[1] - 1))
}

module.exports = canMouseEat
