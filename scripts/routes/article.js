/**
 * Created by A.M.LUCIFER on 10/26/2015.
 */
module.exports = (
    function() {

        var express    = require('express');        // call express
        var router = express.Router();
        var path = require('path');
        var Article     = require(path.resolve('scripts/Article.js'));
        router.route('/').post(function(req, res) {

            var artic = new Article();

            artic.name = req.body.artName;
            artic.description = req.body.description;

            // save the bear and check for errors

            artic.save(function(err) {
                if (err) {
                    console.log("error occured");
                    res.send(err);
                }

                res.json({ message: 'article created!' });
            });

        });
        router.route('/').get(function(req, res) {
            Article.find(function(err, artic) {
                if (err)
                    res.send(err);


                res.json(artic);
            });

        });
        router.route('/:article_id').get(function(req, res) {

            Article.findById(req.params.article_id, function(err, bear) {

                if (err)
                    res.send(err);
                res.json(bear);
            });
        });
        router.route('/:article_id').put(function(req, res) {
            Article.findById(req.params.article_id, function(err, artic) {
                if (err)
                    res.send(err);

                artic.name = req.body.name;
                artic.description = req.body.description;
                artic.save(function(err) {
                    if (err)
                        res.send(err);

                    res.json({ message: 'updated!' });
                });
            });
        });
        router.route('/:article_id').delete(function(req, res) {
            Article.remove({
                _id: req.params.article_id
            }, function(err, artic) {
                if (err)
                    res.send(err);

                res.json({ message: 'Successfully deleted' });
            });
        });
        return router;
    })();

