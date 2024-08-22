import React, { useEffect, useState } from 'react';
import { fetchRestaurants } from '../api/api';
import axios from 'axios'; 


const API_URL = 'http://127.0.0.1:8000/api';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([
    { id: 1, name: 'Mega Chicken' },
    { id: 2, name: 'Sweet Sensation' },
    { id: 3, name: 'Kilimanjaro' },
    { id: 4, name: "Big Fish Tanks'n'Tummy" },
    { id: 5, name: 'Eat Right' },
    { id: 6, name: 'Cold Stone' },
  ]);
  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        const response = await axios.get(`${API_URL}/restaurants`);
        setRestaurants(response.data);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    };

    fetchRestaurantData();
  }, []);

  return (
    <div>
      <h2>Restaurants in Lagos State</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
