const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1000]

valores.forEach(function (valor, indice, array) {
  console.log(valor, indice)
})

valores.forEach((valor, indice) => {
  console.log(valor)
})

console.log(new Date())
