import React from 'react';
import { productData } from '../Data/Data';
import { useNavigate } from 'react-router-dom';

const ProductDashboard = () => {
  const productCount = productData.length;
  const navigate = useNavigate();
  const productsPage = () => {
    navigate('/products');
  };
  return (
    <div >
      <h2 className='headings'>Product Dashboard</h2>
        <div>
            <div>Total Products: {productCount}</div>
            <div className="button-container">
              <button className="custom-button" onClick={productsPage}>Go To Products</button>
            </div>
        </div>
    </div>
  );
};

export default ProductDashboard;
