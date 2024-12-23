import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/Styling.css'; // Ensure styles are implemented here

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
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [emailSent, setEmailSent] = useState<boolean | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

      setEmailSent(true);
      alert('Email sent successfully!');
    } catch (error) {
      setEmailSent(false);
      console.error('Error sending email:', error);
      alert('Failed to send email.');
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
              required
            />
          </div>
        ))}

        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <input
            type="radio"
            id="boy"
            name="gender"
            value="boy"
            checked={formData.gender === 'boy'}
            onChange={handleChange}
            required 
          />
          <label htmlFor="boy">Boy</label>
          <input
            type="radio"
            id="girl"
            name="gender"
            value="girl"
            checked={formData.gender === 'girl'}
            onChange={handleChange}
            required
          />
          <label htmlFor="girl">Girl</label>
        </div>

        <div className="form-group">
          <label htmlFor="comments">Additional Comments</label>
          <textarea
            id="comments"
            name="comments"
            placeholder="Any extra notes for Santa?"
            value={formData.comments}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
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
