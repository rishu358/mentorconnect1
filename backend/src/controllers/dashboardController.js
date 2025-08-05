// backend/src/controllers/dashboardController.js

// @desc    Get dashboard statistics
// @route   GET /api/dashboard/stats
// @access  Private (This route will be protected by authentication middleware)
exports.getDashboardStats = (req, res) => {
  // In a real application, you would fetch these statistics from your database.
  // For now, we'll return static mock data.
  const stats = {
    members155: '155+',
    members39: '39+',
    members25: '25+',
    communitySupport: '18K+',
  };
  res.json(stats); // Send the stats as a JSON response
};

// @desc    Get recommended courses
// @route   GET /api/dashboard/courses
// @access  Public (This route does not require authentication for this example)
exports.getRecommendedCourses = (req, res) => {
  // In a real application, you would fetch these courses from your database.
  // For now, we'll return static mock data.
  const courses = [
    { id: 1, title: 'Full Stack Web Development', creator: 'Albert Jamies', lessons: 24, hours: 40, category: 'Development' },
    { id: 2, title: 'Data Science Fundamentals', creator: 'Jane Doe', lessons: 30, hours: 50, category: 'Data Science' },
    { id: 3, title: 'UI/UX Design Principles', creator: 'Chris Green', lessons: 20, hours: 35, category: 'Design' },
    { id: 4, title: 'Advanced JavaScript', creator: 'Emily White', lessons: 18, hours: 30, category: 'Development' },
    { id: 5, title: 'Cloud Computing Basics', creator: 'Michael Brown', lessons: 22, hours: 45, category: 'Cloud' },
  ];
  res.json(courses); // Send the courses array as a JSON response
};
