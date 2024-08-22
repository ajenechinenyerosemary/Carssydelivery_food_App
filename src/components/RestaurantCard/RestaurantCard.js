import React from 'react';
import Menu from '../../pages/Menu';
import Reviews from '../FeaturedRestaurants/Reviews';
import Info from '../FeaturedRestaurants/Info';
import './RestaurantCard.css';


const RestaurantCard = ({ restaurant }) => {
  return (
    <div>
      <img src={restaurant.headerImage} alt={`${restaurant.name} header`} />
      <img src={restaurant.logo} alt={`${restaurant.name} logo`} />
      <h2>{restaurant.name}</h2>
      <Menu categories={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
      <Info info={restaurant.info} />
    </div>
  );
};

export default RestaurantCard;
