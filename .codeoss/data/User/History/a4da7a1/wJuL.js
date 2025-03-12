import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomerCard from '../components/CustomerCard';

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Aqui você pode chamar sua API ou mock de dados
    axios.get('/api/customers')
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((error) => {
        console.error("Erro ao carregar clientes", error);
      });
  }, []);

  return (
    <div>
      <h2>Customers</h2>
      <div className="customer-list">
        {customers.map((customer) => (
          <CustomerCard key={customer.id} customer={customer} />
        ))}
      </div>
    </div>
  );
};

export default Customers;
