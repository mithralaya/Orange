
/**
 * Module dependencies.
 */

var express = require('express')
        , routes = require('./routes')
        , http = require('http')
        , path = require('path')
        , db = require('./lib/mongo')
        , config = require('./config/config')
        , passport = require('passport');

var app = express();
db.init();
// all environments
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('OhWomaniya'));
app.use(express.session({secret: "Lot of love"}));

//Passport Initialize
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}
var routesIndex = require('./routes/index')
app.get('/', routesIndex.index);


//ADMIN ROUTES
var accessChecker = function(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/admin/login');
    }
}
var     routesAdmin = require('./routes/admin'),
        routesAdminLogin = require('./routes/admin/login'),
        routesAdminRegister = require('./routes/admin/register');

app.get('/admin/login', routesAdminLogin.login);
app.post('/admin/login/auth', routesAdminLogin.auth);
app.get('/admin/register', routesAdminRegister.register);
app.post('/admin/register/save', routesAdminRegister.save);
app.get('/admin', accessChecker, routesAdmin.index);


//db.disconnect();
http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
