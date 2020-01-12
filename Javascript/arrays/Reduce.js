// Some todos os números
// Retorne uma array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const Total = numeros.reduce((acumulador, valor, index, array) => {
  const total = acumulador += valor
  return total
}, 0)

const pares = numeros.reduce((acumulador, valor) => {
  if (valor % 2 === 0) acumulador.push(valor)
  return acumulador
}, [])

console.log('Soma de números', Total)
console.log('Números pares ', pares)

/*******************************************
 * Retorne a pessoa mais velha
 */
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 10 },
  { nome: 'Rosana', idade: 64 },
  { nome: 'Wallace', idade: 63 }
]

const maisVelha = pessoas.reduce(function (acumulador, valor) {
  if (acumulador.idade > valor.idade) return acumulador

  return valor
})

console.log(maisVelha)
