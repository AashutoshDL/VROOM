// import React from 'react'
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import CarSlide from './components/CarSlide/CarSlide';

const Home = () => {
  return (
    <div className='page-container'>
      <Header />
      <AboutUs />
      <CarSlide />
      <Footer />
    </div>
  )
}

export default Home
