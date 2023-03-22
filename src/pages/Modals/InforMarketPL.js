import Geocode from "react-geocode";
import "../../styles/Modal/ModalPM.scss";

import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CityList from "../../components/features/city/CityList";
import "../../styles/Modal/InforMarketPl.scss";
Geocode.setApiKey("AIzaSyBnz2gvBIM3N89kMVI4YJT8oOGZT31NACU");

function InforMarketPL({ closeModal }) {

  const token = localStorage.getItem("token")
  const UrlShopOnwer = "http://ec2-54-67-114-9.us-west-1.compute.amazonaws.com/api/user/be-shop";
  const navigate = useNavigate();

  const [name, setName] = useState("")
  const [birth, setBirth] = useState()
  const [phone, setPhone] = useState("")
  const [gender, setGender] = useState("Male")
  const [city, setCity] = useState("Hà Nội")
  const [address, setAddress] = useState("")
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)

  const initialError = Object.freeze({
    name: "",
    phone: "",
    birth: "",
    gender: "",
    address: "",
    citiesL: "",
  })

  console.log("Name: ", name, " phone: ", phone, "birth: ", birth, "gender: ", gender, "Address: ", address, "city: ", city, "longitude: ", longitude, "latitude: ", latitude)
  // const handleSubmit = (add) => {
  //   // event.preventDefault();
  //   Geocode.fromAddress(add).then(
  //     (response) => {
  //       const { lat, lng } = response.results[0].geometry.location;
  //       setLatitude(lat);
  //       setLongitude(lng);
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // };

  const [error, setError] = useState(initialError)

  const shopOnwerhanler = () => {
    resetErrors()
    // handleSubmit(address);
    axios.post(UrlShopOnwer,
      {
        name,
        phone,
        birth,
        gender,
        address,
        city,
        latitude,
        longitude
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }
    )
      .then(res => {
        console.log("Ress:", res)
        navigate("/shopOnnwer")
        localStorage.setItem("shopOnwer", "true");
      })
      .catch(err => {
        setError(err.response.data.errors)
        console.log("error:", err.response.data.errors)
      })
  }
  const backShoponwerHandler = () => {
    closeModal(false)
  }
  const resetErrors = () => {
    setError(initialError)
  }
  return (
    <>
      <div className="inforBackground">
        <div className="inforContainer">
          <div className="infor-icon">
            <FontAwesomeIcon icon={faClose} onClick={() => closeModal(false)} />
          </div>
          <div className="infor-text">
            <p className="infor-text__tittle">Delivery Address</p>
            <div className="infor-name">
              <p className="infor-text__phone" >Name:</p>
              <input className="infor-nameshop__input" type="text" placeholder="Please your name" value={name} onChange={(e) => { setName(e.target.value) }} />
              {error.name && <span style={{ color: 'red', fontSize: 12 }}>{error.name}</span>}
            </div>
            <div className="info-person">

              <div className="infor-name">
                <p className="infor-text__phone" >Phone:</p>
                <input className="infor-phone__input" type="text" placeholder="Please your phone" value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                {error.phone && <span style={{ color: 'red', fontSize: 12, marginBottom: -14 }}>{error.phone}</span>}
              </div>
              <div className="infor-gender">
                <p className="infor-text__gender" >Gender:</p>
                <select value={gender} onChange={(e) => { setGender(e.target.value) }}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                {error.gender && <span style={{ color: 'red', fontSize: 12 }}>{error.gender}</span>}
              </div>
            </div>
            <div className="infor-birthDay">
              <p className="intor-text__birth">Date of birth :</p>
              <input className="infor-text-birth__input" type="date" onChange={(e) => setBirth(e.target.value)} />
              {error.birth && <span style={{ color: 'red', fontSize: 12 }}>{error.birth}</span>}
            </div>
            <div className="infor-city">
              <p className="infor-city__city" >Province/ City:</p>
              <select value={city} onChange={(e) => { setCity(e.target.value) }}>
                {CityList.map((city, id) => (
                  <option key={id} value={city.name}>{city.name}</option>
                ))}
              </select>
              {error.citiesL && <span style={{ color: 'red', fontSize: 12 }}>{error.city}</span>}
            </div>
            <div className="infor-despayment">
              <p>Specific address:</p>
              <textarea rows="4" cols="50" name="comment" form="usrform" placeholder="Please your address" value={address} onChange={(e) => { setAddress(e.target.value) }} />
              {error.address && <span style={{ color: 'red', fontSize: 12 }}>{error.address}</span>}
            </div>
            <div className="infor-btn">
              <button className="btn__cancel" onClick={backShoponwerHandler}>Back</button>
              <button className="btn__save" onClick={shopOnwerhanler} >Next</button>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
export default InforMarketPL