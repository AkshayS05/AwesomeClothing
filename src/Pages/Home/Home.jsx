import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Announcement from '../../Components/Announcement/Announcement';
import Slider from '../../Components/Slider/Slider';
import Categories from '../../Components/Categories/Categories';

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
