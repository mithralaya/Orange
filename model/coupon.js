/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */



console.log('building schema for Coupon');

var mongoose = require('mongoose');
var Coupon = new mongoose.Schema({
    _id: {type: global.mongoose.Schema.ObjectId, index: true},
    title: {type: String, require: true, validate: validate('len', 5, 150)},
    desc: {type: String, require: true},
    SD: {type: Date, require: true},
    ED: {type: Date, require: true},
    merchant: {type: String, require: true},
    location: {type: [], require: true},
    date: {type: Date, default: Date.now, require: true}
});


module.exports = mongoose.model('Coupon', Coupon);