// import React from 'react'
import Booking from './components/Booking/Booking';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import CarSlide from './components/CarSlide/CarSlide';
import ReviewSlide from './components/ReviewSlide/ReviewSlide';

const Home = () => {
  return (
    <div className='page-container'>
      <Booking />
      <AboutUs />
      <ReviewSlide />
      <CarSlide />
      <Footer />
    </div>
  )
}

export default Home
