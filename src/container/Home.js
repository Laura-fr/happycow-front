import React from "react";

import headerpic from "../assets/homepage.webp";
import VeganFood from "../components/VeganFood/index";
import VeganStore from "../components/VeganStore";
import VeganCosmetic from "../components/VeganCosmetic";
const Home = () => {
  return (
    <div>
      <div className="hometop">
        <h1>Find Vegan Restaurants Nearby</h1>
        <img alt={headerpic} src={headerpic} />
      </div>
      <div className="homecontainer">
        <h2>Vegan Food Near Me</h2>
        <div>
          <VeganFood />
        </div>
        <h2>Vegan Shop Near Me</h2>

        <VeganStore />

        <h2>Vegan Cosmetic Near Me</h2>
        <VeganCosmetic />
      </div>
    </div>
  );
};

export default Home;
