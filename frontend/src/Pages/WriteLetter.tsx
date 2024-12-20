import React from 'react';
import '../Styles/textStyling.css';

const WriteLetter: React.FC = () => {
  return (
    <div className="santa-container">
      <h1 className="santa-title">Write Your Letter to Santa</h1>
      <form>
        {/* First Name Section */}
        <div className="form-group">
          <label htmlFor="firstName">My first name is</label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName" 
            placeholder="What is your first name?" 
          />
        </div>

        {/* Gender Section */}
        <div className="form-group">
          <label>I am a</label>
          <div>
            <input type="radio" id="boy" name="gender" value="boy" />
            <label htmlFor="boy">Boy</label>
            <input type="radio" id="girl" name="gender" value="girl" />
            <label htmlFor="girl">Girl</label>
          </div>
        </div>

        {/* Age Section */}
        <div className="form-group">
          <label htmlFor="age">and I am already</label>
          <input 
            type="number" 
            id="age" 
            name="age" 
            placeholder="Age in years" 
          /> years old!!!
        </div>

        {/* City Section */}
        <div className="form-group">
          <label htmlFor="city">I live in the great city of</label>
          <input 
            type="text" 
            id="city" 
            name="city" 
            placeholder="City name" 
          />
        </div>

        {/* Country Section */}
        <div className="form-group">
          <label htmlFor="country">Of course, that's in</label>
          <input 
            type="text" 
            id="country" 
            name="country" 
            placeholder="Country name" 
          />
        </div>

        {/* Goodness Section */}
        <div className="form-group">
          <label htmlFor="goodness">This year I've been so good that</label>
          <textarea 
            id="goodness" 
            name="goodness" 
            placeholder="Describe how good you've been" 
            rows={3}
          ></textarea>
        </div>

        {/* Wishes Section */}
        <div className="form-group">
          <label htmlFor="wishes">Santa, some things that I might like for Christmas this year are:</label>
          <input 
            type="text" 
            id="wish1" 
            name="wish1" 
            placeholder="Put your first wish here!" 
          />
          <input 
            type="text" 
            id="wish2" 
            name="wish2" 
            placeholder="Put your second wish here!" 
          />
          <input 
            type="text" 
            id="wish3" 
            name="wish3" 
            placeholder="Put your third wish here!" 
          />
        </div>

        {/* Comments Section */}
        <div className="form-group">
          <label htmlFor="comments">P.S. Santa Claus, I almost forgot to add these comments!</label>
          <textarea 
            id="comments" 
            name="comments" 
            placeholder="Write your special message to Santa here..." 
            rows={5}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="form-submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default WriteLetter;
