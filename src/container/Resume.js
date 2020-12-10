import React from "react";
import restaurantsList from "../assets/restaurants.json";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import facebook from "../assets/facebook.png";
import SimpleMap from "../components/Map";

const Resume = () => {
  const { id } = useParams();

  const getId = () => {
    for (let i = 0; i < restaurantsList.length; i++) {
      if (String(restaurantsList[i].placeId) === id) {
        return restaurantsList[i];
      }
    }
  };
  const foundId = getId();
  console.log(foundId);

  return (
    <div>
      <div className="resumeheader">
        <h3>
          <div>{foundId.name}</div>{" "}
          <div>
            {foundId.rating}
            <FontAwesomeIcon
              icon="star"
              style={{ marginLeft: 15, color: "#FCCC00" }}
            />
          </div>
        </h3>
      </div>
      <div>
        <div className="resume">
          <div className="leftresume">
            <p style={{ marginTop: 10 }}>/ Europe / France /</p>
            <div className="annuaire">
              <div className="acard">
                <FontAwesomeIcon
                  style={{ color: "#7c4ec4", fontSize: 25, marginRight: 10 }}
                  icon="phone-alt"
                />
                <p> {foundId.phone}</p>
              </div>
              <div>
                <div className="acard">
                  <FontAwesomeIcon
                    style={{ color: "#7c4ec4", fontSize: 25, marginRight: 10 }}
                    icon="map-marker-alt"
                  />
                  <div classname="acard">
                    <p> {foundId.address}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="description">
              <p>{foundId.description}</p>
            </div>
            <div className="type">
              <p> Catégorie : {foundId.type}</p>
            </div>
            <div className="caroussel">
              {foundId.pictures.map((data, index) => {
                return <img src={data} alt={data} />;
              })}
            </div>
          </div>

          <div className="map">
            <SimpleMap />
          </div>
        </div>
        <div className="social">
          <div>
            <a href={foundId.website} rel="noreferrer" target="_blank">
              <FontAwesomeIcon
                icon="globe"
                style={{
                  height: 25,
                  width: 25,
                  marginLeft: 10,
                  marginRight: 10,
                }}
              />
            </a>
          </div>
          <div>
            <a href={foundId.facebook} rel="noreferrer" target="_blank">
              <img src={facebook} alt="facebook" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
