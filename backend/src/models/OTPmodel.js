const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: [true, "Email cannot be blank"],
    lowercase: true,
    match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
  },
  status: {
    type: Number,
    required: true,
    default: 0
  },
  otp: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 6,
    default: 0
  },
  created_at: {
    type: Date,
    default: Date.now,
    expires: 300 // OTP will expire after 5 minutes (300 seconds)
  }
});

const OTP = mongoose.model('OTP', otpSchema);

module.exports = OTP;
