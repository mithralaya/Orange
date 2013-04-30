/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


console.log('building schema for Category');

var mongoose = require('mongoose');
var Tag = new mongoose.Schema({
    _id: {type: mongoose.Schema.ObjectId, index: true},
    name: {type: String, require: true},
    date: {type: Date, default: Date.now, require: true},
    approve: {type: Date, require: false},
});


module.exports = mongoose.model('Tag', Tag);