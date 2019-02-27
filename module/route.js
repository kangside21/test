(function () {
    var db = require('../db');
    module.exports = function(app) {
        app.get('/test',(req,res) => {
            res.render('test.html')
        });

        app.get('/search',function(req,res){
            db.any("SELECT * FROM TB_NOTICE")
            .then(function (result) {
                res.status(200).json(result);
            })
            .catch(function (error) {
                res.status(400).json(error);
            });

        });

        app.get('/search2',function(req,res){
            console.log(req.query);
            db.any("SELECT * FROM TB_NOTICE WHERE NOTICE_TITLE = ${title}", {
                title: req.query.title
            })
            .then(function (result) {
                res.status(200).json(result);
            })
            .catch(function (error) {
                res.status(400).json(error);
            });

        });

        app.post('/search3',function(req,res){
            console.log(req.body);
            db.any("SELECT * FROM TB_NOTICE WHERE NOTICE_CONTENT LIKE '%' || ${content} || '%'", {
                content: req.body.content
            })
            .then(function (result) {
                res.status(200).json(result);
            })
            .catch(function (error) {
                res.status(400).json(error);
            });

        });
    }
})();