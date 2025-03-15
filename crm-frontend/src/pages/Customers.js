// crm-frontend/src/pages/Customers.js


// import React, { useState, useEffect } from 'react';
// import api from '../services/api';
// import CustomerCard from '../components/CustomerCard';

// const Customers = () => {
//   const [customers, setCustomers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [search, setSearch] = useState('');

//   useEffect(() => {
//     const fetchCustomers = async () => {
//       try {
//         const response = await api.get('/customers');
//         setCustomers(response.data);
//       } catch (error) {
//         setError('Erro ao carregar clientes');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCustomers();
//   }, []);

//   const filteredCustomers = customers.filter(customer =>
//     customer.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
//       <h2 style={{ textAlign: 'center', color: '#333' }}>Clientes</h2>
//       <input
//         type="text"
//         style={{
//           width: '100%',
//           padding: '10px',
//           marginBottom: '20px',
//           borderRadius: '5px',
//           border: '1px solid #ccc'
//         }}
//         placeholder="Pesquisar clientes..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       {loading && <p style={{ textAlign: 'center', color: '#666' }}>Carregando clientes...</p>}
//       {error && <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>}
//       <div style={{ display: 'grid', gap: '10px' }}>
//         {filteredCustomers.length > 0 ? (
//           filteredCustomers.map(customer => (
//             <CustomerCard key={customer.id} customer={customer} />
//           ))
//         ) : (
//           <p style={{ textAlign: 'center', color: '#999' }}>Nenhum cliente encontrado</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Customers;


import React, { useState, useEffect } from 'react';
import api from '../services/api';
import CustomerCard from '../components/CustomerCard';
import '../App.css'; // Importe o App.css para usar a classe red-rounded-bg
import './Styles/Customers.css';


const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await api.get('/customers');
        setCustomers(response.data);
      } catch (error) {
        setError('Erro ao carregar clientes');
      } finally {
        setLoading(false);
      }
    };
    fetchCustomers();
  }, []);

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="customers-container">
      <h2 className="customers-title">Clientes</h2>
      <input
        type="text"
        className="customers-search"
        placeholder="Pesquisar clientes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading && <p className="loading-text">Carregando clientes...</p>}
      {error && <p className="error-text">{error}</p>}
      <div className="customers-list">
        {filteredCustomers.length > 0 ? (
          filteredCustomers.map(customer => (
            <CustomerCard key={customer.id} customer={customer} />
          ))
        ) : (
          <p className="no-customers">Nenhum cliente encontrado</p>
        )}
      </div>
    </div>
  );
};

export default Customers;