import React from 'react';
import { Link } from 'react-router-dom';
import restaurants from '../RestaurantData/RestaurantData';
import './FeaturedRestaurant.css';

const FeaturedRestaurants = () => {
  return (
    <div className="featured-restaurants">
      <h1 className="featured-title">Featured Restaurants</h1>
      <div className="restaurant-grid">
        {restaurants.map((restaurant, index) => (
          <Link
            key={index}
            to={`/restaurant/${restaurant.name}`}
            className="restaurant-card"
          >
            <img
              src={restaurant.logo}
              alt={`${restaurant.name} logo`}
              className="restaurant-logo"
            />
            <div className="restaurant-info">
              <h2 className="restaurant-name">{restaurant.name}</h2>
              <div className="restaurant-rating">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={`star ${i < restaurant.rating ? 'filled' : ''}`}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
              <p className="restaurant-cuisine">{restaurant.cuisine}</p>
              <div className="restaurant-delivery">
                <span className="delivery-icon">&#128666;</span> Delivery
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRestaurants;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './FeaturedRestaurant.css';

// // Define the component
// const FeaturedRestaurants = ({ restaurants = [] }) => {
//   console.log("Restaurants:", restaurants);

//   // Ensure `restaurants` is an array and handle cases where it's not
//   const featured = Array.isArray(restaurants) ? restaurants.slice(0, 3) : [];

//   return (
//     <div className="featured-restaurants">
//       <h1 className="featured-title">Featured Restaurants</h1>
//       <div className="restaurant-grid">
//         {featured.map((restaurant) => (
//           <Link
//             key={restaurant.name}
//             to={`/restaurant/${restaurant.name}`}
//             className="restaurant-link"
//           >
//             <div className="restaurant-card">
//               <img
//                 src={restaurant.logo}
//                 alt={`${restaurant.name} logo`}
//                 className="restaurant-logo"
//               />
//               <div className="restaurant-info">
//                 <h2 className="restaurant-name">{restaurant.name}</h2>
//                 <div className="restaurant-rating">
//                   {Array.from({ length: 5 }, (_, i) => (
//                     <span
//                       key={i}
//                       className={`star ${i < restaurant.rating ? 'filled' : ''}`}
//                     >
//                       &#9733;
//                     </span>
//                   ))}
//                 </div>
//                 <p className="restaurant-cuisine">{restaurant.cuisine}</p>
//                 <div className="restaurant-delivery">
//                   <span className="delivery-icon">&#128666;</span> Delivery
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedRestaurants;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import './FeaturedRestaurant.css';

// const FeaturedRestaurants = ({ restaurants = [] }) => {
//   console.log("Restaurants:", restaurants);

//   // Ensure restaurants is an array and handle cases where it's not
//   const featured = Array.isArray(restaurants) ? restaurants.slice(0, 3) : [];

//   return (
//     <div className="featured-restaurants">
//       <h1 className="featured-title">Featured Restaurants</h1>
//       <div className="restaurant-grid">
//         {featured.map((restaurant) => (
//           <Link
//             key={restaurant.name}
//             to={`/restaurant/${restaurant.name}`}
//             className="restaurant-link"
//           >
//             <div className="restaurant-card">
//               <img
//                 src={restaurant.logo}
//                 alt={`${restaurant.name} logo`}
//                 className="restaurant-logo"
//               />
//               <div className="restaurant-info">
//                 <h2 className="restaurant-name">{restaurant.name}</h2>
//                 <div className="restaurant-rating">
//                   {Array.from({ length: 5 }, (_, i) => (
//                     <span
//                       key={i}
//                       className={`star ${i < restaurant.rating ? 'filled' : ''}`}
//                     >
//                       &#9733;
//                     </span>
//                   ))}
//                 </div>
//                 <p className="restaurant-cuisine">{restaurant.cuisine}</p>
//                 <div className="restaurant-delivery">
//                   <span className="delivery-icon">&#128666;</span> Delivery
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedRestaurants;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import './FeaturedRestaurant.css';

// const FeaturedRestaurants = ({ restaurants = [] }) => {
//   // Ensure restaurants is an array and handle cases where it's not
//   const featured = Array.isArray(restaurants) ? restaurants.slice(0, 6) : [];

//   return (
//     <div className="featured-restaurants">
//       <h1 className="featured-title">Featured Restaurants</h1>
//       <div className="restaurant-grid">
//         {featured.map((restaurant) => (
//           <Link 
//             key={restaurant.name} 
//             to={`/restaurant/${restaurant.name}`} 
//             className="restaurant-link"
//           >
//             <div className="restaurant-card">
//               <img
//                 src={restaurant.logo}
//                 alt={`${restaurant.name} logo`}
//                 className="restaurant-logo"
//               />
//               <div className="restaurant-info">
//                 <h2 className="restaurant-name">{restaurant.name}</h2>
//                 <div className="restaurant-rating">
//                   {Array.from({ length: 5 }, (_, i) => (
//                     <span
//                       key={i}
//                       className={`star ${i < restaurant.rating ? 'filled' : ''}`}
//                     >
//                       &#9733;
//                     </span>
//                   ))}
//                 </div>
//                 <p className="restaurant-cuisine">{restaurant.cuisine}</p>
//                 <div className="restaurant-delivery">
//                   <span className="delivery-icon">&#128666;</span> Delivery
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedRestaurants;
