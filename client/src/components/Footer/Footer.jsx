// import React from 'react';
import './Footer.css';
import logo from '../ImagesFol/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
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
              <h4 id="footer-about">About Us</h4>
              {/* Footer text */}
              <p className='textvroom'>
                Vroom Car Rental Services stands out for its wide vehicle selection, ensuring there's an option for every need. With a user-friendly booking process via app or online, convenience is paramount. 
              </p>
            </div>
            {/* Footer column for contact info */}
            <div className="Contactinfo">
              <h5 className="contact-title">Contact Info</h5>
              <div className='phoneicon'>
              <FaPhone size={35}/>
              </div>

              <div className='mailicon'>
              <MdOutlineMailOutline size={45}/>
              </div>
              <div className='bigcontentbox'>
              <ul className="contacts">
                <li className="footer-info1">Phone</li>
                <li className="footer-info">Email</li>
              </ul>
              <ul className='contactinformation'>
                <li className='foot-infonum'>9803430682</li>
                <li className='foot-info2'>vroomhelp@gmail.com</li>
              </ul>
              </div>
            </div>
            {/* Footer column for quick links */}
            <div className="footer-col quick-links">
              {/* Quick links header */}
              <h4 id='text'>Quick Links</h4>
              {/* Quick links list */}
              <ul id='links'>
                <li className='q-links'><span className ="footer-links">Vehicles</span></li>
                <li className='q-links'><span className ="footer-links">Contact Us</span></li>
                <li className='q-links'><span className ="footer-links">Hire a Driver</span></li>
              </ul>
            </div>
          </div>
        </div>
         {/* Copyright notice */}
         <div className="line"></div>
         <div className="copyright">
          <p className='copyrightcontent'>&copy; 2024 Vroom | All Rights Reserved | <span className='privacy'>Privacy Policy</span></p>
        </div>
      </footer>
    </div>

  );
}

export default Footer;