import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';  

const Home = () => {
  const [category, setCategory] = useState("All");
  // const [headerImage, setHeaderImage] = useState("");

  return (
    <div>
      <Header />
    </div>
  );
};

export default Home;
