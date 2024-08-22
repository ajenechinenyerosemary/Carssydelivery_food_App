
import React, { useContext, useState } from 'react';
import { StoreContext } from '../components/Context/StoreContext';
import assets from '../assets/assets';
import './PlaceOrder.css';

const PlaceOrder = () => {
  const { getTotalCartAmount, discount, deliveryFee } = useContext(StoreContext);
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', street: '', city: '', state: '',
    zipCode: '', country: '', phone: '', cardName: '', cardNumber: '',
    expiryDate: '', cvv: '', paymentMethod: 'debitCreditCard',
    creditClaim: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  

  // const handleChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   setFormData(prevData => ({
  //     ...prevData,
  //     [name]: type === 'checkbox' ? checked : value,
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);
    // Implement form submission logic here
  };

  // const validateCardDetails = () => {
  //   const newErrors = {};
  //   const cardNumberRegex = /^[0-9]{16}$/;
  //   const [month, year] = formData.expiryDate.split('/');
  //   const currentYear = new Date().getFullYear() % 100;
  //   const currentMonth = new Date().getMonth() + 1;

  //   if (!cardNumberRegex.test(formData.cardNumber)) {
  //     newErrors.cardNumber = "The card type you entered isn't supported. Try a different card.";
  //   }
  //   if (parseInt(year) < currentYear || (parseInt(year) === currentYear && parseInt(month) < currentMonth)) {
  //     newErrors.expiryDate = "The expiration date you entered is in the past.";
  //   }
  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  // const handleNextStep = () => {
  //   console.log('handleNextStep called');
  //   if (step === 1) {
  //     setStep(2);
  //   } else if (step === 2) {
  //     if (validateCardDetails()) {
  //       console.log('Payment details are valid');
  //       setStep(3);
  //     } else {
  //       console.log('Payment details are invalid');
  //     }
  //   } else if (step === 3) {
  //     setStep(4);
  //   }
  // };

  const validateCardDetails = () => {
    const newErrors = {};
    const cardNumberRegex = /^[0-9]{16}$/;
    const [month, year] = formData.expiryDate.split('/');
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;
  
    if (!cardNumberRegex.test(formData.cardNumber.replace(/\s/g, ''))) {
      newErrors.cardNumber = "The card type you entered isn't supported. Try a different card.";
    }
    if (!month || !year || parseInt(year) < currentYear || (parseInt(year) === currentYear && parseInt(month) < currentMonth)) {
      newErrors.expiryDate = "The expiration date you entered is in the past.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleNextStep = () => {
    console.log('handleNextStep called');
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      if (validateCardDetails()) {
        console.log('Payment details are valid');
        setStep(4);
      } else {
        console.log('Payment details are invalid');
      }
    } else if (step === 4) {
      setStep(5);
    }
  };
   

  const renderDeliveryInfo = () => (
    <>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input type='text' name='firstName' placeholder='First name' value={formData.firstName} onChange={handleChange} />
          <input type='text' name='lastName' placeholder='Last name' value={formData.lastName} onChange={handleChange} />
        </div>
        <input type='email' name='email' placeholder='Email address' value={formData.email} onChange={handleChange} />
        <input type='text' name='street' placeholder='Street' value={formData.street} onChange={handleChange} />
        <div className='multi-fields'>
          <input type='text' name='city' placeholder='City' value={formData.city} onChange={handleChange} />
          <input type='text' name='state' placeholder='State' value={formData.state} onChange={handleChange} />
        </div>
        <div className='multi-fields'>
          <input type='text' name='zipCode' placeholder='Zip code' value={formData.zipCode} onChange={handleChange} />
          <input type='text' name='country' placeholder='Country' value={formData.country} onChange={handleChange} />
        </div>
        <input type='text' name='phone' placeholder='Phone' value={formData.phone} onChange={handleChange} />
      </div>
      <div className='place-order-right'>
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
              <p>${deliveryFee}</p>
            </div>
          </div>
          <button type='button' onClick={handleNextStep}>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </>
  );

  const renderPaymentMethod = () => (
    <div className='payment-method'>
      <h2>Add payment method</h2>
      <div className='payment-option'>
        <div className='payment-option-inner'>
          <input
            type='radio'
            id='debitCreditCard'
            name='paymentMethod'
            value='debitCreditCard'
            checked={formData.paymentMethod === 'debitCreditCard'}
            onChange={handleChange}
          />
          <div className='payment-option-content'>
            <label htmlFor='debitCreditCard'>Debit or Credit Card</label>
            <div className='card-icons'>
              <img src={assets.visa_icon} alt='VISA' />
              <img src={assets.master_card} alt='Master Card' />
              <img src={assets.unionpay_icon} alt='Union Pay Card' />
            </div>
          </div>
        </div>
      </div>
      <div className='credit-claim'>
        <input type='checkbox' id='creditClaim' name='creditClaim' checked={formData.creditClaim} onChange={handleChange} />
        <label htmlFor='creditClaim'>I have a credit to claim</label>
      </div>
      <p>Your payment methods are saved and stored securely.</p>
      <p><a href='/terms-and-conditions'>Terms apply</a></p>
      <button type='button' onClick={handleNextStep}>Next</button>
    </div>
  );

  const renderCardDetails = () => (
    <div className='credit-card-details'>
      <h2>Debit or Credit Card</h2>
      <div className='card-form'>
        <div className='card-details-left'>
          <input type='text' name='cardName' placeholder='Name on card' value={formData.cardName} onChange={handleChange} />
          <input type='text' name='cardNumber' placeholder='Card number' value={formData.cardNumber} onChange={handleChange} className={errors.cardNumber ? 'error' : ''} />
          {errors.cardNumber && <p className='error-message'>{errors.cardNumber}</p>}
          <div className='multi-fields'>
            <input type='text' name='expiryDate' placeholder='MM/YY' value={formData.expiryDate} onChange={handleChange} className={errors.expiryDate ? 'error' : ''} />
            <input type='text' name='cvv' placeholder='CVV' value={formData.cvv} onChange={handleChange} />
          </div>
          {errors.expiryDate && <p className='error-message'>{errors.expiryDate}</p>}
        </div>
        <div className='card-details-right'>
          <img src={assets.visa_icon} alt='VISA' />
          <img src={assets.master_card} alt='Master Card' />
          <img src={assets.unionpay_icon} alt='Union Pay Card' />
        </div>
      </div>
      <div className='secure-info'>
        <i className='padlock-icon'></i>
        <p>Your payment methods are saved and stored securely. <a href='#'>Terms apply</a></p>
      </div>
      <button type='button' onClick={handleNextStep}>Save</button>
    </div>
  );

  const renderOrderConfirmation = () => (
    <div className='order-confirmation'>
      <h2>Order Confirmation</h2>
      <p>Thank you for your order!</p>
      <p>We are processing your order and will send you an update when it has shipped.</p>
      {/* <button type='submit'>Place Order</button> */}
    </div>
  );

  return (
    <form className='place-order' onSubmit={handleSubmit}>
      {step === 1 && renderDeliveryInfo()}
      {step === 2 && renderPaymentMethod()}
      {step === 3 && renderCardDetails()}
      {step === 4 && renderOrderConfirmation()}
    </form>
  );
};

export default PlaceOrder;
