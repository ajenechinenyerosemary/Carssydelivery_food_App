import React from 'react';
import { useParams } from 'react-router-dom';
import restaurants from './RestaurantData/RestaurantData';
import './RestaurantDetails.css';

const RestaurantDetails = () => {
  const { name } = useParams();
  const restaurant = restaurants.find(r => r.name === name);

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div className="restaurant-details">
      <img src={restaurant.headerImage} alt={`${restaurant.name} header`} className="header-image" />
      <img src={restaurant.logo} alt={`${restaurant.name} logo`} className="restaurant-details-logo" />
      <h1>{restaurant.name}</h1>
      <p>{restaurant.cuisine}</p>
      <div className="restaurant-info">
        <h2>Menu</h2>
        {restaurant.menu.map((category, index) => (
          <div key={index}>
            <h3>{category.category}</h3>
            <ul>
              {category.items.map((item, i) => (
                <li key={i}>{item.name} - ₦{item.price}</li>
              ))}
            </ul>
          </div>
        ))}
        <h2>Reviews</h2>
        {restaurant.reviews.map((review, index) => (
          <div key={index}>
            <p><strong>{review.name}:</strong> {review.comment}</p>
          </div>
        ))}
        <h2>Info</h2>
        <p>Address: {restaurant.info.address}</p>
        <p>Opening Hours: {Object.entries(restaurant.info.openingHours).map(([day, hours], index) => (
          <span key={index}>{day}: {hours}<br /></span>
        ))}</p>
        <p>Minimum Amount: {restaurant.info.otherInfo.minimumAmount}</p>
        <p>Delivery Charge: {restaurant.info.otherInfo.deliveryCharge}</p>
        <p>Estimated Delivery Time: {restaurant.info.otherInfo.estDeliveryTime}</p>
        <p>Branch Status: {restaurant.info.otherInfo.branchStatus}</p>
      </div>
    </div>
  );
};

export default RestaurantDetails;