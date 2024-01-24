const mongoose = require('./db.js')

console.log(a)
const d1 = new mongoose.Schema({
    userid:String,
    name:String,
    email:String,
    department:String,
    phn:String,
    dob:Date
  })
  const details = mongoose.model("details",d1);

module.exports = details;
