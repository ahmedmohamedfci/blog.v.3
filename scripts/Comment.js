/**
 * Created by A.M.LUCIFER on 10/20/2015.
 */
// app/models/Article.js

var Article = require('./Article.js');

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var commentSchema   = new Schema({
    artId: { type: Schema.Types.ObjectId, ref: 'Article'},
    comment: String
});

module.exports = mongoose.model('Comment', commentSchema);