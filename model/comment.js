/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */



console.log('building schema for Post');

var mongoose = require('mongoose');
var Comment = new mongoose.Schema({
    _id: {type: global.mongoose.Schema.ObjectId, index: true},
    title: {type: String, require: true, validate: validate('len', 5, 150)},
    message: {type: String, require: true},
    user: {type: String, require: true},
    date: {type: Date, default: Date.now, require: true},
    published: {type: Date, require: false}
});


module.exports = mongoose.model('Comment', Comment);