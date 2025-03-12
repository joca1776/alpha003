// backend/app.js

const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config(); // Carregar variáveis de ambiente do arquivo .env

const app = express();
const port = process.env.PORT || 5000;

// Configuração de pool de conexão com o MySQL
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 3306, // A porta padrão do MySQL
  connectTimeout: 20000, // Timeout aumentado para 20 segundos
  waitForConnections: true, // Permitir esperar por conexões livres no pool
  connectionLimit: 10, // Número máximo de conexões simultâneas
  queueLimit: 0, // Sem limite de filas de conexões
});

// Verifica a conexão com o banco de dados
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados!');
  connection.release(); // Libera a conexão de volta ao pool
});

// Rota simples para testar o backend
app.get('/', (req, res) => {
  res.send('Backend está funcionando!');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

