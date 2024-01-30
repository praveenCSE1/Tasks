const mongoose = require('./db.js')

const mcq_data = new mongoose.Schema({

    question:"String",
    options:[String],
    correct:"string"

})

const mcq = mongoose.model("mcqs",mcq_data);

module.exports = mcq;