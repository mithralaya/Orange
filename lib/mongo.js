/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


var mongoose = require('mongoose');
var config = require('../config/config.js');
console.log();
module.exports = {
    _db: null,
    init: function() {
        if (!module.exports._db) {
            var path = 'mongodb://' + config.mongoDb.dbHost + '/' + config.mongoDb.dbName;
            console.log('connecting to MONGO via ' + path);
            module.exports._db = mongoose.connect(path);
        }
        return module.exports._db;
    },
    disconnect: function() {
        mongoose.connection.close();
    }
}
