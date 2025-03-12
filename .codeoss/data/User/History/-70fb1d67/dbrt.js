// app.js ou routes.js
const express = require('express');
const db = require('./db');  // Importando o arquivo de conexão com o banco
const app = express();

// Exemplo de uma rota que consulta clientes
app.get('/api/customers', (req, res) => {
  db.query('SELECT * FROM customers', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
});

// Iniciar o servidor
app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
