const express = require('express')
const app = express();
const passport=require('./Auth1')
const session = require('express-session');



app.use(session({
    secret: 'secretkey', 
    resave: false,
    saveUninitialized: false
  }));

  
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    
    res.redirect('/success');
  });



app.get('/success',(req,res)=>{
    res.send('logged in')
})


app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/home.html');
})


app.listen(5000,()=>{
    console.log('http://localhost:5000')
  })