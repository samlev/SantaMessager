import React, { useState } from 'react';
import '../Styles/textStyling.css';
import axios from 'axios';

interface FormData {
  firstName: string;
  gender: string;
  age: string;
  city: string;
  country: string;
  goodness: string;
  wish1: string;
  wish2: string;
  wish3: string;
  comments: string;
  email: string;
}

const initialFormData: FormData = {
  firstName: '',
    gender: '',
    age: '',
    city: '',
    country: '',
    goodness: '',
    wish1: '',
    wish2: '',
    wish3: '',
    comments: '',
    email: '',
};

const WriteLetter: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(intialFormData);
  const [emailSent, setEmailSent] = useState<boolean | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  
    const santaMessage = `
      Ho ho ho, ${formData.firstName}!
      Santa here! I see you're a wonderful ${formData.gender} from ${formData.city}, ${formData.country}.
      At just ${formData.age} years old, you've been so good this year because "${formData.goodness}".
      I’ll keep in mind your wishes:
        1. ${formData.wish1}
        2. ${formData.wish2}
        3. ${formData.wish3}
      And I'll make sure to read your comments: "${formData.comments}".
      Have a Merry Christmas!
    `;
  
    try {
      await axios.post('http://localhost:5000/send-email', {
        email: formData.email,
        subject: 'A Message from Santa 🎅',
        message: santaMessage,
      });
  
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email.");
    }
  };

  return (
    <div className="santa-letter-container">
      <h1 className="santa-title">Write Your Letter to Santa</h1>
      <form onSubmit={handleSubmit}>
       {Object.keys(initialFormData).map((key) => (
          <div className="form-group" key={key}>
            <label htmlFor={key}>{key}</label>
            <input
              type="text"
              id={key}
              name={key}
              placeholder={`Enter your ${key}`}
              value={formData[key as keyof FormData]}
              onChange={handleChange}
            />
          </div>
        ))
       }

        <div className="form-group">
          <label>I am a</label>
          <div>
            <input
              type="radio"
              id="boy"
              name="gender"
              value="boy"
              checked={formData.gender === 'boy'}
              onChange={handleChange}
            />
            <label htmlFor="boy">Boy</label>
            <input
              type="radio"
              id="girl"
              name="gender"
              value="girl"
              checked={formData.gender === 'girl'}
              onChange={handleChange}
            />
            <label htmlFor="girl">Girl</label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="age">I am</label>
          <input
            type="text"
            id="age"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
          />
          <label>years old</label>
        </div>

        <div className="form-group">
          <label htmlFor="city">I live in</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="goodness">This year I've been so good that</label>
          <input
            type="text"
            id="goodness"
            name="goodness"
            placeholder="Explain why you've been good"
            value={formData.goodness}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="wish1">What I really want for Christmas is</label>
          <input
            type="text"
            id="wish1"
            name="wish1"
            placeholder="Your first wish"
            value={formData.wish1}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="wish2">My second wish is</label>
          <input
            type="text"
            id="wish2"
            name="wish2"
            placeholder="Your second wish"
            value={formData.wish2}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="wish3">My third wish is</label>
          <input
            type="text"
            id="wish3"
            name="wish3"
            placeholder="Your third wish"
            value={formData.wish3}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="comments">Additional comments for Santa</label>
          <textarea
            id="comments"
            name="comments"
            placeholder="Any extra notes for Santa?"
            value={formData.comments}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>

      {emailSent !== null && (
        <div className="email-status">
          {emailSent ? (
            <p>Email sent successfully! Check your inbox for Santa's message.</p>
          ) : (
            <p>There was an error sending your email. Please try again later.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default WriteLetter;
