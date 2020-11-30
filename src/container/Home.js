import React from "react";
import restaurantsList from "../assets/restaurants.json";
import headerpic from "../assets/homepage.webp";

const Home = () => {
  return (
    <div>
      <div className="hometop">
        <h1>Find Vegan Restaurants Nearby</h1>
        <img alt={headerpic} src={headerpic} />
      </div>
      <div className="home">
        {restaurantsList.map((data, index) => {
          return (
            <div>
              {data.category === 0 && (
                <div className="restaurants">
                  <img alt={data.thumbnail} src={data.thumbnail} />
                  <h2>{data.name}</h2>
                  <p>Paris</p>
                  <p>{data.rating}</p>
                  <span>{data.description}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
