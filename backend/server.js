// backend/server.js
require('dotenv').config(); // Load environment variables from .env file at the very beginning
const app = require('./src/app'); // Import your configured Express application
const connectDB = require('./src/utils/db'); // Import the database connection function

// Define the port the server will listen on.
// It tries to use the PORT environment variable (from .env), otherwise defaults to 5000.
const PORT = process.env.PORT || 5000;

// Connect to the MongoDB database
connectDB();

// Start the Express server and make it listen for incoming requests on the specified port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Access backend at: http://localhost:${PORT}`);
});
