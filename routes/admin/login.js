/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var passport = require('passport');
exports.login = function(req, res) {
console.log(req.session);
    if (req.session.user) {
        res.redirect("/admin");
    }
    else {
        res.render('admin/login', {title: 'OhWomaniya', selector: 'login'});
    }
};

exports.auth = function(req, res) {
    var passportConf = require('../../lib/passport');
    
    passport.authenticate('local', {successRedirect: '/admin/',
        failureRedirect: '/admin/login',
        failureFlash: true});
};