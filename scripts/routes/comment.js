/**
 * Created by A.M.LUCIFER on 10/26/2015.
 */

module.exports = (
    function() {

        var express    = require('express');        // call express
        var router = express.Router();
        var path = require('path');


        var Comment     = require(path.resolve('scripts/Comment.js'));

        router.route('/').post(function(req, res) {

            var comm = new Comment();

                console.log(req.body);

            comm.artId = req.body.artId;
            comm.comment = req.body.comment;
            comm.save(function(err) {
                if (err) {
                    console.log("error occured");
                    res.send(err);
                }

                res.json({ message: 'comment created!' });
            });


        });

        router.route('/:artId').get(function(req, res) {

            Comment.find({artId : req.params.artId}, function(err, bear) {

                if (err)
                    res.send(err);
                res.json(bear);
            });
        });

        router.route('/:commId').delete(function(req, res) {
            Comment.remove({
                _id: req.params.commId
            }, function(err, artId) {
                if (err)
                    res.send(err);

                res.json({ message: 'Successfully deleted' });
            });
        });


        return router;
    })();