const express = require('express');
const app = express();
const cors = require('cors');
const product = require('./Routes/Product.route');

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api/v1/product', product);

app.get("/",(req,res)=>{
    res.send("Route Is Working!!")
})
// Routes
module.exports = app;