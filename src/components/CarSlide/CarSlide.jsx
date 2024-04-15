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
