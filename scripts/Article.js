/**
 * Created by A.M.LUCIFER on 10/20/2015.
 */
// app/models/Article.js
var path = require('path');
var mongoose = require('mongoose');
var Schema       = mongoose.Schema;

var articleSchema   = new Schema({
    name: String,
    description: String

});

module.exports = mongoose.model('Article', articleSchema);