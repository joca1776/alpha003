import React from 'react';

const CustomerCard = ({ customer }) => {
  return (
    <div className="customer-card">
      <h3>{customer.name}</h3>
      <p>Email: {customer.email}</p>
      <p>Phone: {customer.phone}</p>
      <button>View Details</button>
    </div>
  );
};

export default CustomerCard;
