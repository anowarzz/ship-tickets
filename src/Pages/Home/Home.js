import React from "react";
import Categories from "../../components/Categories/Categories";
import HeroSection from "../../components/HeroSection/HeroSection";
import PopularSection from "../../components/PopularSection/PopularSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Categories />
      <PopularSection />
    </div>
  );
};

export default Home;
