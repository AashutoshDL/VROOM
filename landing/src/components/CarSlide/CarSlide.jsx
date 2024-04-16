import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import firstcar from '../ImagesFol/firstcar.jpg';
import secondcar from '../ImagesFol/firstcar.jpg';
import thirdcar from '../ImagesFol/firstcar.jpg';
import './CarSlide.css';

const CarSlide = () => {
    return (
      <div id="caro">
      <div>
        <h5 className="hot">HOT OFFERS AVAILABLE!</h5>
      </div>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active bg-white" // Add bg-white class to make the icon white
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            className="bg-white" // Add bg-white class to make the icon white
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            className="bg-white" // Add bg-white class to make the icon white
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={firstcar} alt="..." className="image" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Tesla</h5>
              <p>
                Rent per hour: Rs. 30000
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="10000">
            <img src={secondcar} alt="..." className="image" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Honda Fisker</h5>
              <p>
                Rent per hour: Rs. 40000
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="10000">
            <img src={thirdcar} alt="..." className="image" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Lexus</h5>
              <p>
              Rent per hour: Rs. 60000
              </p>
            </div>
          </div>
        </div>
        <div className="arrows">
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <BsChevronLeft className="custom-arrow" size={45} />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <BsChevronRight className="custom-arrow" size={45} />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>

import React, { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import firstcar from '../ImagesFol/firstcar.jpg';
import secondcar from '../ImagesFol/secondcar.jpg';
import thirdcar from '../ImagesFol/thirdcar.jpg';
import './CarSlide.css';

const CarSlide = () => {
    // State to keep track of the current image index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Array of images
    const images = [firstcar, secondcar, thirdcar];

    // Function to handle clicking on the next button
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    // Function to handle clicking on the previous button
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <div id="caro">
            <div>
                <h5 className="hot">HOT OFFERS AVAILABLE!</h5>
            </div>
            <div className="carousel">
                <button className="prev" onClick={prevSlide}>
                    <BsChevronLeft />
                </button>
                <img src={images[currentIndex]} alt={`Car ${currentIndex + 1}`} />
                <button className="next" onClick={nextSlide}>
                    <BsChevronRight />
                </button>
            </div>
        </div>
    );
};

export default CarSlide;
