//# crm-frontend/src/App.js


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Dashboard from './pages/Dashboard';
// import Customers from './pages/Customers';
// import Sales from './pages/Sales';

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/customers" element={<Customers />} />
//         <Route path="/sales" element={<Sales />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// Exemplo em App.js ou no seu componente principal
// App.js (ou o componente de rotas)

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Customers from './pages/Customers'; // Certifique-se de que este caminho está correto
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Sales from './pages/Sales';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="gradient-background">
          <Header />
        </div>
        <Routes>
          <Route path="/customers" element={<Customers />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/sales" element={<Sales />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;