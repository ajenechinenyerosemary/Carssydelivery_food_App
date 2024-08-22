// import React from 'react';
// import './ExploreMenu.css';
// import { menu_list } from '../../assets/assets';

// const ExploreMenu = ({ category, setCategory }) => {
//   return (
//     <div className='explore-menu' id='explore-menu'>
//       <h1>Explore our menu</h1>
//       <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes</p>
//       <div className='explore-menu-list'>
//         {menu_list.map((item, index) => (
//           <div 
//             onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} 
//             key={index} 
//             className='explore-menu-list-item'
//           >
//             <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt={item.menu_name} />
//             <p>{item.menu_name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ExploreMenu;

import React, { useState, useContext } from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';
import FoodDisplay from '../Context/FoodDisplay/FoodDisplay'; // Adjust the path as necessary
import { StoreContext } from '../Context/StoreContext';

const ExploreMenu = () => {
  const [category, setCategory] = useState("All");
  const { food_list } = useContext(StoreContext);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes</p>
      <div className='explore-menu-list'>
        {menu_list.map((item, index) => (
          <div 
            onClick={() => handleCategoryChange(item.menu_name)} 
            key={index} 
            className='explore-menu-list-item'
          >
            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <FoodDisplay category={category} />
    </div>
  );
}

export default ExploreMenu;


