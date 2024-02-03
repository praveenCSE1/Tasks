const express = require('express')
const app = express();
const passport=require('./Controllers/Auth1')
const session = require('express-session');

app.use(session({
  secret: process.env.GOOGLE_CLIENT_ID, 
  resave: true,
  saveUninitialized: true,
  name: 'user', 
  cookie: {  
    maxAge: 24 * 60 * 60 * 1000, 
    secure: false, 
    httpOnly: true, 
  }
}));


 app.use(passport.initialize());

 //responsible for deserializing the serialized(in passport) data when requested
 app.use(passport.session());



app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

  
app.get('/auth/google/callback', 
  passport.authenticate('google'),
  function(req, res) {
    res.redirect('/success');
  });

  app.get('/success',(req,res)=>{
    res.send(req.user)
})

app.get('/ss',(req,res)=>{
  res.send(req.session)
})



app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/home.html');
})


app.listen(5000,()=>{
    console.log('http://localhost:5000')
  })