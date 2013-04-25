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
    console.log(req);
    console.log(req.body.dob);
    console.log(new Date(Date.parse(parseDate(req.body.dob))));
    res.render('admin/register', {title: 'OhWomaniya', selector: 'register'});        
};

// parse a date in yyyy-mm-dd format
function parseDate(input) {
  var parts = input.match(/(\d+)/g);
  // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
  console.log(parts);
  return new Date(parts[2], parts[1]-1, parts[0], 00, 00, 00, 00); // months are 0-based
}