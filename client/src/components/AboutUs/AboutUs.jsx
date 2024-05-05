// import React from 'react';
import { IoLogIn } from 'react-icons/io5';
import { FaMapMarkerAlt, FaCar, FaCarSide } from 'react-icons/fa';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <>
     <div className="aboutimage">
        {/* About image container */}
        <div className="image-container">
          {/* Header */}
          <h1 id="para-header">Why us?</h1>
          {/* Paragraph content */}
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
      {/* Big container */}
      <div className="big-container">
        {/* How-to container */}
        <div className="how-to">
          {/* How-to container */}
          <div className="how-to-container">
            {/* Header */}
            <h1 className="how-to-header">How it works</h1>
            {/* Icon box container */}
            <div className="icon-box-container">
              {/* Icon box 1 */}
              <div className="icon-box1">
                <IoLogIn size={90} />
                {/* Icon text */}
                <div className="icon-text">
                  <p>Login-Signup</p>
                </div>
              </div>
              {/* Icon box 2 */}
              <div className="icon-box2">
                <FaMapMarkerAlt size={90} />
                {/* Icon text */}
                <div className="icon-text">
                  <p>Pick up Point</p>
                </div>
              </div>
              {/* Icon box 3 */}
              <div className="icon-box3">
                <FaCar size={90} />
                {/* Icon text */}
                <div className="icon-text">
                  <p>Drive Anywhere, Any Time</p>
                </div>
              </div>
              {/* Icon box 4 */}
              <div className="icon-box4">
                <FaCarSide size={90} />
                {/* Icon text */}
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
