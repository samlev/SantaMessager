import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import WriteLetter from './Pages/WriteLetter';
import { render } from "@react-email/components";
import nodemailer from "nodemailer";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const transporter = nodemailer.createTransport({
  host: "smtp.forwardemail.net",
  port: 465,
  secure: true,
  auth: {
    user: "my_user",
    pass: "my_password",
  },
});

const emailHtml = await render(<Email url="https://example.com" />);

const options = {
  from: "you@example.com",
  to: "user@gmail.com",
  subject: "hello world",
  html: emailHtml,
};

await transporter.sendMail(options);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/write-letter" element={<WriteLetter />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

