/* Nome do banco de dados */
const database = "BD3-MARIANA-AULA";

/* Nome da coleção de dados */
const collection = "LIVRARIA";

/* CRIAR OU ACESSAR O BANCO DE DADOS */
use(database);

/* Altera os dados de um documentos */
db[collection].updateOne(
  {titulo: "As Cavernas de Aço"},
  {$set: {valor:'250'}}
)
