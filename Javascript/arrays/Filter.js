// Retornar as pessoas que tem o nome com 5 letras ou mais
// Retornar as pessoas com mis de 50 anos
// Retornar as pessoas cujo nome termina com a
const pessoas = [
  { nome: 'LuiZ', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
  { nome: 'André', idade: 45 },
  { nome: 'Andréa', idade: 25 },
  { nome: 'Ale', idade: 45 }

]

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5)
console.log(pessoasComNomeGrande)

const pessoasComMaisDeCinquentaAnos = pessoas.filter(obj => obj.idade > 50)
console.log(pessoasComMaisDeCinquentaAnos)

const pessoasComUltimaLetraA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().substr(-1) === 'a')

console.log(pessoasComUltimaLetraA)
