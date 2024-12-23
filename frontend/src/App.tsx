import React from 'react';
import { Button } from './Components/Card/Buttons'; // Ensure this path is correct
import { FaGift } from 'react-icons/fa';
import './Styles/Styling.css';
import { useNavigate } from 'react-router-dom';
import CuteSanta from './CuteSanta.jpg';

const App: React.FC = () => {
  const navigate = useNavigate();

  function handleButtonClick(): void {
    navigate('/write-letter');
  }

  return (
    <div className="santa-container">
      <h1 className="Dear Santa">Dear Santa...</h1>
      <img
        src={CuteSanta}
        alt="Santa Clause"
        className="santa-image"
      />
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
    </div>
  );
};

export default App;