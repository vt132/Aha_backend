const nodemailer = require('nodemailer');

exports.validatePassword = (password) => {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return re.test(password);
};

exports.sendVerificationEmail = (user) => {
  const transporter = nodemailer.createTransport({ /* your SMTP settings */ });
  const mailOptions = {
    from: 'no-reply@example.com',
    to: user.email,
    subject: 'Email Verification',
    text: `Click the link to verify your email: http://localhost:3000/verify-email?userId=${user.id}`
  };
  transporter.sendMail(mailOptions);
};