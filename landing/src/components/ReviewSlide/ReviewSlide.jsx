import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import user1Photo from '../ImagesFol/u1.jpg';
import user2Photo from '../ImagesFol/u2.jpg';
import user3Photo from '../ImagesFol/u3.jpg';
import './ReviewSlide.css';

const ReviewSlide = () => {
  const feedbackItems = [
    {
      id: 1,
      name: 'Rajesh Hamal',
      text: 'Great service! Highly recommended.',
      rating: 5,
      userPhoto: user1Photo,
    },
    {
      id: 2,
      name: 'Sisan Baniya',
      text: 'Best Rental Service !!!',
      rating: 4,
      userPhoto: user2Photo,
    },
    {
      id: 3,
      name: 'Shrinkhala Khatiwada',
      text: 'Responsive customer support.',
      rating: 4.5,
      userPhoto: user3Photo,
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((currentSlide + 1) % feedbackItems.length);
  };

  const handlePrev = () => {
    setCurrentSlide((currentSlide - 1 + feedbackItems.length) % feedbackItems.length);
  };

  return (
    <div className="review-slide">
      <h2>Our Happy Clients</h2>
      <Carousel selectedItem={currentSlide} showArrows={false} showStatus={false} showThumbs={false}>
        {feedbackItems.map((item) => (
          <div key={item.id} className="feedback-item">
            <div className="user-info">
              <img src={item.userPhoto} alt={`User ${item.id}`} className="user-photo" />
              <p>{item.name}</p>
            </div>
            <div className="rating">
              {Array.from({ length: Math.floor(item.rating) }, (_, index) => (
                <span key={index} className="star">&#9733;</span>
              ))}
              {item.rating % 1 !== 0 && (
                <span className="star-half">&#9733;</span>
              )}
            </div>
            <p className="feedback-text">{item.text}</p>
          </div>
        ))}
      </Carousel>

      <div className="Review_btn">
        <button onClick={handlePrev} className={currentSlide === 0 ? 'disabled' : ''}>
          <FontAwesomeIcon icon={faChevronLeft} className="button-icon" />
        </button>
        <button onClick={handleNext} className={currentSlide === feedbackItems.length - 1 ? 'disabled' : ''}>
          <FontAwesomeIcon icon={faChevronRight} className="button-icon" />
        </button>
      </div>
    </div>
  );
};

export default ReviewSlide;
