const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'example@gmail.com',
    pass: 'example1234'
  }
});

let mailOptions = {
  from: 'Busy Industries <example@gmail.com>',
  to: 'RECIPIENT@MAIL.COM',
  subject: 'Sending Email using Node.js',
  html: '<!DOCTYPE html><html><head><title>Hi</title><body><h1>Hello, World!</h1><hr /><p>Hi there.</p></body></html>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
