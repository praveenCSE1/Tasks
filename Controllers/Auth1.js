const Guser = require('./db')
const express = require('express')
const passport = require('passport')

const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();
const app = express()



passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  
  Guser.findById(id)
    .then(user => {
      done(null, user);
    })
    .catch(err => {
      done(err);
    });
});


passport.use(new GoogleStrategy({
    
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  async function(accessToken, refreshToken, profile, done) {
   
    
   Guser.findOne({email:profile.emails[0].value})
    .then(user=>{
      
      if (user) {

        done(null, user);
       
      } else {       
         const newuser = new Guser({
          name: profile.displayName,
          email:  profile.emails[0].value,
          googleId: profile.id
        });
        newuser.save().then(nuser=>{
        return done(null,nuser)

       })
        
    }
  })
  .catch(error => {
       
         done(error,false);
      });

    }    
));

module.exports = passport;



