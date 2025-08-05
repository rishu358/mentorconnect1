// backend/src/utils/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB using the URI from environment variables
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,    // Use the new URL parser
      useUnifiedTopology: true, // Use the new server discovery and monitoring engine
      // The options useCreateIndex and useFindAndModify are deprecated and
      // no longer needed in Mongoose 6+
    });
    console.log('MongoDB Connected...'); // Log success message
  } catch (err) {
    console.error('MongoDB connection error:', err.message); // Log error message
    // Exit the process with a failure code if connection fails
    process.exit(1);
  }
};

// Export the connectDB function directly so it can be called as a function
module.exports = connectDB;
