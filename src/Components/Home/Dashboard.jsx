// Dashboard.js

import React from 'react';
import ProductDashboard from './ProductDashboard';
import OrderDashboard from './OrderDashboard';
import NavBar from '../NavBar/Navbar';
// import DashboardAs from './As';

const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <div className="dashboard-layout">
        <h1 className="dashboard-title headings">Dashboard</h1>
        <div className="dashboard-cards">
          <div className="dashboard-card">
            <ProductDashboard />
          </div>
          <div className="dashboard-card">
            <OrderDashboard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
