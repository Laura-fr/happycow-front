import React from "react";
import { Link } from "react-router-dom";
import restaurantsList from "../assets/restaurants.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VeganStore = () => {
  return (
    <div className="menue">
      {restaurantsList.map((data, index) => {
        if (index <= 150) {
          return (
            <div className="">
              {data.category === 2 && (
                <div className="restaurants">
                  <Link to={`/resume/${data.placeId}`}>
                    <img alt={data.thumbnail} src={data.thumbnail} />
                  </Link>
                  <h3>{data.name}</h3>
                  <p>{data.address}</p>
                  <p
                    style={{
                      color: "#444444",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        marginRight: 5,
                      }}
                    >
                      {data.rating}
                    </div>
                    <div
                      style={{
                        color: "#FCCC00",
                      }}
                    >
                      <FontAwesomeIcon icon="star" />
                    </div>
                  </p>
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

export default VeganStore;
