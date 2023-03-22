// import React, { useState } from 'react';
// import GoogleMapReact from 'google-map-react';

// const SearchCity = () => {
//   const [center, setCenter] = useState({ lat: 37.7749, lng: -122.4194 });
//   const [zoom, setZoom] = useState(11);

//   const handleSearch = (city) => {
//     // Gọi Geocoding API để lấy tọa độ của thành phố
//     const geocoder = new window.google.maps.Geocoder();
//     geocoder.geocode({ address: city }, (results, status) => {
//       if (status === 'OK') {
//         const { lat, lng } = results[0].geometry.location;
//         setCenter({ lat: lat(), lng: lng() });
//         setZoom(13);
//       } else {
//         console.error(`Geocode was not successful for the following reason: ${status}`);
//       }
//     });
//   };

//   return (
//     <div style={{ height: '100vh', width: '100%' }}>
//       <input type="text" placeholder="Enter a city" onChange={(e) => handleSearch(e.target.value)} />
//       <GoogleMapReact
//         defaultCenter={center}
//         defaultZoom={zoom}
//       >
//         {/* Thêm các đánh dấu, marker,... vào đây */}
//       </GoogleMapReact>
//     </div>
//   );
// };
// export default SearchCity;