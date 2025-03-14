import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>CRM Dashboard</h1>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/customers">Customers</Link>
        <Link to="/sales">Sales</Link>
      </nav>
    </header>
  );
};

export default Header;
