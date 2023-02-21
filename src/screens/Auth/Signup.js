import { faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/Image/logo.png";
import "../../styles/Auth/Signup.scss";
// import Modal from '../Modals/Modal';


function Signup() {
  const URLSignup = "http://ec2-54-193-79-196.us-west-1.compute.amazonaws.com/api/register";

  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const initialErrors = Object.freeze({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    message: ""
  })

  const [errors, setErrors] = useState(initialErrors);
  // const [validatorMsg, setValidatorMsg] = useState("")
  // const openSignUpModal = (e) => {
  //   // e.preventDefault()
  //   setIsModalOpen(true)
  // }
  // const messenger = {};
  // const validateAll = () => {

  //   if (isEmpty(name.trim())) {

  //     messenger.name = "Please input your name!"
  //   }

  //   if (isEmpty(email.trim())) {
  //     messenger.email = "Please input your Email!"
  //   } else if (!isEmail(email.trim())) {
  //     messenger.email = "Invalid email!"
  //   }
  //   if (isStrongPassword(password.trim())) {
  //     messenger.password = "Please input your password!!"
  //   } else if (isStrongPassword(password)) {
  //     messenger.password = "Mật khẩu ít nhất 8 kí tự, tối thiểu 1 chữ thường, 1 chữ hoa, 1 số, 1 kí hiệu!"
  //   }

  //   if (isEmpty(confirmPassword.trim())) {
  //     messenger.confirmPassword = "Please input your password!!"
  //   }

  //   if (password != confirmPassword) {
  //     messenger.confirmPassword = "Please enter your confirm password."
  //   }
  //   setValidatorMsg(messenger);
  //   if (Object.keys(messenger).length > 0) return false
  //   return true

  // }
  // const emailExit = (data, msg) => {
  //   data.map(function (data) {
  //     console.log(data.email, data.password)
  //     if (data.email === email) {
  //       console.log("Email already exists")
  //       msg = "Email already exists"
  //     }
  //   })
  // }


  // const handleGetData = (msg) => {
  //   axios.get("https://62904135665ea71fe12f6eef.mockapi.io/login")
  //     .then(res => emailExit(res.data, msg))
  //     .catch(err => console.log("Error: " + err))
  // }
  // const postData = (e) => {
  //   e.preventDefault();
  //   const isValid = validateAll()
  //   if (!isValid) {
  //     return
  //   }
  //   else {
  //     axios.post("https://62904135665ea71fe12f6eef.mockapi.io/login", {
  //       email,
  //       name,
  //       password,
  //       confirmPassword
  //     })
  //       .then(res => console.log(res))
  //       .then("Open Modal: ", openSignUpModal())
  //       .catch(err => console.log("Err: ", err))
  //   }

  // }

  const handleSignup = (e) => {
    resetErrors()
    e.preventDefault();
    axios.post(URLSignup, {
      username,
      email,
      password,
      confirm_password,
    })
      .then(res => {
        console.log("res", res)
        alert("Sign up successful!")
        navigate("/Sin")
      })
      // .then(navigate("/Sin"))
      .catch(err => {
        console.log(err)
        setErrors(err.response.data.data)
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
            <input type="text" className="name" name="Name" placeholder='Name' value={username} onChange={(e) => setName(e.target.value)} />
            {errors.username && <div style={{ color: "rgb(173, 3, 3)" }}>{errors.username}</div>}
            <input type="text" className="email" name="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <div style={{ color: "rgb(173, 3, 3)" }}>{errors.email}</div>}
            <input type="password" className="password" name="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            {errors.password && <div style={{ color: "rgb(173, 3, 3)" }}>{errors.password}</div>}
            <input type="password" className="confirmPassword" name="confirmPassword" placeholder='Cofirm Password' value={confirm_password} onChange={(e) => { setConfirmPassword(e.target.value) }} />
            {errors.password && <div style={{ color: "rgb(173, 3, 3)" }}>{errors.confirm_password}</div>}
            {errors.message && <div style={{ color: "rgb(173, 3, 3)" }}>{errors.message}</div>}
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
      {/* {isModalOpen && <Modal closeModal={setIsModalOpen} />} */}
    </div>
  )
}
export default Signup
