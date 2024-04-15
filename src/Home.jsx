// import React from 'react'
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import CarSlide from './components/CarSlide/CarSlide';
import Booking from './components/Booking/Booking';


const Home = () => {
  return (
    <div className='page-container'>
      <Header />
      <Booking />
      <AboutUs />
      <CarSlide />
      <Footer />
    </div>
  )
}

export default Home
