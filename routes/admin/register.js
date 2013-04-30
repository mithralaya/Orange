/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


exports.register = function(req, res) {
    if(req.session.user){
        res.redirect("/admin");        
    }
    else{
        res.render('admin/register', {title: 'OhWomaniya', selector: 'register'});        
    }
};

exports.save = function(req, res) {
    var dob = new Date(Date.parse(parseDate(req.body.dob)));    
    var User  = require('../../model/user');
    var crypto = require('crypto');
    var shasum = crypto.createHash('sha1');
    shasum.update(req.body.password);
    var user = new User;
    user.password = shasum.digest('hex');
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.dob = dob;
    user.email = req.body.email;
    user.aboutMe = req.body.aboutMe;
    user.userType = 'admin';
    user.approved = new Date();
    user.save();
    console.log(user);
    res.render('admin/register', {title: 'OhWomaniya', selector: 'register'});
};

// parse a date in yyyy-mm-dd format
function parseDate(input) {
  var parts = input.match(/(\d+)/g);
  // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
  return new Date(parts[2], parts[1]-1, parts[0], 00, 00, 00, 00); // months are 0-based
}