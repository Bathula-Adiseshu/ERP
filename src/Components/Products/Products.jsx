import React, { useState, useEffect } from 'react';
import { productData as initialProductData } from '../Data/Data';
import EditProductForm from './EditProduct';
import AddProductForm from './AddProduct';
import NavBar from '../NavBar/Navbar';

const Products = () => {
  const [products, setProducts] = useState(initialProductData);
  const [editedProductId, setEditedProductId] = useState(null);

  useEffect(() => {
    // Load products from local storage on component mount
    const storedProducts = localStorage.getItem('productData');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  // Function to persist products to local storage
  const saveProductsToLocalStorage = (updatedProducts) => {
    localStorage.setItem('productData', JSON.stringify(updatedProducts));
  };

  // Function to add a new product
  const addProduct = (newProduct) => {
    const newProductId = Math.max(...products.map(product => product.id), 0) + 1;
    const updatedProducts = [...products, { ...newProduct, id: newProductId }];
    setProducts(updatedProducts);
    saveProductsToLocalStorage(updatedProducts);
  };

  // Function to edit a product
  const editProduct = (editedProduct) => {
    const updatedProducts = products.map(product =>
      product.id === editedProduct.id ? editedProduct : product
    );
    setProducts(updatedProducts);
    setEditedProductId(null);
    saveProductsToLocalStorage(updatedProducts);
  };

  // Function to delete a product
  const deleteProduct = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
    saveProductsToLocalStorage(updatedProducts);
  };

  const onCancelEdit = () => {
    setEditedProductId(null);
  };

  return (
    <div>
      <NavBar />
      <h2 className='headings'>Products</h2>
      {editedProductId !== null ? (
        <EditProductForm
          product={products.find(product => product.id === editedProductId)}
          onEditProduct={editProduct}
          onCancelEdit={onCancelEdit}
        />
      ) : (
        <div className='product-container'>
          {/* Display the list of products */}
          <div className='list-container'>
          <ul className='product-list'>
            {products.map(product => (
              <li className="product-list-container" key={product.id}>
                <div className="product-details">
                  <div>
                    <div className="product-name">{product.name}</div>
                    <div className="product-category">{product.category}</div>
                  </div>
                  <div>
                    <div className="product-price">Rs {product.price}</div>
                    <div className="product-quantity">Qty: {product.quantity}</div>
                  </div>
                </div>
                <div className="product-buttons">
                  <button className="edit-button" onClick={() => setEditedProductId(product.id)}>
                    Edit
                  </button>
                  <button className="delete-button" onClick={() => deleteProduct(product.id)}>
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
          </div>
          <div className='product-form'>
            {/* Form to add a new product */}
            <h3 className='headings'>Add New Product</h3>
            <AddProductForm onAddProduct={addProduct} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
