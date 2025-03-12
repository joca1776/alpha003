import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'SUA_API_KEY',
  authDomain: 'SEU_DOMINIO',
  projectId: 'SEU_PROJETO_ID',
  storageBucket: 'SEU_BUCKET',
  messagingSenderId: 'SEU_SENDER_ID',
  appId: 'SEU_APP_ID',
};

// Inicializar o Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

// Exemplo: Adicionar um cliente
function adicionarCliente() {
  db.collection('clientes').add({
    nome: 'Maria',
    email: 'maria@email.com'
  })
  .then(() => {
    console.log('Cliente adicionado com sucesso');
  })
  .catch((error) => {
    console.error('Erro ao adicionar cliente: ', error);
  });
}

export { adicionarCliente };
