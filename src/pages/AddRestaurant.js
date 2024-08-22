import React, { useState } from 'react';
import './AddRestaurant.css';

const AddRestaurant = () => {
  const [formData, setFormData] = useState({
    restaurantName: '',
    owner: '',
    address: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    state: '',
    logo: null,
    menuItems: [{ name: '', price: '', image: null }]
  });

  const [showLoginForm, setShowLoginForm] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'logo' && files) {
      setFormData({ ...formData, [name]: files[0] });
    } else if (name.startsWith('menuItem')) {
      const index = parseInt(name.split('-')[1]);
      const field = name.split('-')[2];
      const updatedMenuItems = formData.menuItems.map((item, i) =>
        i === index ? { ...item, [field]: field === 'image' ? files[0] : value } : item
      );
      setFormData({ ...formData, menuItems: updatedMenuItems });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleAddMenuItem = () => {
    setFormData({
      ...formData,
      menuItems: [...formData.menuItems, { name: '', price: '', image: null }]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', loginData);
    // Handle login logic here
  };

  return (
    <div className="add-restaurant">
      {!showLoginForm ? (
        <>
          <h2>Add Restaurant</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Restaurant Name
              <input type="text" name="restaurantName" value={formData.restaurantName} onChange={handleChange} required />
            </label>
            <label>
              Owner
              <input type="text" name="owner" value={formData.owner} onChange={handleChange} required />
            </label>
            <label>
              Address
              <input type="text" name="address" value={formData.address} onChange={handleChange} required />
            </label>
            <label>
              E-Mail Address
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
              Mobile Number
              <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required />
            </label>
            <label>
              Password
              <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </label>
            <label>
              Confirm Password
              <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
            </label>
            <label>
              State
              <input type="text" name="state" value={formData.state} onChange={handleChange} required />
            </label>
            <label>
              Logo
              <input type="file" name="logo" onChange={handleChange} required />
            </label>
            <h3>Menu Items</h3>
            {formData.menuItems.map((item, index) => (
              <div key={index} className="menu-item">
                <label>
                  Name
                  <input type="text" name={`menuItem-${index}-name`} value={item.name} onChange={handleChange} required />
                </label>
                <label>
                  Price
                  <input type="text" name={`menuItem-${index}-price`} value={item.price} onChange={handleChange} required />
                </label>
                <label>
                  Image
                  <input type="file" name={`menuItem-${index}-image`} onChange={handleChange} required />
                </label>
              </div>
            ))}
            <button type="button" onClick={handleAddMenuItem}>Add Menu Item</button>
            <button type="submit">Submit</button>
          </form>
          <p>
            Already Registered? <a href="#" onClick={(e) => { e.preventDefault(); setShowLoginForm(true); }}>Login Here</a>
          </p>
        </>
      ) : (
        <>
          <h2>Login</h2>
          <form onSubmit={handleLoginSubmit}>
            <label>
              E-Mail Address
              <input type="email" name="email" value={loginData.email} onChange={handleLoginChange} required />
            </label>
            <label>
              Password
              <input type="password" name="password" value={loginData.password} onChange={handleLoginChange} required />
            </label>
            <button type="submit">Login</button>
          </form>
          <p>
            <a href="#" onClick={(e) => { e.preventDefault(); setShowLoginForm(false); }}>Back to Registration</a>
          </p>
        </>
      )}
    </div>
  );
};

export default AddRestaurant;
