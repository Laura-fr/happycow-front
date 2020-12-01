import React from "react";
import restaurantsList from "../assets/restaurants.json";

const VeganCosmetic = () => {
  return (
    <div className="menue">
      {restaurantsList.map((data, index) => {
        if (index <= 150) {
          return (
            <div className="">
              {data.category === 99 && (
                <div className="restaurants">
                  <img alt={data.thumbnail} src={data.thumbnail} />
                  <h3>{data.name}</h3>
                  <p>Paris</p>
                  <p>{data.rating}</p>
                  <span>{data.description}</span>
                </div>
              )}
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default VeganCosmetic;
