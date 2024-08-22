import React, { useState } from 'react';
import axios from 'axios';

function MenuItemForm() {
    const [formData, setFormData] = useState({
        restaurant: '',
        name: '',
        description: '',
        price: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        
        const dataToSubmit = {
            ...formData,
            price: parseFloat(formData.price)
        };

        axios.post('http://127.0.0.1:8000/api/menu_items/', dataToSubmit)
            .then(response => {
                console.log('Menu item added:', response.data);
            })
            .catch(error => {
                console.error('There was an error adding the menu item!', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Restaurant ID:
                <input type="number" name="restaurant" value={formData.restaurant} onChange={handleChange} required />
            </label>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
                Description:
                <input type="text" name="description" value={formData.description} onChange={handleChange} required />
            </label>
            <label>
                Price:
                <input type="number" step="0.01" name="price" value={formData.price} onChange={handleChange} required />
            </label>
            <button type="submit">Add Menu Item</button>
        </form>
    );
}

export default MenuItemForm;
