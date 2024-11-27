//Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. (Mongoose is popular Node.js library used for connecting to MongoDB)
//mongoose.Schema is used to define the structure of the documents in a MongoDB collection.
// Schema acts as a blueprint, specifying what fields are allowed and their data types.
// UserSchema defines the structure of the User collection in MongoDB.
// Schema is used to define the structure of the User collection in Node.js
// if any user try to login the collection (field)  to pair key value to make object.


const mongoose = require('mongoose');
const Schema = mongoose.Schema;  
const UserSchema = new Schema({                         
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },

  date:{
    type: Date,
    default: Date.now
  }
});

// Export the model
 const  User= mongoose.model('user', UserSchema)
 module.exports= User