// backend/src/routes/dashboard.js
const express = require('express');
const { getDashboardStats, getRecommendedCourses } = require('../controllers/dashboardController'); // Import controller functions
const { protect } = require('../middleware/authMiddleware'); // Import the authentication middleware
const router = express.Router(); // Create a new router instance

// Define the route for dashboard statistics
// This route is protected by the 'protect' middleware, meaning only authenticated users can access it.
router.get('/stats', protect, getDashboardStats);

// Define the route for recommended courses
// This route is public and does not require authentication for this example.
router.get('/courses', getRecommendedCourses);

module.exports = router; // Export the router
