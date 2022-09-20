import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import styled from 'styled-components';
import Announcement from '../../Components/Announcement/Announcement';

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
    </div>
  );
};

export default Home;
