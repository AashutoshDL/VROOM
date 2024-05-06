import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import backgroundVideo from '../ImagesFol/backvid.mp4';
import './Booking.css';

const Booking = () => {
  const [input1, setInput1] = useState(localStorage.getItem('input1') || '');
  const [input2, setInput2] = useState(localStorage.getItem('input2') || '');
  const [pickUpDate, setPickUpDate] = useState(
    localStorage.getItem('pickUpDate') || null
  );
  const [dropOffDate, setDropOffDate] = useState(
    localStorage.getItem('dropOffDate') || null
  );
  const navigate = useNavigate();

  const handleInput1Change = (event) => {
    setInput1(event.target.value);
  };

  const handleInput2Change = (event) => {
    setInput2(event.target.value);
  };

  const handlePickUpDateChange = (date) => {
    try {
      setPickUpDate(date instanceof Date ? date : null);
    } catch (error) {
      console.error('Error setting pick-up date:', error);
    }
  };

  const handleDropOffDateChange = (date) => {
    try {
      setDropOffDate(date instanceof Date ? date : null);
    } catch (error) {
      console.error('Error setting drop-off date:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isLoggedIn = localStorage.getItem('name');

    if (!isLoggedIn) {
      // Store form data in localStorage before redirecting to login
      localStorage.setItem('input1', input1);
      localStorage.setItem('input2', input2);
      localStorage.setItem('pickUpDate', pickUpDate);
      localStorage.setItem('dropOffDate', dropOffDate);

      // Redirect to login page if not logged in
      navigate('/login');
      return;
    }

    // Clear form data from localStorage if logged in
    localStorage.removeItem('input1');
    localStorage.removeItem('input2');
    localStorage.removeItem('pickUpDate');
    localStorage.removeItem('dropOffDate');

    const bookingData = {
      input1,
      input2,
      pickUpDate,
      dropOffDate,
    };
    navigate('/vehicles', { state: { bookingData } });
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
      <div className="mainbody">
        <video autoPlay loop muted className="background-video">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="home-container">
          <div className="Name">
            <h1 className="Title">VROOM CAR RENTALS</h1>
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
                onChange={(date) => handlePickUpDateChange(date)}
                showTimeSelect
                minDate={new Date()} // restricts to past dates
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
                onChange={(date) => handleDropOffDateChange(date)}
                showTimeSelect
                minDate={pickUpDate || new Date()}
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
