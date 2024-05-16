import Booking from './components/Booking/Booking';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import ReviewSlide from './components/ReviewSlide/ReviewSlide';
import './Home.css';
const Home = () => {
  return (
    <div className='page-container'>
      <Booking />
      <AboutUs />
      <ReviewSlide />
      <Footer />
    </div>
  )
}

export default Home
