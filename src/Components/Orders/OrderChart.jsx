// OrderChart.js

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const OrderChart = () => {
  const chartRef = useRef();
  const chartInstance = useRef(null);

  useEffect(() => {
    // Retrieve order data from localStorage
    const storedOrders = localStorage.getItem('orderData');
    const orderData = storedOrders ? JSON.parse(storedOrders) : [];

    const ctx = chartRef.current.getContext('2d');

    const data = {
      labels: ['Shipped', 'Pending', 'Delivered'],
      datasets: [
        {
          data: [
            orderData.filter((order) => order.status === 'Shipped').length,
            orderData.filter((order) => order.status === 'Pending').length,
            orderData.filter((order) => order.status === 'Delivered').length,
          ],
          backgroundColor: ['#36A2EB', '#FFCE56', '#4CAF50'],
        },
      ],
    };

    const options = {
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
        },
        tooltip: {
          enabled: true,
        },
      },
    };

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: 'pie',
      data,
      options,
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div >
      <h3 className='headings orderstatus'>Order Status Chart</h3>
      <canvas ref={chartRef} width="400" height="200"></canvas>
    </div>
  );
};

export default OrderChart;
