const express = require("express");
const app = express();

// libararies
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"))

app.get("/", (req, res) =>{
    res.send("welcome to my page")
})

app.get("/users", (req, res) =>{
    res.send("welcome to users page")
})



mongoose.connect(process.env.MONGO_URL, {useNameUrlParse: true}, ()=>{
    console.log('connected to mongodb');
})

app.listen(8800,() =>{
    console.log("Server started!! nodemon check");
})