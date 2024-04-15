// import React from 'react';
import { IoLogIn } from 'react-icons/io5';
import { FaMapMarkerAlt, FaCar, FaCarSide } from 'react-icons/fa';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <>
      <div className="aboutimage">
        <div className="image-container">
          <h1 id="para-header">Why us?</h1>
          <p className="para-content">
            Our services are affordable, convenient, and safe. You can rent a car
            from Vroom at any time convenient to you, and it will be
            delivered to your doorstep. In addition to offering an hourly rate
            or daily rate according to the package you select, Vroom
            offers flexible car rental services. Using our Smart App or website,
            you can rent a car monthly, get unlimited kilometers, or even
            purchase a package for your trip. Our fleet of cars is insured, so
            while you are cruising down open roads, you will be safe and sound.
          </p>
        </div>
      </div>
      <div className="big-container">
        <div className="how-to">
          <div className="how-to-container">
            <h1 className="how-to-header">How it works</h1>
            <div className="icon-path">
              {Array.from({ length: 6 }, (_, i) => (
                <div key={i} className="icon-path-dot"></div>
              ))}
            </div>
            <div className="icon-box-container">
              <div className="icon-box">
                <IoLogIn size={70} />
                <div className="icon-text">
                  <p>Login-Signup</p>
                </div>
              </div>
              <div className="icon-box">
                <FaMapMarkerAlt size={70} />
                <div className="icon-text">
                  <p>Pick up Point</p>
                </div>
              </div>
              <div className="icon-box">
                <FaCar size={70} />
                <div className="icon-text">
                  <p>Drive Anywhere, Any Time</p>
                </div>
              </div>
              <div className="icon-box">
                <FaCarSide size={70} />
                <div className="icon-text">
                  <p>Return</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
