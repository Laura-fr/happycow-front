import React from "react";
import { Link } from "react-router-dom";
import restaurantsList from "../assets/restaurants.json";

const AllShop = () => {
  return (
    <div className="viewall">
      <h2>Vegan Shop</h2>
      <div className="all">
        {restaurantsList.map((data, index) => {
          return (
            <div key={index} className="">
              {data.category === 2 && (
                <div className="card">
                  <Link to={`/resume/${data.placeId}`}>
                    <img alt={data.thumbnail} src={data.thumbnail} />
                  </Link>
                  <h3>{data.name}</h3>

                  <p>{data.rating}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllShop;
