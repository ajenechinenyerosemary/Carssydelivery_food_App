import React from 'react';
import './AppDownload.css';
import assets from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download <br /> CarssyDelivery App</p>
      <div className='app-download-platforms'>
        <img src={assets.play_store} alt='play_Store' />
        <img src={assets.apple_store} alt='apple_Store' />
      </div>
    </div>
  );
}

export default AppDownload;
