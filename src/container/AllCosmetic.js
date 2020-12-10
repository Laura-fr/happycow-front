import React from "react";
import restaurantsList from "../assets/restaurants.json";
import { Link } from "react-router-dom";

const AllCosmetic = () => {
  return (
    <div className="viewall">
      <h2>Vegan Cosmetic</h2>
      <div className="all">
        {restaurantsList.map((data, index) => {
          return (
            <div className="">
              {data.category === 99 && (
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

export default AllCosmetic;
