const mongoose = require('mongoose')
// Connect to MongoDB
const Mongo_URI = "mongodb://localhost:27017/React-vite"

const dbConnect =() => {
    mongoose.connect(Mongo_URI) 
    // Connection established successfully message
   .then(() =>{
       console.log("MongoDB connected successfully");
   })
    
}
module.exports = dbConnect