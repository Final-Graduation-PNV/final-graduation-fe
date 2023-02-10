import { faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import isEmail from 'validator/lib/isEmail';
import isEmpty from "validator/lib/isEmpty";
import logo from "../../assets/Image/logo.png";
import "../../styles/Auth/Signin.scss";
import Modal from '../Modals/Modal';
function Signin() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validatorMsg, setValidatorMsg] = useState("")
  const openSignUpModal = (e) => {
    // e.preventDefault()
    setIsModalOpen(true)
  }
  const validateAll = () => {
    const messenger = {};
    if (isEmpty(email)) {
      messenger.email = "Please input your Email!"
    } else if (!isEmail(email)) {
      messenger.email = "Invalid email!"
    }
    if (isEmpty(password)) {
      messenger.password = "Please input your password!!"
    }
    setValidatorMsg(messenger);
    if (Object.keys(messenger).length > 0) return false
    return true
  }
  const handleSigin = (e) => {
    e.preventDefault();
    const isValid = validateAll()
    if (!isValid) {
      return
    } else {
      axios.get("https://62904135665ea71fe12f6eef.mockapi.io/login")
        .then(res => handleSin(res.data))
        .catch(err => console.log("err:", err))
    }
  }
  function handleSin(data) {
    data.map(function (data) {
      console.log(data.email, data.password)
      if (data.email === email & data.password === password) {
        openSignUpModal()
      }
    })
  }

  return (
    <div id="container">
      <div className="signin">
        <div className="signin__left">
          <div className="signin__left--logo">
            <img src={logo} alt="" style={{ width: 100, height: 200 }} />
          </div>
          <div className="signin__left--text">
            <p className="signin__left--text-tittle">
              Wellcome to Plant &amp; Flower
            </p>
            <p className="signin__left--text-desc">
              Please to meet you! Wish you have health and success
            </p>
          </div>
        </div>
        <div className="signin__right">
          <form action="" className='signin__right--form'>
            <p className='signin__right--title'>Sign in</p>
            <input type="text" className="email" name="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <span id='error'>{validatorMsg.email}</span>
            <input type="password" className="password" name="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <span id='error'>{validatorMsg.password}</span>
            <Link to="/Sup"><input type="submit" className="submit" value="Sign in" onClick={handleSigin} /></Link>
            <a className="forgotpassword" href=''>Forgot password</a>
          </form>
          <div className='signin__right--icon'>
            <div className='faFacebookF'><FontAwesomeIcon icon={faFacebookF} className='faFacebookF_icon' /><p>Facebook</p></div>
            <div className="faGoogle"><FontAwesomeIcon icon={faGoogle} className='faGoogle_icon' /><p>Google</p></div>
            <div className="faTwitter"><FontAwesomeIcon icon={faTwitter} className='faTwitter_icon' /><p>Twitter</p></div>
          </div>
          <p className='no__account'>Don't you have an? <Link to="/Sup">Sign up</Link> now</p>
        </div>
      </div>
      {isModalOpen && <Modal closeModal={setIsModalOpen} />}
    </div>
  )
}
export default Signin
