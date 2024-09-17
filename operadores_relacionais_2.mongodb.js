/* Nome do banco de dados */
const database = 'BD3-MARIANA-AULA'

/* Nome da coleção de dados */
const collection = 'LIVRARIA'

/* CRIAR OU ACESSAR O BANCO DE DADOS */
use(database)

/* seleciona livros entre 100 e 150 */
db[collection].find({
  valor: {$gte: 100, $lte:150}
})