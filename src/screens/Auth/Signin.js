import { faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from "../../assets/Image/logo.png";
import "../../styles/Signin.scss";
function Signin() {
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
            <input type="text" className="phone" name="phone" placeholder='Phone number' />
            <input type="text" className="password" name="password" placeholder='Password' />
            <input type="submit" className="submit" value="Sign in" />
            <a className="forgotpassword" href=''>Forgot password</a>
          </form>
          <div className='signin__right--icon'>
            <div className='faFacebookF'><FontAwesomeIcon icon={faFacebookF} className='faFacebookF_icon' /><p>Facebook</p></div>
            <div className="faGoogle"><FontAwesomeIcon icon={faGoogle} className='faGoogle_icon' /><p>Google</p></div>
            <div className="faTwitter"><FontAwesomeIcon icon={faTwitter} className='faTwitter_icon' /><p>Twitter</p></div>
          </div>
          <p className='no__account'>Don't you have an? <a href=''>Sign up</a> now</p>
        </div>
      </div>
    </div>
  )
}
export default Signin
