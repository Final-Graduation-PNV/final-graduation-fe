import React, { useEffect, useState } from "react";
import GoogleMapReact from 'google-map-react';
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faLocation } from "@fortawesome/free-solid-svg-icons";

const AnyReactComponent = () => <div><FontAwesomeIcon style={{ fontSize: 25, color: 'blue' }} icon={faLocation} /></div>;

function ShopMap() {
    const [searchValue, setSearchValue] = useState('');
    const [locations, setLocations] = useState([]);
    const [currentLocation, setCurrentLocation] = useState({
        lat: null,
        lng: null,
    });
    const [selectedCoords, setSelectedCoords] = useState(null);

    useEffect(() => {
        axios
            .get("https://61ce733e7067f600179c5ea7.mockapi.io/mn/shops")
            .then((res) => {
                setLocations(res.data);
            });
    }, []);
    console.log("location na:", locations)

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

    const handleSearchChange = e => {
        setSearchValue(e.target.value);
        console.log("address:", searchValue);
    };

    const handleSearchSubmit = e => {
        e.preventDefault();
        const { lat, lng } = e;
        setSelectedCoords({ lat, lng });
        console.log("address:", selectedCoords);

    };
    console.log("current:", currentLocation)
    const handleMapClick = e => {
        const { lat, lng } = e;
        setSelectedCoords({ lat, lng });
    };

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <form onSubmit={handleSearchSubmit}>
                <input type="text" value={searchValue} onChange={handleSearchChange} />
                <button type="submit">Search</button>
            </form>
            {currentLocation.lat && currentLocation.lng ? (
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyAZ_eQK1VY8vuw0YVCn2DCbEqv5KCe2Vh4' }}
                    defaultCenter={currentLocation}
                    defaultZoom={16}
                    onClick={handleMapClick}
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
    );
}

function Marker({name}) {
    return (
        <div style={{ color: 'red' }}>
            <p style={{ color: 'red' }}>{name}</p>
            <FontAwesomeIcon style={{ fontSize: 20, color: 'red' }} icon={faBagShopping} />
        </div>
    );
}

export default ShopMap;
