// backend/src/models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // For password hashing

// Define the User Schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Ensures each username is unique
    trim: true,   // Removes whitespace from both ends of a string
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures each email is unique
    match: [/.+@.+\..+/, 'Please enter a valid email address'], // Basic email format validation
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Minimum password length
  },
  date: {
    type: Date,
    default: Date.now, // Automatically sets the creation date
  },
});

// Middleware to hash the password before saving the user
// 'pre' hook runs before a 'save' event
UserSchema.pre('save', async function (next) {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified('password')) {
    next(); // Move to the next middleware/save operation
  }

  // Generate a salt (random string) with a cost factor of 10
  const salt = await bcrypt.genSalt(10);
  // Hash the password using the generated salt
  this.password = await bcrypt.hash(this.password, salt);
  next(); // Move to the next middleware/save operation
});

// Method to compare entered password with the hashed password in the database
UserSchema.methods.matchPassword = async function (enteredPassword) {
  // Use bcrypt to compare the plain text password with the hashed password
  return await bcrypt.compare(enteredPassword, this.password);
};

// Export the User model based on the schema
module.exports = mongoose.model('User', UserSchema);
