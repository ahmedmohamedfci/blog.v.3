/* this file is mainly for the routes that the user uses,,, home page and the view of the article,,,
it also have the route for the comment post
 */
module.exports = (
    function() {
        var express    = require('express');        // call express
        var router = express.Router();
        var path = require('path');
        router.get('/',  function(req,res){

            res.sendFile(path.resolve('views/index.html'), function (err) {
            if (err) {
                console.log(err);
                res.status(err.status).end();
            }
            else {

            }
        });
        });
        router.route('/scripts/:fileName').get(function(req, res) {


            var filename = path.resolve('scripts/'+req.params.fileName);
            res.sendFile(filename, function (err) {
                if (err) {
                    console.log(err);
                    res.status(err.status).end();
                }
                else {

                }
            });
        });
        router.route('/views/:dirname/:fileName').get(function(req, res) {

            var filename = 'views/'+req.params.dirname+'/'+req.params.fileName;

            res.sendFile(path.resolve(filename), function (err) {
                if (err) {
                    console.log(err);
                    res.status(err.status).end();
                }
                else {

                }
            });
        });
        return router;
    })();

