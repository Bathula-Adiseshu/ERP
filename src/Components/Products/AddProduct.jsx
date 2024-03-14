import React, { useState } from 'react';

const AddProductForm = ({ onAddProduct }) => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        category: "",
        price: 0,
        quantity: 0
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddProduct(newProduct);
        setNewProduct({
            name: "",
            category: "",
            price: 0,
            quantity: 0
        });
    };

    return (
        <div className="product-form-container">
            <form onSubmit={handleSubmit}>
                <label className="form-label">
                    Name:
                    <input
                        className="form-label"
                        type="text"
                        name="name"
                        placeholder='Enter product'
                        value={newProduct.name}
                        onChange={handleInputChange}
                    />
                </label>
                <label className="form-label">
                    Category:
                    <input
                        className="form-label"
                        type="text"
                        name="category"
                        placeholder='Enter category'
                        value={newProduct.category}
                        onChange={handleInputChange}
                    />
                </label>
                <label className="form-label">
                    Price:
                    <input
                        className="form-label"
                        type="number"
                        name="price"
                        value={newProduct.price}
                        onChange={handleInputChange}
                    />
                </label>
                <label className="form-label">
                    Quantity:
                    <input
                        className="form-label"
                        type="number"
                        name="quantity"
                        value={newProduct.quantity}
                        onChange={handleInputChange}
                    />
                </label>
                <div className="form-buttons">
                    <button type="submit" className="submit-button" >Add Product</button>
                </div>

            </form>
        </div>

    );
};

export default AddProductForm;
