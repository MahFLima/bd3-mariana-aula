/* Nome do banco de dados */
const database = "BD3-MARIANA-AULA";

/* Nome da coleção de dados */
const collection = "LIVRARIA";

/* CRIAR OU ACESSAR O BANCO DE DADOS */
use(database);

/* Seleciona todos os registros da seleção */
db[collection].find(
  {"categoria": "Ficção Científica"},
  {"_id": 0, "codigo": 0, "descricao": 0}
)

