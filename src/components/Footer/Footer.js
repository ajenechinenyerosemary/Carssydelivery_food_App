import React from 'react';
import './Footer.css';
import assets from '../../assets/assets';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
          <img src={assets.logo} alt='logo' />
          <p>
            Below are our social media handles, follow us for better experience!
          </p>
          <div className='footer-social-icons'>
            <ul>
              <li><a href='https://facebook.com'><img src={assets.facebook_icon} alt='Facebook' /></a></li>
              <li><a href='https://whatsapp.com'><img src={assets.whatsapp_icon} alt='WhatsApp' /></a></li>
              <li><a href='https://twitter.com'><img src={assets.twitter_icon} alt='Twitter' /></a></li>
              <li><a href='https://linkedin.com'><img src={assets.Linkedin_icon} alt='LinkedIn' /></a></li>
              <li><a href='https://instagram.com'><img src={assets.Instagram_icon} alt='Instagram' /></a></li>
            </ul>
          </div>
        </div>
        <div className='footer-content-center'>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul> 
        </div>
        <div className='footer-content-right'>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+2348067543876</li>
            <li>contact@gmail.com</li>
          </ul>   
        </div>
      </div>
      <div className='scroll-to-top' onClick={scrollToTop}>
        <img src={assets.UpArrow_icon} alt='Scroll to top' />
      </div>
      <p className='footer-copyright'>
        Copyright 2024 @ carssydelivery.com. All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;

