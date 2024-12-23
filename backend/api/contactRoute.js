// filepath: /c:/Repos/ZProfit/backend/api/contactRoute.js

const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/contact', async (req, res) => {
  let data = req.body;

  // if the fields are empty we want to appear a message 
  if (data.name.length === 0 || data.email.length === 0 || data.message.length === 0) {
    res.status(400).send('Missing required fields');
    return res.json({ msg: "Please fill all the fields" });
  }

  // create a transporter
  let smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'theofficalclause@gmail.com',
      pass: 'Santababy10!',
    },
  });

  // Define the mail options
  let mailOptions = {
    from: data.email,
    to: 'ejfury@protonmail.com',
    subject: `Message from ${data.name}`,
    html: `
      <h3>Information</h3>
      <ul>
        <li>Name: ${data.name}</li>
        <li>Email: ${data.email}</li>
      </ul>
      <h3>Message</h3>   
      <p>${data.message}</p>
    `,
  };

  // Send the message with sendMail
  smtpTransport.sendMail(mailOptions, (err) => {
    try {
      if (err) return res.status(500).json({ msg: 'There is a server error' });
      res.status(200).send('Email sent successfully');
    } catch (error) {
      res.status(500).send('Failed to send message');
    }
  });
});

module.exports = router;