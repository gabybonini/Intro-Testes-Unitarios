const {sum, inOneHour} = require ('../src/code01')

describe('teste 01', () => {
   /* beforeAll(() => {
        console.log('before all')
    }) // antes de todos os testes.

    beforeEach(() => {
        console.log('before each')
    }) // antes de cada teste.

    afterAll(() => {
        console.log('after all')
    }) // depois que acabar todos os testes.

    afterEach(() => {
        console.log('after each')
    }) // depois que acabar cada teste.
*/
    it ('soma 2 numeros', () => {
        expect(sum(1, 2)).toBe(3)
    })
})
describe('teste 02', () => {
    it('retorna timestamp daqui uma hora', () => {
        const realDateNow = Date.now.bind(global.Date) //criando nova func, date -> obj de referencia
        global.Date.now = jest.fn(() => 0) // congelando temporariamente para teste
        expect(inOneHour()).toBe(3600000)
        global.Date.now = realDateNow // retornando o que era antes
        //console.log(global.Date.now())
    })
})



