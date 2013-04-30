/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


var passport = require('passport')
        , LocalStrategy = require('passport-local').Strategy
        , User = require('../model/user')
        , crypto = require('crypto');
var passportConf = {
    init: function() {
        passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password'
        },
        function(username, password, done) {
            User.findOne({username: username}, function(err, user) {
                if (err) {
                    return done(err);
                }
                if (!user) {
                    return done(null, false, {message: 'Incorrect username.'});
                }

                var shasum = crypto.createHash('sha1');
                shasum.update(password);
                if (!user.validPassword(shasum.digest('hex'))) {
                    return done(null, false, {message: 'Incorrect password.'});
                }
                return done(null, user);
            });
        }
        ));
        passport.serializeUser(function(user, done) {
            done(null, user.id);
        });

        passport.deserializeUser(function(id, done) {
            User.findById(id, function(err, user) {
                done(err, user);
            });
        });
    }

}
module.exports = passportConf;