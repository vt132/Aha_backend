const User = require('../models/user');
const { validatePassword, sendVerificationEmail } = require('../utils');

exports.signUp = async (email, password, confirmPassword) => {
  // Validate the password
  if (!validatePassword(password)) {
    throw new Error('Invalid password');
  }

  // Check if the password and confirmPassword match
  if (password !== confirmPassword) {
    throw new Error('Passwords do not match');
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create the user
  const user = await User.create({ email, password: hashedPassword });

  // Send the verification email
  sendVerificationEmail(user);
};
