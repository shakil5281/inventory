const express = require('express');
const router = express.Router()
const {generateOTP, verifyOTP} = require('../src/controller/OTPController')


router.post('/accountverify/:email', generateOTP)
router.post('/verifyOTP/:email/:otp', verifyOTP)

module.exports = router;