const GoogleStrategy = require('passport-google-oauth2').Strategy;
const passport = require('passport')
const{Usermodel} = require("../models/register.model")
require('dotenv').config()


passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.callbackURL,
    passReqToCallback   : true
  },
  async function(request, accessToken, refreshToken, profile, done) {
    const existingUser = await Usermodel.findOne({ googleId: profile.id });

    if (existingUser) {
      return done(null, existingUser);
    }

    const user = await new Usermodel({
      email: profile.email,
      name: profile.name.givenName,
      password:"i have to put a random password here"
    
    }).save();
    done(null, user);
  }
));
passport.serializeUser((user,done)=>{
    done(null,user)

})
passport.deserializeUser((user,done)=>{
    done(null,user)
})