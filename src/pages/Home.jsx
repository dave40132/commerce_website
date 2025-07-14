import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import ResponsiveDemo from '../components/ResponsiveDemo';

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <ResponsiveDemo />
    </div>
  );
};

export default Home;