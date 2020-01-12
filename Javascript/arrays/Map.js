// 1. Dobrar os números do array abaixo
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numerosDobrados = numeros.map(valor => valor * 2)
console.log('Numeros em dobro', numerosDobrados)

/*
    Para cada elemento:
    Retorne apenas uma string com o nome da pessoa
    Remova apenas a chave "nome"    do objeto
    Adicione uma chave id em cada objeto
*/
const pessoas = [
  { nome: 'Andre Marcelino', idade: 45 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Luiz', idade: 62 },
  { nome: 'Eduardo', idade: 65 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
]

const pessoasNomes = pessoas.map(obj => obj.nome)
console.log('Exibindo  somente nomes', pessoasNomes)

// const pessoasRemoveNome = pessoas.map( obj=> {
//     delete obj.nome
//     return obj

//  } )
// or
const pessoasRemoveNome = pessoas.map(obj => ({ idade: obj.idade }))
console.log('Deletado obj.nome ', pessoasRemoveNome)

const pessoasWithId = pessoas.map((obj) => {
  // para nao modificar o objeto original
  const newObj = { ...obj }
  newObj.id = new Date()
  return newObj
})
console.log('Ojeto pessoas com id adicionado ', pessoasWithId)

console.log('Obj original, pessoas ', pessoas)
