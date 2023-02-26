const OTP = require('../models/OTPmodel')
const User = require('../models/Usermodel')
const SentEmailutility = require('../utility/SentEmailUtility')
const asyncHandler = require('express-async-handler');


const generateOTP = asyncHandler(async (req, res) => {
  const email = req.params.email;
  const OTPCode = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6 digit random OTP
  try {

    const user = await User.aggregate([
      {
        $count: 'email'
      }
    ])
    if (user.length < 1) {
      await OTP.create({ email: email, otp: OTPCode })
      let SendEmail = await SentEmailutility(email, "Your PIN Code is= " + OTPCode, "New account OTP verification")
      res.status(200).json({ status: "success", data: SendEmail })
    } else {
      res.status(404).json({ error: "User Request Failed" })
    }


  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Something went wrong' });
  }
});





const verifyOTP = asyncHandler(async (req, res) => {
  let email = req.params.email;
  let OTPCode = req.params.otp;
  let status = 0;
  let statusUpdate = 1;
  try {
    let OTPCount = await OTP.aggregate([{ $match: { email: email, otp: OTPCode, status: status } }, { $count: "total" }])
    if (OTPCount.length > 0) {
      let OTPUpdate = await OTP.updateOne({ email: email, otp: OTPCode, status: status }, {
        email: email,
        otp: OTPCode,
        status: statusUpdate
      })
      res.status(200).json({ status: "success", data: OTPUpdate })
    } else {
      res.status(404).json({ status: "fail", data: "Invalid OTP Code" })
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message || 'Something went wrong' })

  }
})



module.exports = { generateOTP, verifyOTP }