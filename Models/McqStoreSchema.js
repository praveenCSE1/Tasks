const mongoose = require('./db')

const mcq1 = mongoose.Schema({
    userId:String,
    username:String,
    Result:String,
    marksObtained:{type: Number, default: 0},
    TotalAttempts:{type: Number, default: 0},
    Date:Date
})

const mcqResult= mongoose.model("mcqResults",mcq1 );

module.exports = mcqResult;