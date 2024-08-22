import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import StoreContextProvider from './components/Context/StoreContext';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Footer from './components/Footer/Footer';
import ExploreMenu from './components/ExploreMenu/ExploreMenu';


// const fetchRestaurants = async () => {
//   try {
//     const response = await axios.get('/api/restaurants/');
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching restaurants:", error);
//     throw error;
//   }
// };

function App() {
  const [showLogin, setShowLogin] = useState(false);
  // const [restaurants, setRestaurants] = useState([]);

  // useEffect(() => {
  //   const getRestaurants = async () => {
  //     try {
  //       const fetchedRestaurants = await fetchRestaurants();
  //       setRestaurants(fetchedRestaurants);
  //     } catch (error) {
  //       console.error("Failed to fetch restaurants:", error);
       
  //     }
  //   };

  //   getRestaurants();
  // }, []);

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
        </Routes>
        <Footer />
      </div>
    </StoreContextProvider>
  );
}

export default App;
