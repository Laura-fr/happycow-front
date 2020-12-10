import React from "react";
import { useParams } from "react-router-dom";
import restaurantsList from "../assets/restaurants.json";
// import { Link } from "react-router-dom";

const Result = () => {
  //  1 ere méthode
  //   const params = useParams();
  //   const search=params.search;
  //autre méthode
  const { search } = useParams();
  const getResult = () => {
    let result = [];
    for (let i = 0; i < restaurantsList.length; i++) {
      if (
        restaurantsList[i].address
          .toLowerCase()
          .includes(search.toLowerCase()) === true
      ) {
        result.push(restaurantsList[i]);
      }
    }
    return result;
  };
  const result = getResult();
  console.log(result);
  return (
    <div className="result">
      <h2>Resultats : {search}</h2>

      <div className="all">
        {result.map((item, index) => {
          if (item.thumbnail) {
            return (
              <div className="card">
                <div className="">
                  <p>{item.type}</p>

                  <p>{item.address}</p>
                  <p>{item.phone}</p>
                </div>

                <img src={item.thumbnail} alt={item.name} className="" />

                <h3>{item.name}</h3>
              </div>
            );
          } else {
            return (
              <div className="card">
                <div className="">
                  <p className=""></p>
                  <p>{item.type}</p>
                  <h3>{item.name}</h3>
                  <p>{item.address}</p>
                  <p>{item.phone}</p>
                </div>
                <img
                  src={item.pictures[0]}
                  alt={item.name}
                  className="photo-result"
                />
                <h3>{item.name}</h3>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Result;
