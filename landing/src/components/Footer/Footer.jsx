// import React from 'react';
import './Footer.css';
import logo from '../ImagesFol/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

const Footer = () => {
  return (
    <div>
      {/* Footer section */}
      <footer className="footer">
        {/* Footer container */}
        <div className="foot-container">
          {/* Footer row */}
          <div className="row">
            {/* Footer column */}
            <div className="footer-col">
              {/* Vroom logo */}
              <img src={logo} alt="" className='footerlogo'/>
              {/* Footer text */}
              <p className='textvroom'>
                Vroom is a car rental website at your service. 
                {/* Sub-paragraph */}
                <p>
                Choose us for the best cars and best vehicles.
                </p>
                {/* Contact information */}
                <p>
                  Want help? Contact us at: 9818808162
                </p>
              </p>
            </div>
            {/* Footer column for quick links */}
            <div className="footer-col quick-links">
              {/* Quick links header */}
              <h4 id='text'>Quick Links</h4>
              {/* Quick links list */}
              <ul id='links'>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            {/* Footer column for social media links */}
            <div className="footer-col follow-us">
              {/* Follow us header */}
              <h4 className='fol'>Follow Us</h4>
              {/* Social media links */}
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