import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import cashpayment from "../../assets/Image/cashpayment.png";
import logomain1 from "../../assets/Image/logomain1.png";
import vnpay from "../../assets/Image/vnpay.png";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-logo">
                    <img src={logomain1} />
                </div>
                <div className="footer-idea">
                    <p>Contribute ideas</p>
                    <div className="footer-idea-contributes">
                        <input type="text" placeholder="Please enter your ideas" />
                        <button>Email</button>
                    </div>
                </div>
                <div className="footer-ordering">
                    <p>Payment methods</p>
                    <div className="footer-idea-ordering">
                        <img src={cashpayment} />
                        <img src={vnpay} />
                    </div>
                </div>
                <div className="footer-Contact">
                    <p>Contact with us</p>
                    <div className="footer-idea-contact">
                        <a href="https://www.facebook.com/"><FontAwesomeIcon className="icon-footer__faPhone" icon={faPhone} /></a>
                        <a href="https://www.facebook.com/"><FontAwesomeIcon className="icon-footer__faEnvelope" icon={faEnvelope} /></a>
                        <a href="https://www.facebook.com/"><FontAwesomeIcon className="icon-footer__faTwitter" icon={faTwitter} /></a>
                        <a href="https://www.facebook.com/"><FontAwesomeIcon className="icon-footer__faInstagram" icon={faInstagram} /></a>
                        <a href="https://www.facebook.com/"><FontAwesomeIcon className="icon-footer__faFacebookF" icon={faFacebookF} /></a>
                    </div >
                </div >
            </div >
            <div className="footer-more">About Us | Sitemap | Contact Us | FAQS | Blog | Offers | Terms & Conditions | Customize Your Bouquet | Become a Partner</div>
        </div >
    )
}
export default Footer;