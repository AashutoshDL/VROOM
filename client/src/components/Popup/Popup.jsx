import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Popup.css';

const RegisterSuccessPopup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();


  const handleLoginClick = () => {
    setIsOpen(false);
    navigate('/login');
  };

  return (
    <div className={`popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-content">
        <h2>Register Successfully</h2>
        <p>Your account has been created successfully!</p>
        <button onClick={handleLoginClick}>Login</button>
      </div>
    </div>
  );
};

export default RegisterSuccessPopup;
