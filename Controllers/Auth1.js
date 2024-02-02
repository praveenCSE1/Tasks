const Guser = require('./db')
const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();

const session = require('express-session');
const app = express();

app.use(passport.initialize());
app.use(passport.session());

app.use(session({
    secret: 'secretkey', 
    resave: false,
    saveUninitialized: false
  }));


passport.serializeUser((user, done) => {

  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log()
  Guser.findById(id).then((obj)=>{
    console.log(obj)
    done(null,obj)
  })
});

passport.use(new GoogleStrategy({
    
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  async function(accessToken, refreshToken, profile, cb) {
    
   Guser.findOne({email:profile.emails[0].value})
    .then(user=>{
      
      if (user) {
       

        cb(null, user);
      } else {
        
         const newuser = new Guser({
          name: profile.displayName,
          email:  profile.emails[0].value,
          googleId: profile.id
        });
         newuser.save();
        
    }
  })
    .then(newuser=>{
      
       cb(null, newuser);
        
      })
      .catch(error => {
       
        return cb(error);
      });

    }    
));

module.exports = passport;



