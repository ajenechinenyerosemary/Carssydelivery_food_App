import React, { useContext, useState } from 'react';
import './Layout.css';
import assets from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../Context/StoreContext';

const Layout = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="Layout">
      <div className="layout-left">
        <Link to="/"><img src={assets.logo} alt="Logo" className="logo" /></Link>
      </div>
      <div className="layout-center">
        <ul className="layout-menu">
          <li>
            <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
          </li>
          <li>
            <Link to="/explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</Link>
          </li>
          <li>
            <a href="#footer" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
          </li>
          <li>
            <Link to="/addrestaurant" onClick={() => setMenu("add-restaurant")} className={menu === "add-restaurant" ? "active" : ""}>Add Restaurant</Link>
          </li>
        </ul>
      </div>
      <div className="layout-right">
        <Link to="/cart" className="basket-link">
          <img src={assets.basket_icon} alt="Basket" className="basket_icon" />
          {getTotalCartAmount() > 0 && <div className="dot"></div>}
        </Link>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
        <div className="hamburger" onClick={toggleSidebar}>☰</div>
      </div>
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <img src={assets.cross_icon} alt="Close" className="close-icon" onClick={toggleSidebar} />
          <Link to="/cart" className="sidebar-basket-link" onClick={toggleSidebar}>
            <img src={assets.basket_icon} alt="Basket" className="basket_icon" />
            {getTotalCartAmount() > 0 && <div className="dot"></div>}
          </Link>
        </div>
        <ul className="sidebar-menu">
          <li>
            <Link to="/" onClick={() => { setMenu("home"); toggleSidebar(); }} className={menu === "home" ? "active" : ""}>Home</Link>
          </li>
          <li>
            <Link to="/explore-menu" onClick={() => { setMenu("menu"); toggleSidebar(); }} className={menu === "menu" ? "active" : ""}>Menu</Link>
          </li>
          <li>
            <a href="#footer" onClick={() => { setMenu("contact-us"); toggleSidebar(); }} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
          </li>
          <li>
            <Link to="/addrestaurant" onClick={() => { setMenu("add-restaurant"); toggleSidebar(); }} className={menu === "add-restaurant" ? "active" : ""}>Add Restaurant</Link>
          </li>
          <li className="sign-in-button">
            <button onClick={() => { setShowLogin(true); toggleSidebar(); }}>Sign in</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Layout;