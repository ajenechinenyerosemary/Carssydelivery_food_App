import React, { useContext, useState } from 'react';
import './Cart.css';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../components/Context/StoreContext';


const Cart = () => {
  const { cartItems, food_list, removeFromCart, addToCart, getTotalCartAmount, applyPromoCode, discount, deliveryFee } = useContext(StoreContext);
  const [promoCodeInput, setPromoCodeInput] = useState("");

  const handleApplyPromoCode = () => {
    applyPromoCode(promoCodeInput);
  };

  const discountedTotal = getTotalCartAmount() * (1 - discount);

  const navigate = useNavigate();


  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <div className='quantity-control'>
                    <button onClick={() => removeFromCart(item._id)}>-</button>
                    <p>{cartItems[item._id]}</p>
                    <button onClick={() => addToCart(item._id)}>+</button>
                  </div>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id, true)} className='cross'>x</p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Total</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            {discount > 0 && (
              <>
                <hr />
                <div className='cart-total-details'>
                  <p>Discount</p>
                  <p>- ${getTotalCartAmount() * discount}</p>
                </div>
              </>
            )}
            <hr />
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className='cart-promocode'>
          <div>
            <p>If you have a promo code, enter it here</p>
            <div className='cart-promocode-input'>
              <input
                type='text'
                placeholder='Promo code'
                value={promoCodeInput}
                onChange={(e) => setPromoCodeInput(e.target.value)}
              />
              <button onClick={handleApplyPromoCode}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

