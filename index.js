const express = require('express');
const cors = require('cors');
const app = express();
const tour = require('./Routes/Tour.route');
const { ErrorHandeler } = require('./Middleware/Error.handeler');
const dbConnection = require('./server');

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api/v1/tour', tour);

app.get("/",(req,res)=>{
    res.send("Route Is Working!!")
})
dbConnection()
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`.yellow.bold);
})
app.all("*", (req, res) => {
    res.send("404 not found")
    })
   
    app.use(ErrorHandeler)
    process.on('unhandledRejection', (err) => {
    
      console.log(`Logged Error: ${err}`);
    
      // Close server & exit process
    
      app.close(() => process.exit(1));
    
    
    })
// Routes
module.exports = app;