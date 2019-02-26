(function () {
    var db = require('../db');
    module.exports = function(app) {
        // app.get('/',function(req,res){
        //     res.render('index.html')
        // });
        
        app.get('/',(req,res) => {
            res.render('index.html')
        });
        
        app.get('/about',function(req,res){
            res.render('index1.html');
        });

        app.get('/search',function(req,res){
            console.log(req.params);
            console.log(req.query);

            console.log(db);

            db.any("SELECT * FROM TB_NOTICE")
            .then(function (result) {
                res.status(200).json(result);
            })
            .catch(function (error) {
                res.status(400).json(error);
            });

        });

        app.post('/search11',function(req,res){
            console.log(req.body);
            db.any("SELECT * FROM CODE WHERE CODE='A'")
            .then(function (result) {
                res.status(200).json(result);
            })
            .catch(function (error) {
                res.status(400).json(error);
            });

        });
    }
})();