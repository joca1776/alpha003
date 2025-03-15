import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Header.css';


const Header = () => {
  return (
    <div className="headerFormat">
    <header>
      <h1>CRM Dashboard</h1>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/customers">Customers</Link>
        <Link to="/sales">Sales</Link>
      </nav>
    </header>
    </div>
  );
};

export default Header;
