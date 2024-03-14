import React, { useState } from 'react';
import { orderData } from '../Data/Data';
import { useNavigate } from 'react-router';
import OrderChart from '../Orders/OrderChart';
import { orderData as initialOrderData } from '../Data/Data';

const OrderDashboard = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState(initialOrderData);
  const getOrderCountByStatus = (status) => {
    return orderData.filter(order => order.status === status).length;
  };
  const ordersPage = () => {
    navigate('/orders');
  };
  return (
    <div className='orderdashboard' >
      <div>
        <h2 className='headings'>Order Dashboard</h2>
        <p>Total Orders: {orderData.length}</p>
        <p>Shipped Orders: {getOrderCountByStatus('Shipped')}</p>
        <p>Pending Orders: {getOrderCountByStatus('Pending')}</p>
        <p>Delivered Orders: {getOrderCountByStatus('Delivered')}</p>
        <div className="button-container">
          <button className="custom-button" onClick={ordersPage}>Go To Orders</button>
        </div>
      </div>
      <div>
        <OrderChart orderData={orders} />
      </div>

    </div>
  );
};

export default OrderDashboard;
