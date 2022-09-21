import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Announcement from '../../Components/Announcement/Announcement';
import Slider from '../../Components/Slider/Slider';
import Categories from '../../Components/Categories/Categories';
import Products from '../../Components/Products/Products';
import Newsletter from '../../Components/NewsLetter/Newsletter';

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </div>
  );
};

export default Home;
