const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Route to handle email sending
app.post('/send-email', async (req, res) => {
  const { email, subject, message } = req.body;

  // Nodemailer transporter configuration
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "maddison53@ethereal.email", // Ethereal user
      pass: "jn7jnAPss4f63QBp6D",        // Ethereal password
    },
  });

  try {
    // Sending email
    const info = await transporter.sendMail({
      from: '"Santa 🎅" <santa@northpole.com>', // Sender address
      to: email,                                // Receiver address
      subject: subject,                         // Subject line
      text: message,                            // Plain text body
      html: `<p>${message}</p>`,               // HTML body
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
