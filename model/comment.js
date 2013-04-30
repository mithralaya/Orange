/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */



console.log('building schema for Post');

var mongoose = require('mongoose');
var Comment = new mongoose.Schema({
    _id: {type: mongoose.Schema.ObjectId, index: true},
    title: {type: String, require: true},
    message: {type: String, require: true},
    user: {type: String, require: true},
    date: {type: Date, default: Date.now, require: true},
    published: {type: Date, require: false}
});


module.exports = mongoose.model('Comment', Comment);