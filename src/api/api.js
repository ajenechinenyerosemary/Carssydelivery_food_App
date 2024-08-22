import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/restaurants'; 

export const fetchRestaurants = async () => {
  try {
    const response = await axios.get(`${API_URL}/restaurants`);
    return response.data;
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    throw error;
  }
};
