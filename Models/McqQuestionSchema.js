const mongoose = require('./db.js')

const mcq_data = new mongoose.Schema({
    question: String,
    options: [{
        text: String,
        isCorrect: Boolean
    }]
})

const mcq = mongoose.model("mcqs",mcq_data);

module.exports = mcq;