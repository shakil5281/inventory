// Internal 
const app = require('./app')
require('dotenv').config()
const connectDB =require('./src/middleware/Database')

// server port
const PORT = process.env.PORT || 8000

// Database connection
connectDB()



app.listen(PORT, ()=>{
    console.log(`server start on ${PORT}`)
})