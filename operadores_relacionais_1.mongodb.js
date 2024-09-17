/* Nome do banco de dados */
const database = 'BD3-MARIANA-AULA'

/* Nome da coleção de dados */
const collection = 'LIVRARIA'

/* CRIAR OU ACESSAR O BANCO DE DADOS */
use(database)

/* seleciona o livro com valor maior que... */
db[collection].find(
  { valor: {$gt:150} }
)

// /* seleciona o livro com valor menor que... */
db[collection].find(
  { valor: {$lt:100} }
)

/* seleciona o livro com valor menor ou igual a... */
db[collection].find(
  { valor: {$lte:100} }
)