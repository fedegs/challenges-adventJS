/* eslint-env jest */

const contains = require('./challenge7/challenge7')

const almacen = {
  estanteria1: {
    cajon1: {
      producto1: 'coca-cola',
      producto2: 'fanta',
      producto3: 'sprite'
    }
  },
  estanteria2: {
    cajon1: 'vacio',
    cajon2: {
      producto1: 'pantalones',
      producto2: 'camiseta' // <- ¡Está aquí!
    }
  }
}

const otroAlmacen = {
  baul: {
    fondo: {
      objeto: 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
}

test('Challenge 7!', () => {
  expect(contains(almacen, 'camiseta')).toBe(true)
  expect(contains(otroAlmacen, 'gameboy')).toBe(false)
})
