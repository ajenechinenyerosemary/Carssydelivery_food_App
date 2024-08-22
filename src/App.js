import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import StoreContextProvider from './components/Context/StoreContext';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder';
import AddRestaurant from './pages/AddRestaurant';
import RestaurantList from './components/RestaurantList';
import FeaturedRestaurants from './components/FeaturedRestaurants/FeaturedRestaurants';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Footer from './components/Footer/Footer';
import RestaurantDetails from './components/RestaurantDetails';
import ExploreMenu from './components/ExploreMenu/ExploreMenu';
import staticRestaurants from './components/RestaurantData/RestaurantData';

const fetchRestaurants = async () => {
  try {
    const response = await axios.get('/api/restaurants/');
    return response.data;
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    throw error;
  }
};

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const fetchedRestaurants = await fetchRestaurants();
        setRestaurants(fetchedRestaurants);
      } catch (error) {
        console.error("Failed to fetch restaurants:", error);
        // Fallback to static data if API fails
        setRestaurants(staticRestaurants);
      }
    };

    getRestaurants();
  }, []);

  return (
    <StoreContextProvider>
      <div className='app'>
        <Layout setShowLogin={setShowLogin} />
        {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore-menu" element={<ExploreMenu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/addrestaurant" element={<AddRestaurant />} />
          <Route path="/restaurants" element={<RestaurantList restaurants={restaurants} />} />
          <Route path="/featured" element={<FeaturedRestaurants restaurants={restaurants} />} />
          <Route path="/restaurant/:name" element={<RestaurantDetails />} />
        </Routes>
        <Footer />
      </div>
    </StoreContextProvider>
  );
}

export default App;
