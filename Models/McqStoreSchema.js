const mongoose = require('./db')

const mcq1 = mongoose.Schema({
    username:"String",
    TotalAttempts:Number,
    Date:Date
})

const mcqResult= mongoose.model("mcqResults",mcq1 );

module.exports = mcqResult;