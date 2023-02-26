const OTP = require('../models/OTPmodel')
const User = require('../models/Usermodel')
const asyncHandler = require('express-async-handler');


const CreateAccount = asyncHandler(async (req, res) => {
    try{

    }catch(err){
        console.log(err)
        res.status(500).json({ message: err.message || 'Something went wrong' })
    }
})
const DeleteAccount = asyncHandler(async (req, res) => {
    try{

    }catch(err){
        console.log(err)
        res.status(500).json({ message: err.message || 'Something went wrong' })
    }
})
const UpdateAccount = asyncHandler(async (req, res) => {
    try{

    }catch(err){
        console.log(err)
        res.status(500).json({ message: err.message || 'Something went wrong' })
    }
})
const ReadAccount = asyncHandler(async (req, res) => {
    try{

    }catch(err){
        console.log(err)
        res.status(500).json({ message: err.message || 'Something went wrong' })
    }
})


module.exports = {
    CreateAccount,
    DeleteAccount,
    UpdateAccount,
    ReadAccount
}
