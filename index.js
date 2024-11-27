const express = require('express')

const dbConnect = require('./db')
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
// calling dbConnect
dbConnect()
//Middleware"

//Route handlers
app.use('/api/auth', require('./routes/Auth'))

// Start the server
app.listen(port,() => {
    console.log(`Server is running on http://localhost: ${port}`);
})



