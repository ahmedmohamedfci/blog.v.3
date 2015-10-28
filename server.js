/**
 * Created by A.M.LUCIFER on 10/26/2015.
 */

var url = require('url');
var mongoose     = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blog1'); // connect to our database
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var Article     = require('./scripts/Article.js');
var Comment     = require('./scripts/Comment.js');
var routes = require('./scripts/routes/generic.js');
var artRoutes = require('./scripts/routes/article.js');
var commRoutes = require('./scripts/routes/comment.js');

var port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);
app.use('/api/article', artRoutes);
app.use('/api/comment', commRoutes);
app.use('/*',function(req,res)
{
    res.sendFile('index.html',{root:__dirname+'/views/'});
});


app.listen(port);
console.log('Magic happens on port ' + port);
