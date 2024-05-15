import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import backgroundVideo from '../ImagesFol/backvid.mp4';
import './Booking.css';


const Booking = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [pickUpDate, setPickUpDate] = useState(null);
  const [dropOffDate, setDropOffDate] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve stored data from local storage upon component mount if user is logged in
    const isLoggedIn = localStorage.getItem('name');
    if (isLoggedIn) {
      const storedData = JSON.parse(localStorage.getItem('bookingData'));
      if (storedData) {
        setInput1(storedData.input1 || '');
        setInput2(storedData.input2 || '');
        setPickUpDate(storedData.pickUpDate || null);
        setDropOffDate(storedData.dropOffDate || null);
        
        // Clear stored data from local storage once used
        localStorage.removeItem('bookingData');
      }
    }
  }, []);

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

    const isLoggedIn = localStorage.getItem('name');

    if (!isLoggedIn) {
      // Store the entered data in local storage before redirecting to login
      const bookingData = {
        input1,
        input2,
        pickUpDate,
        dropOffDate,
      };
      localStorage.setItem('bookingData', JSON.stringify(bookingData));

      // Redirect to login page if not logged in
      navigate('/login');
      return;
    }

    // If already logged in, proceed to the vehicles page
    navigate('/vehicles', { state: { bookingData: { input1, input2, pickUpDate, dropOffDate } } });
  };

  useEffect(() => {
    ScrollReveal().reveal('.aboutimage', {
      delay: 200,
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
            <h1 className="Title">
              Vroom Car Rental Services
            </h1>
            <h5 id="sub-title">At your Door Steps</h5>
          </div>
          <div className="sub-container">
            <div className="col-lg-6 " id="Input1">
              <label htmlFor="Pickup-Location" id="label1" className='improm'>
                Pick Up Location
              </label>
              <input
                type="text"
                id="textInput1"
                placeholder="Enter your location here"
                value={input1}
                onChange={handleInput1Change}
              />
            </div>
            <div className="col-lg-6 dofl" id="Input2">
              <label htmlFor="Dropoff-Location" id="label2">
                Drop Off Location
              </label>
              <input
                type="text"
                id="textInput2"
                placeholder="Enter your location here"
                value={input2}
                onChange={handleInput2Change}
              />
            </div>
            <div className="col-lg-6 pudate" id="Input3">
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
            <div className="col-lg-6 dofd" id="Input4">
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
            <div className="col-lg-12 buttonfindthecar" id="submitbtn">
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
