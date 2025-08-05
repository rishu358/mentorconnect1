// backend/src/routes/auth.js
const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController'); // Import controller functions
const router = express.Router(); // Create a new router instance

// Define the route for user registration
// When a POST request comes to /api/auth/register, it will be handled by registerUser function
router.post('/register', registerUser);

// Define the route for user login
// When a POST request comes to /api/auth/login, it will be handled by loginUser function
router.post('/login', loginUser);

module.exports = router; // Export the router
// This file sets up the authentication routes for user registration and login