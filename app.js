const express = require('express')
const app = express();
const passport=require('./Controllers/Auth1')



app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));
  app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    console.log(req.body);
    res.redirect('/success');
  });



app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/home.html');
})


app.listen(5000,()=>{
    console.log('http://localhost:5000')
  })