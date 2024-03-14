// App.js

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Home/Dashboard';
import Products from './Components/Products/Products';
import Orders from './Components/Orders/Orders';
import CalenderView from './Components/CalenderView/CalenderView';

const App = () => {
  return (
    <div>
    <Router>
        <Routes>
          <Route path="/products" element={<Products/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/calendar" element={<CalenderView/>} />
          <Route path="/ERP" element={<Dashboard/>} />
        </Routes>
    </Router>
    </div>
  );
};

export default App;
