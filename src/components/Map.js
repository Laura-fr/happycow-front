import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import data from "../assets/restaurants.json";
// import Marker from "./Marker";

// const AnyReactComponent = ({ text, className }) => (
//   <div>
//     {text}
//
//   </div>
// );
// lat: restaurantsList.location && restaurantsList.location.lat,
// lng: restaurantsList.location && restaurantsList.location.lng,

// lat: 48.862881,
// lng: 2.351543,

// lat: Number(data.location && data.location.lat),
//       lng: Number(data.location && data.location.lng),

const apiKey = process.env.REACT_APP_GOOGLE_KEY;

const renderMarkers = (map, maps) => {
  let marker = new maps.Marker({
    position: {
      lat: Number(data.location && data.location.lat),
      lng: Number(data.location && data.location.lng),
    },
    map,
    title: "Hello World!",
  });

  return marker;
};
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 14,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={{ lat: 48.862881, lng: 2.351543 }}
          defaultZoom={13}
          yesIWantToUseGoogleMapApiInternals={true}
          onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
        >
          {/* <Marker lat={48.862881} lng={2.351543} /> */}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
