const mysql = require('mysql');

const dadosConexao = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'agenda-api'
}

const conexao = mysql.createConnection(dadosConexao);

module.exports = conexao;