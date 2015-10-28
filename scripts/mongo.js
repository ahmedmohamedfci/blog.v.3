/**
 * Created by A.M.LUCIFER on 10/26/2015.
 */
module.exports = (
    function() {
        var mongoose = require('mongoose');
        mongoose.connect('mongodb://localhost:27017/blog1'); // connect to our database
    return mongoose;
    });