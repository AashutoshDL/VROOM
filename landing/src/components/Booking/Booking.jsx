// Booking.js
import { useNavigate } from 'react-router-dom';
import { useState , useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import background from '../ImagesFol/background.jpg'; // Import the background image
// import background2 from '../ImagesFol/background2.jpg'; // Import the background image
import backgroundVideo from '../ImagesFol/backvid.mp4';
import './Booking.css';

const Booking = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [pickUpDate, setPickUpDate] = useState(null);
  const [dropOffDate, setDropOffDate] = useState(null);
  const navigate = useNavigate();

  // const handleNavigation = (route) => {
  //   navigate(route);
  // };

  const handleInput1Change = (event) => {
    setInput1(event.target.value);
  };

  const handleInput2Change = (event) => {
    setInput2(event.target.value);
  };

  const handlePickUpDateChange = (date) => {
    setPickUpDate(date);
  };

  const handleDropOffDateChange = (date) => {
    setDropOffDate(date);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Input 1:', input1);
    console.log('Input 2:', input2);
    console.log('Pick-Up Date:', pickUpDate);
    console.log('Drop-Off Date:', dropOffDate);

    navigate('/vehicles');
  };

  useEffect(() => {
    ScrollReveal().reveal('.aboutimage', {
      delay: 1000,
      duration: 500,
      origin: 'bottom',
      distance: '20px',
      easing: 'ease-in-out',
    });

    const scrollRevealUp = ScrollReveal();
    scrollRevealUp.reveal('.aboutimage', {
      delay: 50,
      duration: 1000,
      origin: 'bottom',
      distance: '20px',
      easing: 'ease-in-out',
      reset: true,
      interval: 0,
      cleanup: true,
    });

    return () => {
      scrollRevealUp.destroy();
    };
  }, []);

  useEffect(() => {
    const sr = ScrollReveal();

    const delay = 200;

    sr.reveal('.icon-box, .icon-text, .how-to-header', {
      delay,
      duration: 200,
      origin: 'bottom',
      distance: '20px',
      easing: 'ease-in-out',
      interval: 20,
      reset: true,
    });

    return () => {
      sr.destroy();
    };
  }, []);

  return (
   <div>
      {/* Main body container */}
      <div className="mainbody">{/*< style={{ backgroundImage: `url(${background2})` }}> */}
      {/* Background video */}
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        {/* Home container */}
        <div className="home-container">
          {/* Title */}
          <div className="Name">
            <h1 className="Title">
              Vroom Car Rental Services
            </h1>
            <h5 id="sub-title">At your Door Steps</h5>
          </div>
          {/* Sub-container for input fields */}
          <div className="sub-container">
            {/* Input field for Pick Up Location */}
            <div className="col-lg-6" id="Input1">
              <label htmlFor="Pickup-Location" id="label1">
                Pick Up :
              </label>
              <input
                type="text"
                id="textInput1"
                placeholder="Enter your Location"
                value={input1}
                onChange={handleInput1Change}
              />
            </div>
            {/* Input field for Drop Off Location */}
            <div className="col-lg-6" id="Input2">
              <label htmlFor="Dropoff-Location" id="label2">
                Drop Off :
              </label>
              <input
                type="text"
                id="textInput2"
                placeholder="Enter your Location"
                value={input2}
                onChange={handleInput2Change}
              />
            </div>
            {/* Input field for Pick Up Date */}
            <div className="col-lg-6" id="Input3">
              <label htmlFor="dateInput1" id="label3">
                Pick Up Date/Time :
              </label>
              {/* Date picker for selecting pick up date and time */}
              <DatePicker
                id="pickUpDate"
                selected={pickUpDate}
                onChange={handlePickUpDateChange}
                showTimeSelect
                dateFormat="yyyy-MM-dd HH:mm"
                placeholderText="Select Pick Up Date and Time"
                className="form-control"
              />
            </div>
            {/* Input field for Drop Off Date */}
            <div className="col-lg-6" id="Input4">
              <label htmlFor="dateInput2" id="label4">
                Drop Off Date/Time :
              </label>
              {/* Date picker for selecting drop off date and time */}
              <DatePicker
                id="dropOffDate"
                selected={dropOffDate}
                onChange={handleDropOffDateChange}
                showTimeSelect
                dateFormat="yyyy-MM-dd HH:mm"
                placeholderText="Select Drop Off Date and Time"
                className="form-control"
              />
            </div>
            {/* Submit button */}
            <div className="col-lg-12" id="submitbtn">
              <button id="rentbtn" onClick={handleSubmit}>
                {/* Button text */}
                <h6 id="btntext">Find Car</h6>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Booking;
