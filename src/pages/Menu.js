import React, { useState } from 'react';
import MenuItem from '../components/MenuItem';

const Menu = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <div>
      <h3>Menu</h3>
      <input type="text" placeholder="Search this menu" />
      {categories.map(category => (
        <div key={category.category}>
          <h4 onClick={() => handleCategoryClick(category.category)}>
            {category.category}
          </h4>
          {activeCategory === category.category && (
            <div>
              {category.items.map(item => (
                <MenuItem key={item.name} item={item} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Menu;
