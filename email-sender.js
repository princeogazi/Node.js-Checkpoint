const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'princeblue10051997@gmail.com',
    pass: 'pmij kipa hpza ugqp',
  },
});

// Email content
const mailOptions = {
  from: 'princeblue10051997@gmail.com',
  to: 'princewill_ogazi@yahoo.com',
  subject: 'Node.js Checkpoint',
  text: 'This is a test email from Node.js',
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});