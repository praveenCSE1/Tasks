const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/db2';

mongoose.connect(uri);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB eror:'));
db.once('open', () => {
  console.log('Connected');
});

module.exports = mongoose;