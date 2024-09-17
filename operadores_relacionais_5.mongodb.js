/* Nome do banco de dados */
const database = 'BD3-MARIANA-AULA'

/* Nome da coleção de dados */
const collection = 'LIVRARIA'

/* CRIAR OU ACESSAR O BANCO DE DADOS */
use(database)

/* lista todos os livros do tolkien em ordem crescente de valor */
// db[collection].find({
//   autor: "J.R.R Tolkien"
// }).sort({valor: 1})

/* lista todos os livros do tolkien em ordem decrescente de valor */
db[collection].find({
  autor: "J.R.R Tolkien"
}).sort({valor: -1})