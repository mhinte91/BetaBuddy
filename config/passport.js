var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var Climber = require('../models/climber');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
}, 
function(accessToken, refreshToken, profile, cb) {
    Climber.findOne({ 'googleId': profile.id }, function(err, climber) {
      if (err) return cb(err);
      if (climber) {
        return cb(null, climber);
      } else {
        // we have a new climber via OAuth!
        var newClimber = new Climber({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id
        });
        newClimber.save(function(err) {
          if (err) return cb(err);
          return cb(null, newClimber);
        });
      }
    });
  }
));

passport.serializeUser(function(climber, done) {
    done(null, climber.id);
});

passport.deserializeUser(function(id, done) {
    Climber.findById(id, function(err, climber) {
      done(err, climber);
    });
  });