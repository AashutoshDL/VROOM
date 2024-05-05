import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './bookingConfirm.css';

const bookingConfirm = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();


  const handleLoginClick = () => {
    setIsOpen(true);
    navigate('/login');
  };

  return (
    <div className={`popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-content">
        <h2>Booking Confirmed</h2>
        <button onClick={handleLoginClick}>OKAY</button>
      </div>
    </div>
  );
};

export default bookingConfirm;
