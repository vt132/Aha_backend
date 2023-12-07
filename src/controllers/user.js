const userService = require('../services/user');

exports.signUp = async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  try {
    await userService.signUp(email, password, confirmPassword);
    res.json({ message: 'Sign up successful. Please check your email to verify your account.' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
