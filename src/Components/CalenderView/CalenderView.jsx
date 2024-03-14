// OrderCalendar.js

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { orderData } from '../Data/Data';
import NavBar from '../NavBar/Navbar';

const CalenderView = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Filter orders based on the selected date
  const filteredOrders = orderData.filter(order =>
    new Date(order.deliveryDate).toLocaleDateString() === selectedDate.toLocaleDateString()
  );

  return (
    <div>
      <NavBar/>
      <div className="calendar-container">
      <h2 className='headings'>Order Calendar</h2>
      
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
      />
      {/* <input  onChange={setSelectedDate} value={selectedDate} type='date'></input> */}
      <div  className="orders-on-date">
      <h3 className='headings'>Orders on {selectedDate.toLocaleDateString()}</h3>
      <ul>
        {filteredOrders.map(order => (
          <li key={order.orderId}>
            Order ID: {order.orderId} - 
            Customer Name: {order.customerName} - 
            Status:{order.status === "Shipped" ? <span  className='shipped'>{order.status}</span>:
            <span>{order.status==="Delivered"?<span className='delivered'>{order.status}</span>:
            <span className='pending'>{order.status}</span>}</span>}
          </li>
        ))}
      </ul>
      </div>
      </div>
    </div>
  );
};

export default CalenderView;
