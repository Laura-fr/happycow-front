import React from "react";
import { Link } from "react-router-dom";

//Import components

import Search from "../components/Search";

import headerpic from "../assets/homepage.webp";
import VeganFood from "../components/VeganFood";
import VeganStore from "../components/VeganStore";
import VeganCosmetic from "../components/VeganCosmetic";

const Home = () => {
  return (
    <div>
      <div className="hometop">
        <img alt={headerpic} src={headerpic} />

        <div>
          <Search />
        </div>
      </div>
      <div className="homecontainer">
        <div className="containertitles">
          <h2>Vegan Food Near Me</h2>
          <Link to="/allfood">
            <button>View all </button>
          </Link>
        </div>
        <div>
          <VeganFood />
        </div>
        <div className="containertitles">
          <h2>Vegan Shop Near Me</h2>
          <Link to="/allshop">
            <button>View all </button>
          </Link>
        </div>

        <VeganStore />

        <div className="containertitles">
          <h2>Vegan Cosmetic Near Me</h2>
          <Link to="/allcosmetic">
            <button>View all </button>
          </Link>
        </div>
        <VeganCosmetic />
      </div>
    </div>
  );
};

export default Home;
