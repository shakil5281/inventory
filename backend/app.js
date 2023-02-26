// Internal Dependencies
const express = require("express");
const app = express();
const path = require("path");
const { readdirSync } = require("fs");
const errorHandler = require('./src/middleware/errorHendler')
require('colors');





// external dependencies
const cors = require("cors");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const hpp = require("hpp");
const mongoSanitize = require("express-mongo-sanitize");






// internal dependencies use
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())
app.use(morgan('dev'));
app.use(helmet())
app.use(hpp())
app.use(mongoSanitize())



// Rate limiting
const limiter= rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)

// routing
readdirSync("./routes").map(r => app.use("/api/v1", require(`./routes/${r}`))) 



//error handler
app.use(errorHandler);


// Undefined Route Implement
app.use("*",(req,res)=>{
    res.status(404).json({status:"fail",data:"Not Found"})
})


module.exports = app;





