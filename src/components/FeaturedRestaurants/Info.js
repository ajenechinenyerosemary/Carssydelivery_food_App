import React from 'react';

const Info = ({ info }) => {
  return (
    <div>
      <h3>Info</h3>
      <div>
        <h4>Address</h4>
        <p>{info.address}</p>
        {/* Add map component here */}
      </div>
      <div>
        <h4>Opening Hours</h4>
        {Object.keys(info.openingHours).map(day => (
          <p key={day}>
            {day}: {info.openingHours[day]}
          </p>
        ))}
      </div>
      <div>
        <h4>Other Info</h4>
        <p>Minimum Amount: {info.otherInfo.minimumAmount}</p>
        <p>Delivery Charge: {info.otherInfo.deliveryCharge}</p>
        <p>Est. Delivery Time: {info.otherInfo.estDeliveryTime}</p>
        <p>Branch Status: {info.otherInfo.branchStatus}</p>
      </div>
    </div>
  );
};

export default Info;
