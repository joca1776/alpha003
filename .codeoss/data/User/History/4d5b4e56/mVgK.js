// backend/app.js

const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config(); // Carregar variáveis de ambiente do arquivo .env

const app = express();
const port = process.env.PORT || 5000;

// Configuração de conexão com o MySQL
const connection = mysql.createConnection({
  host: process.env.DB_HOST, // Endereço IP do banco de dados
  user: process.env.DB_USER, // Nome de usuário do banco de dados
  password: process.env.DB_PASSWORD, // Senha do banco de dados
  database: process.env.DB_NAME, // Nome do banco de dados
  port: 3306, // A porta padrão do MySQL
});

// Verifica a conexão com o banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados!');
  }
});

// Rota simples para testar o backend
app.get('/', (req, res) => {
  res.send('Backend está funcionando!');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
