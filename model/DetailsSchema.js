const mongoose = require('./db.js')

const Details = new mongoose.Schema({
    userid:String,
    name:String,
    email:String,
    department:String,
    phn:String,
    dob:Date
  })
  const details = mongoose.model("details",Details);


module.exports = details;
