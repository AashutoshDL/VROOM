// Booking.js

import { useState , useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import background from '../ImagesFol/background.jpg'; // Import the background image
import background2 from '../ImagesFol/background2.jpg'; // Import the background image
import backgroundVideo from '../ImagesFol/backvid.mp4';
import './Booking.css';

const Booking = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [pickUpDate, setPickUpDate] = useState(null);
  const [dropOffDate, setDropOffDate] = useState(null);

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
      delay: 200,
      duration: 2000,
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
      duration: 700,
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
      <div className="mainbody">{/*< style={{ backgroundImage: `url(${background2})` }}> */}
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <div className="home-container">
          <div className="Name">
            <h1 className="Title">
              VROOM CAR RENTALS
            </h1>
          </div>
          <div className="sub-container">
            <div className="col-lg-6" id="Input1">
              <label htmlFor="Pickup-Location" id="label1">
                Pick Up Location
              </label>
              <input
                type="text"
                id="textInput1"
                placeholder="Enter your text here"
                value={input1}
                onChange={handleInput1Change}
              />
            </div>
            <div className="col-lg-6" id="Input2">
              <label htmlFor="Dropoff-Location" id="label2">
                Drop Off Location
              </label>
              <input
                type="text"
                id="textInput2"
                placeholder="Enter your text here"
                value={input2}
                onChange={handleInput2Change}
              />
            </div>
            <div className="col-lg-6" id="Input3">
              <label htmlFor="dateInput1" id="label3">
                Pick Up Date
              </label>
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
            <div className="col-lg-6" id="Input4">
              <label htmlFor="dateInput2" id="label4">
                Drop Off Date
              </label>
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
            <div className="col-lg-12" id="submitbtn">
              <button id="rentbtn" onClick={handleSubmit}>
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
