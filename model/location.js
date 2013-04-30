/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */



console.log('building schema for Merchant');

var mongoose = require('mongoose');
var Location = new mongoose.Schema({
    _id: {type: mongoose.Schema.ObjectId, index: true},
    addL1: {type: String, require: true},
    addL2: {type: String, require: false},
    addL3: {type: String, require: false},
    city: {type: String, require: true, index: true},
    state: {type: String, require: false},
    postcode: {type: String, require: true, index: true},
    lat: {type: Number, require: false, index: true},
    lng: {type: Number, require: false, index: true},
    phNo: {type: Number, require: false},
    merchant: {type: String, require: true, index: true},
    date: {type: Date, default: Date.now, require: true},
});


module.exports = mongoose.model('Location', Location);