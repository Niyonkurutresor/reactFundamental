const nodemailer = require('nodemailer');
const dotenv = require('../config/env/development')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'niyonkurutresor17@gmail.com',
    pass: dotenv.GMAI_PASSWORD,
  },
});

// Function for sending an email
async function sendEmail(to) {
  const mailOptions = {
    from: 'niyonkurutresor17@gmail.com',
    to:to,
    subject:'create user',
    text:'thank you for creating account on our website',
  };

  await transporter.sendMail(mailOptions);
}

module.exports = {
  sendEmail,
};
