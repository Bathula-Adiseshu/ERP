import React, { useState, useEffect } from 'react';

const EditProductForm = ({ product, onEditProduct, onCancelEdit }) => {
    const [editedProduct, setEditedProduct] = useState(product);

    useEffect(() => {
        setEditedProduct(product);
    }, [product]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct({ ...editedProduct, [name]: value });
    };

    const handleSave = () => {
        onEditProduct(editedProduct);
    };

    return (
        <div className="product-form-container">
            <label className="form-label">
                Name:
                <input
                    className="form-label"
                    type="text"
                    name="name"
                    value={editedProduct.name}
                    onChange={handleInputChange}
                />
            </label>
            <label className="form-label">
                Category:
                <input
                    className="form-label"
                    type="text"
                    name="category"
                    value={editedProduct.category}
                    onChange={handleInputChange}
                />
            </label>
            <label className="form-label">
                Price:
                <input
                    className="form-label"
                    type="number"
                    name="price"
                    value={editedProduct.price}
                    onChange={handleInputChange}
                />
            </label>
            <label className="form-label">
                Quantity:
                <input
                    className="form-label"
                    type="number"
                    name="quantity"
                    value={editedProduct.quantity}
                    onChange={handleInputChange}
                />
            </label>
            <div className="form-buttons">
                <button className="submit-button" type="submit" onClick={handleSave}>
                    Save
                </button>
                <button className="cancel-button" type="button" onClick={onCancelEdit}>
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default EditProductForm;
