const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const colors = require('colors');
const app = require('./app');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log(`Database connected successfully`.red.bold);
})

// server

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`.yellow.bold);
})