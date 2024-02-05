const mongoose = require('./db.js')

const Details = new mongoose.Schema({
    userId:String,
    name:String,
    email:String,
    department:String,
    phn:String,
    dob:Date
  })
  const details = mongoose.model("Student",Details);


module.exports = details;
