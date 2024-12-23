import React from 'react';
import { Button } from './Components/Card/Buttons'; // Ensure this path is correct
import { FaGift } from 'react-icons/fa';
import './Styles/textStyling.css';
import { useNavigate } from 'react-router-dom';

const App: React.FC = () => {
  const navigate = useNavigate();

  function handleButtonClick(): void {
    navigate('/write-letter');
  }

  return (
    <div className="santa-container">
      <h1 className="Dear Santa">Dear Santa...</h1>
      <Button
        label={
          <>
            <FaGift /> Write a Letter to Santa
          </>
        }
        ariaLabel="Write Santa a Letter"
        style={{ backgroundColor: 'red', color: 'white' }}
        onClick={handleButtonClick}
      />
      <img
        src="CuteSanta.jpg"
        alt="Santa"
        className='santa-image'
        />
    </div>
  );
};

export default App;