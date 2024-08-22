import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';  
import FeaturedRestaurants from '../components/FeaturedRestaurants/FeaturedRestaurants';
import restaurants from '../components/RestaurantData/RestaurantData';

const Home = () => {
  const [category, setCategory] = useState("All");
  const [headerImage, setHeaderImage] = useState("");

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    const categoryData = restaurants.flatMap(restaurant => restaurant.menu)
      .find(item => item.category === newCategory);
    setHeaderImage(categoryData ? categoryData.header_image : "");
  };

  console.log("Rendering Home component with restaurants:", restaurants);

  return (
    <div>
      <Header />
      <FeaturedRestaurants />
      <div className="restaurant-links">
        {restaurants.map((restaurant) => (
          <Link key={restaurant.name} to={`/restaurant/${restaurant.name}`}>
            <div className="restaurant-summary">
              <img src={restaurant.logo} alt={`${restaurant.name} logo`} />
              <h3>{restaurant.name}</h3>
              <p>{restaurant.cuisine}</p>
            </div>
          </Link>
        ))}
      </div>
      {/* <ExploreMenu category={category} setCategory={handleCategoryChange} /> */}
      {/* <FoodDisplay category={category} headerImage={headerImage} /> */}
      {/* <AppDownload /> */}
    </div>
  );
};

export default Home;
