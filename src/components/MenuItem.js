import React from 'react';

const MenuItem = ({ item }) => {
  return (
    <div>
      <span>{item.name}</span>
      <span>{item.price}</span>
      {item.isNew && <span>NEW</span>}
      <button>Add</button>
    </div>
  );
};

export default MenuItem;
