const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/auth';

mongoose.connect(uri);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB eror:'));
db.once('open', () => {
  console.log('Connected');
});

//schema for users
const users = new mongoose.Schema({
  name:String,
  email:String,
  role:{
    type:String,
    default:"USER"
  },
  googleId:String
});

const user = mongoose.model("users",users);

module.exports = user;