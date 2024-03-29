const express = require('express');
const bodyParser = require('body-parser');
const mongoose= require('mongoose');
require("dotenv").config();
var cors = require('cors')

const routes = require('./Routes/index')

const app = express();

app.use(cors())

//handle cors
// app.use((req,res,next)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
//     res.setHeader('Acess-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// })

const PORT = 1111

app.use(bodyParser.json());
//routes
app.use('/',routes);
  
//remember to change password and add databasename
const URL =  process.env.MONGO_URL


mongoose.connect("mongodb+srv://akshatawasthy19:qW4z5mT0u74DPQmW@akshatdb.k2w7gu2.mongodb.net/Parkingapp?retryWrites=true&w=majority&appName=AkshatDB",{
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(success =>{
    console.log("connected to mongodb successfully");
    app.listen(PORT, ()=>{
        console.log(`server running on port ${PORT}`);
    });
}).catch(err=>{
    console.log(`error in database - ${err}`);
})



