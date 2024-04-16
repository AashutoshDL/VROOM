// import React from 'react';
import './Footer.css';
import logo from '../ImagesFol/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="foot-container">
          <div className="row">
            <div className="footer-col">
            <img src={logo} alt="" className='footerlogo'/>
              <p className='textvroom'>
                Vroom is a car rental website at your service. 
                <p>
                Choose us for the best cars and best vehicles.
                </p>
                <p>
                  Want help? Contact us at: 9818808162
                </p>
              </p>
            </div>
            <div className="footer-col quick-links">
              <h4 id='text'>Quick Links</h4>
              <ul id='links'>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="footer-col follow-us">
              <h4 className='fol'>Follow Us</h4>
              <div className="social-links">
                <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;