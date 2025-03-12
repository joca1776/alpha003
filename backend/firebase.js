const admin = require('firebase-admin');

// Inicializar o Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.applicationDefault(), // Usa as credenciais do ambiente
  databaseURL: 'https://alpha002.firebaseio.com',
});

const db = admin.firestore();

// Exemplo: Adicionar um documento
async function adicionarCliente() {
  const docRef = db.collection('clientes').doc('cliente1');
  await docRef.set({
    nome: 'João',
    email: 'joao@email.com'
  });
  console.log('Documento adicionado com sucesso!');
}

adicionarCliente();
