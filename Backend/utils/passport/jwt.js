const passport = require("passport");
var JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../../Models/User");

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET_KEY;

function jwt() {
  passport.use(
    new JwtStrategy(opts, function (jwt_payload, done) {
        console.log(jwt_payload)
     const user= User.findOne({ id: jwt_payload.sub })
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
          // or you could create a new account
        }
      
    })
  );
}
module.exports = jwt;
