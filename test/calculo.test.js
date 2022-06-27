const {calculo, divide} = require('../src/calculo')


describe('calculadora', () => {
    it('Deve lançar um erro com divisão por 0', () => {
        expect((calculo(56, 0)).toThrow)
    })
})

describe('calculadora', () => {
    it('Deve dividir 2 numeros', () => {
        expect(divide(8, 2)).toBe(4)
    })
})

