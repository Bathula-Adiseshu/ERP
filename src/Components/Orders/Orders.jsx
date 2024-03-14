// OrderDashboard.js

import React, { useState, useEffect } from 'react';
import { orderData as initialOrderData } from '../Data/Data';
import NavBar from '../NavBar/Navbar';
import OrderChart from './OrderChart';

const Orders = () => {
    const [orders, setOrders] = useState(initialOrderData);
    const [editedOrderId, setEditedOrderId] = useState(null);
    const [newStatus, setNewStatus] = useState('');

    // Function to persist orders to local storage
    const saveOrdersToLocalStorage = (updatedOrders) => {
        localStorage.setItem('orderData', JSON.stringify(updatedOrders));
    };

    // Function to update the status of an order
    const updateOrderStatus = () => {
        const updatedOrders = orders.map(order =>
            order.orderId === editedOrderId ? { ...order, status: newStatus } : order
        );
        setOrders(updatedOrders);
        setEditedOrderId(null);
        setNewStatus('');
        saveOrdersToLocalStorage(updatedOrders);
    };

    // Function to delete an order
    const deleteOrder = (orderId) => {
        const updatedOrders = orders.filter(order => order.orderId !== orderId);
        setOrders(updatedOrders);
        saveOrdersToLocalStorage(updatedOrders);
    };

    useEffect(() => {
        // Load orders from local storage on component mount
        const storedOrders = localStorage.getItem('orderData');
        if (storedOrders) {
            setOrders(JSON.parse(storedOrders));
        }
    }, []);

    return (
        <div>
            <NavBar />
            <div className='orders'>
                <div className='orderContainer'>
                    <h2 className='headings'>Orders</h2>
                    {/* Display the list of orders */}
                    <ul className='orderList'>
                        {orders.map(order => (
                            <li key={order.orderId} className='orderItem'>
                                {editedOrderId === order.orderId ? (
                                    <div>
                                        <label for="status">
                                            New Status:
                                            <select className='status-button' name="status" onChange={(e) => setNewStatus(e.target.value)}>
                                                <option value="Delivered">Delivered</option>
                                                <option value="Pending">Pending</option>
                                                <option value="Shipped">Shipped</option>
                                            </select>
                                        </label>
                                        <button className="custom-button update" onClick={updateOrderStatus}>Update Status</button>
                                    </div>
                                ) : (
                                    <div>
                                        <div>Order ID: {order.orderId} </div>
                                        <div>Customer: {order.customerName} </div>
                                        <div>Order Date: {order.orderDate}</div>
                                        <div>Order Status: {order.status}</div>
                                        <div><button className="custom-button update" onClick={() => setEditedOrderId(order.orderId)}>
                                            Update Status
                                        </button></div>
                                        <div>
                                            <button className="custom-button delete" onClick={() => deleteOrder(order.orderId)}>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='chart-container'>
                    <OrderChart orderData={orders} />
                </div>
            </div>

        </div>
    );
};

export default Orders;
