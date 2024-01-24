const mongoose = require('./db.js')

const uschema = new mongoose.Schema({email:String,password:String});

const user = mongoose.model("register",uschema);

module.exports = user;