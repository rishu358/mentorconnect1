// backend/src/app.js
const express = require('express');
const cors = require('cors'); // Import the CORS middleware
const app = express(); // Initialize the Express application

// Import your defined routes
const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');
// Add imports for any other routes you create (e.g., mentorRoutes, chatRoutes)

// Middleware setup
// Enable CORS for all origins. In a production environment, you should restrict this
// to specific origins (e.g., your frontend's domain).
app.use(cors());

// Body parser middleware to parse incoming JSON requests
app.use(express.json());

// Mount your routes
// Any request to /api/auth will be handled by authRoutes
app.use('/api/auth', authRoutes);
// Any request to /api/dashboard will be handled by dashboardRoutes
app.use('/api/dashboard', dashboardRoutes);
// Add other routes here as you create them:
// app.use('/api/mentor', mentorRoutes);
// app.use('/api/chats', chatRoutes);

// Basic root route for testing if the API is running
app.get('/', (req, res) => {
  res.send('MentorConnect Backend API is running...');
});

module.exports = app; // Export the configured Express app
