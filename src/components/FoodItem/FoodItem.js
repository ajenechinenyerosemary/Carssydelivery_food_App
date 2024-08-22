import React, { useContext } from 'react';
import './FoodItem.css';
import assets from '../../assets/assets';
import { StoreContext } from '../Context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={image} alt={name} />
        {cartItems[id] ? (
          <div className='food-item-counter'>
            <img
              className='remove'
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt='remove icon'
            />
            <p>{cartItems[id]}</p>
            <img
              className='add'
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt='add icon'
            />
          </div>
        ) : (
          <img
            className='add initial-add'
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt='add icon'
          />
        )}
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img className='star_rating' src={assets.star_rating} alt='star rating' />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;

