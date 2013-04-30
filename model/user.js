/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
console.log('building schema for User');

var mongoose = require('mongoose');
var User = new mongoose.Schema({
    _id: {type: mongoose.Schema.ObjectId, index: true},
    firstName: {type: String, require: true},
    lastName: {type: String, require: true},
    dob: {type: Date, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    aboutMe: {type: String, require: false},
    date: {type: Date, default: Date.now, require: true},
    userType: {type: String, default: "user", require: true},
    approved: {type: Date, require: false}
});


module.exports = mongoose.model('User', User);