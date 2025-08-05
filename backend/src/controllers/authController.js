// backend/src/controllers/authController.js
const User = require('../models/user'); // Import the User model
const jwt = require('jsonwebtoken');   // For generating JWTs

// Helper function to generate a JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '1h', // Token will expire in 1 hour
  });
};

// @desc    Register new user
// @route   POST /api/auth/register
// @access  Public
exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  // Basic validation: Check if all required fields are provided
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Please enter all fields' });
  }

  try {
    // Check if a user with the given email already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    // Check if a user with the given username already exists
    user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: 'Username already taken' });
    }

    // Create a new user instance
    user = new User({
      username,
      email,
      password, // Password will be hashed by the pre-save hook in User model
    });

    // Save the new user to the database
    await user.save();

    // Respond with success message and user data (excluding password)
    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id), // Generate and send a JWT
      },
    });
  } catch (error) {
    console.error('Error registering user:', error.message);
    // Handle specific Mongoose validation errors if needed, otherwise send generic 500
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: 'Server error during registration' });
  }
};

// @desc    Authenticate user & get token
// @route   POST /api/auth/login
// @access  Public
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Basic validation: Check if email and password are provided
  if (!email || !password) {
    return res.status(400).json({ message: 'Please enter email and password' });
  }

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    // Check if user exists and if the provided password matches the stored hashed password
    if (user && (await user.matchPassword(password))) {
      res.json({
        message: 'Logged in successfully',
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          token: generateToken(user._id), // Generate and send a JWT
        },
      });
    } else {
      // If user not found or password doesn't match
      res.status(401).json({ message: 'Invalid credentials (email or password incorrect)' });
    }
  } catch (error) {
    console.error('Error logging in user:', error.message);
    res.status(500).json({ message: 'Server error during login' });
  }
};
