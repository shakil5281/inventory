const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');


const connectDB = asyncHandler(async (req, res, next) => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB Connected'.cyan)
        
    } catch (err) {
        console.error('Database connection error'.red);
        res.status(500).json({message: err.message});
    }
})

module.exports = connectDB;