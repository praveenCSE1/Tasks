const mongoose = require('./db')

const mcq1 = mongoose.Schema({
    username:"String",
    marksobtained:{type: Number, default: 0},
    TotalAttempts:{type: Number, default: 0},
    Date:Date
})

const mcqResult= mongoose.model("mcqResults",mcq1 );

module.exports = mcqResult;