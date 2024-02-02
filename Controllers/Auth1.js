const Guser = require('./db')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();



passport.use(new GoogleStrategy({
    
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  async function(accessToken, refreshToken, profile, cb) {
    console.log(profile)
    
   Guser.findOne({emailId:profile.id})
    .then(user=>{
      
      if (user) {
        return cb(null, user);
      } else {
        
         const newuser = new Guser({
          name: profile.displayName,
          email:  profile.emails[0].value,
          googleId: profile.id
        });
        return newuser.save();
        
    }
  })
    .then(newuser=>{
      return cb(null, newuser);
        
      })
      .catch(error => {
       
        return cb(error);
      });
    
    

    }    
));

module.exports = passport;



