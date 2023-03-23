import React, { useEffect, useState } from "react";
import GoogleMapReact from 'google-map-react';
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faLocation, faClose } from "@fortawesome/free-solid-svg-icons";
import "../../styles/Modal/SearchShop.scss"
import { getLocation } from "../../api/shopOnnwerAPI";

const AnyReactComponent = () => <div><FontAwesomeIcon style={{ fontSize: 25, color: 'blue' }} icon={faLocation} /></div>;
function Marker({ name }) {
  return (
    <div style={{ color: 'red' }}>
      <p style={{ color: 'red' }}>{name}</p>
      <FontAwesomeIcon style={{ fontSize: 20, color: 'red' }} icon={faBagShopping} />
    </div>
  );
}

function SearchShop({ closeModal, searchLocation, searchAddress, setSearchAddress }) {
  const [locations, setLocations] = useState([]);
  const [currentLocation, setCurrentLocation] = useState({
    lat: searchLocation.lat,
    lng: searchLocation.lng,
  });
  // useEffect(() => {
  //   if (searchLocation.lat != "" && searchLocation != "") {
  //     currentLocation.lat = searchLocation.lat;
  //     currentLocation.lng = searchLocation.lng;
  //   } else {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition((position) => {
  //         setCurrentLocation({
  //           lat: position.coords.latitude,
  //           lng: position.coords.longitude,
  //         });
  //       });
  //     }
  //   }
  // },[]);
  // console.log("locurrenn na:", currentLocation.lat, currentLocation.lng)

  // useEffect(() => {
  //   axios
  //     .get("https://61ce733e7067f600179c5ea7.mockapi.io/mn/shops")
  //     .then((res) => {
  //       setLocations(res.data);
  //     });
  // }, []);

  useEffect(() => {  //Get categories for shop owners
    const getLoca = async () => {
        try {
            const res = await getLocation()
            setLocations(res.data.shop_owners)
        } catch (err) {
            console.log("Err get shop categories: ", err)
        }
    }
    getLoca()
}, [])

  const reset = () => {
    setSearchAddress("")
    closeModal(false)
  }
  console.log("add", locations)
  // const handleClose
  return (
    <div className="shop-map" style={{ height: '100vh', width: '100%' }}>
      <div className="shop-map__modal">
        {/* <SearchLocation/>
            <div className="shop-map__modal__form">
                <form onSubmit={handleSearchSubmit}>
                    <input type="text" value={searchValue} onChange={handleSearchChange} />
                    <button type="submit">Search</button>
                </form>
            </div> */}
        <FontAwesomeIcon onClick={() => {reset()}} style={{ fontSize: 25, color: 'blue' }} icon={faClose} />
        <div className="shop-map__modal__google-map" style={{ height: '600px', width: '800px' }}            >
          {currentLocation.lat && currentLocation.lng ? (
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyAsUqfmF2hquaeaLJi6qk7tP0KsHx7GKV8' }}
              defaultCenter={currentLocation}
              defaultZoom={16}
            // onClick={handleMapClick}
            >
              <AnyReactComponent
                lat={currentLocation.lat}
                lng={currentLocation.lng}
              />
              {locations ?
                locations.map((location) => (
                  <Marker key={location.id}
                    lat={location.lat}
                    lng={location.lng}
                    name={location.name}
                  />
                )) : (<div></div>)}

              {/* {selectedCoords && (
                        <Marker
                            lat={selectedCoords.lat}
                            lng={selectedCoords.lng}
                        />
                    )} */}
            </GoogleMapReact>
          ) : (
            <div>Loading...</div>
          )}

        </div>
      </div>
    </div>
  );
}

export default SearchShop;