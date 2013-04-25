/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


exports.login = function(req, res) {
    if(req.session.user){
        res.redirect("/admin");        
    }
    else{
        res.render('admin/login', {title: 'OhWomaniya', selector: 'login'});
    }
};