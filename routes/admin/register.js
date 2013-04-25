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