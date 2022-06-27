const calculo = (a, b) => {
  return a + b
}

const divide = (a, b) => {
  if (b === 0){
     throw Error('Argumento invalido')
  }
  return a / b
}

module.exports = {calculo, divide}
