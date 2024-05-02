// import React from 'react'
import Header from './components/Header/Header';
import Booking from './components/Booking/Booking';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import ReviewSlide from './components/ReviewSlide/ReviewSlide';

const Home = () => {
  return (
    <div className='page-container'>
      <Header />
      <Booking />
      <AboutUs />
      <ReviewSlide />
      <Footer />
    </div>
  )
}

export default Home
