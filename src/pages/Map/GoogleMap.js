import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MapShop = () => {
  const [currentLocation, setCurrentLocation] = useState({
    lat: null,
    lng: null,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      {currentLocation.lat && currentLocation.lng ? (
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAZ_eQK1VY8vuw0YVCn2DCbEqv5KCe2Vh4" }}
          defaultCenter={currentLocation}
          defaultZoom={15}
        >
          <AnyReactComponent
            lat={currentLocation.lat}
            lng={currentLocation.lng}
            text="You are here"
          />
        </GoogleMapReact>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default MapShop;
