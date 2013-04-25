/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


console.log('building schema for Post');

var mongoose = require('mongoose');
var Post = new mongoose.Schema({
    _id: {type: global.mongoose.Schema.ObjectId, index: true},
    title: {type: String, require: true, validate: validate('len', 5, 150)},
    urlScheme: {type: String, require: true, validate: validate('len', 5, 150), unique:true, index: true},
    excerpt: {type: String, require: false, validate: validate('len', 0, 800)},
    content: {type: String, require: true},
    category: {type: String, require: true},
    user: {type: String, require: true},
    tags: {type: [], require: false},
    date: {type: Date, default: Date.now, require: true},
    published: {type: Date, require: false}
});


module.exports = mongoose.model('Post', Post);