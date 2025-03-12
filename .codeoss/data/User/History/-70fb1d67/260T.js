// db.js
const mysql = require('mysql2');
require('dotenv').config(); // Para carregar as variáveis do arquivo .env

const connection = mysql.createConnection({
  host: process.env.DB_HOST,      // Usando o IP público ou o nome da instância
  user: process.env.DB_USER,      // Usuário do banco
  password: process.env.DB_PASSWORD, // Senha do banco
  database: process.env.DB_NAME,  // Nome do banco de dados
  connectTimeout: 10000           // Timeout de 10 segundos
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ',
