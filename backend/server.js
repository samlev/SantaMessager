require('dotenv').config(); // Load environment variables
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express(); // Initialize Express
const port = process.env.PORT || 5000; // Get the port from environment variables or use 5000

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Test Route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Email Sending Route
app.post('/send-email', async (req, res) => {
  const { email, subject, message } = req.body;

  // Create transporter using Gmail
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_USER, // Gmail username from .env
      pass: process.env.GMAIL_PASS, // Gmail password from .env
    },
  });

  try {
    // Sending email
    const info = await transporter.sendMail({
      from: `"Santa 🎅" <${process.env.GMAIL_USER}>`, // Sender address
      to: email,                                     // Receiver address
      subject: subject,                              // Subject line
      text: message,                                 // Plain text body
      html: `<p>${message}</p>`,                     // HTML body
    });

    console.log('Message sent: %s', info.messageId);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send email');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
