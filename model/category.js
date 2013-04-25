/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


console.log('building schema for Category');

var mongoose = require('mongoose');
var Category = new mongoose.Schema({
    _id: {type: global.mongoose.Schema.ObjectId, index: true},
    name: {type: String, require: true},
    priority: {type: Number, require: true},
    date: {type: Date, default: Date.now, require: true},
    approved: {type: Date, require: false}
});


module.exports = mongoose.model('Category', Category);