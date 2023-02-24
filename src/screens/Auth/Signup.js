import { faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/Image/logo.png";
import "../../styles/Auth/Signup.scss";



function Signup() {
  const URLSignup = "http://ec2-54-193-79-196.us-west-1.compute.amazonaws.com/api/register";


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("")
  const navigate = useNavigate();

  const initialErrors = Object.freeze({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    address: "",
    city: ""
  })

  const [errors, setErrors] = useState(initialErrors);

  const handleSignup = (e) => {
    resetErrors()
    e.preventDefault();
    axios.post(URLSignup, {
      name,
      email,
      password,
      password_confirmation,
      address,
      city
    })
      .then(res => {
        console.log("res", res)
        alert("Sign up successful!")
        navigate("/Sin")
      })
      .catch(err => {
        console.log(err)
        setErrors(err.response.data.errors)
      })
  }
  const resetErrors = () => {
    setErrors(initialErrors)
  }
  return (
    <div id="container">
      <div className="signup">
        <div className="signup__left">
          <div className="signup__left--logo">
            <img src={logo} alt="" style={{ width: 100, height: 200 }} />
          </div>
          <div className="signup__left--text">
            <p className="signup__left--text-tittle">
              Welcome to Plant &amp; Flower
            </p>
            <p className="signup__left--text-desc">
              Please to meet you! Wish you have health and success
            </p>
          </div>
        </div>
        <div className="signup__right">
          <form action="" className='signup__right--form' >
            <p className='signup__right--title'>Sign Up</p>
            <input type="text" className="name" name="Name" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            {errors.name && <div style={{ color: "rgb(173, 3, 3)" }}>{errors.name}</div>}
            <input type="text" className="address" name="address" placeholder='Address' value={address} onChange={(e) => { setAddress(e.target.value) }} />
            {errors.address && <div style={{ color: "rgb(173, 3, 3)" }}>{errors.address}</div>}
            <input type="text" className="city" name="city" placeholder='City' value={city} onChange={(e) => { setCity(e.target.value) }} />
            {errors.city && <div style={{ color: "rgb(173, 3, 3)" }}>{errors.city}</div>}
            {errors.message && <div style={{ color: "rgb(173, 3, 3)" }}>{errors.message}</div>}
            <input type="text" className="email" name="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <div style={{ color: "rgb(173, 3, 3)" }}>{errors.email}</div>}
            <input type="password" className="password" name="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            {errors.password && <div style={{ color: "rgb(173, 3, 3)", textAlign: "center" }}>{errors.password}</div>}
            <input type="password" className="confirmPassword" name="confirmPassword" placeholder='Cofirm Password' value={password_confirmation} onChange={(e) => { setConfirmPassword(e.target.value) }} />
            {errors.password_confirmation && <div style={{ color: "rgb(173, 3, 3)" }}>{errors.password_confirmation}</div>}
            <input type="submit" className="submit" value="Sign up" onClick={handleSignup} />
          </form>
          <div className='signup__right--icon'>
            <div className='faFacebookF'><FontAwesomeIcon icon={faFacebookF} className='faFacebookF_icon' /><p>Facebook</p></div>
            <div className="faGoogle"><FontAwesomeIcon icon={faGoogle} className='faGoogle_icon' /><p>Google</p></div>
            <div className="faTwitter"><FontAwesomeIcon icon={faTwitter} className='faTwitter_icon' /><p>Twitter</p></div>
          </div>
          <p className='no__account'>Don't you have an? <Link to="/Sin">Sign in</Link> now</p>
        </div>
      </div>

    </div>
  )
}
export default Signup
