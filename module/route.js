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

        app.get('/test',function(req,res){
            res.render('Ajax.html');
        });

        app.get('/search',function(req,res){
            console.log(req.query);

            db.any("SELECT * FROM CODE ")
            .then(function (result) {
                res.status(200).json(result);
            })
            .catch(function (error) {
                res.status(400).json(error);
            });

        });

        app.post('/search11',function(req,res){

            var data = req.body;

            console.log(req.body);
            db.any("INSERT MENBER(ASD, QWE")
            .then(function (result) {
                res.status(200).json(result);
            })
            .catch(function (error) {
                res.status(400).json(error);
            });

        });
    }
})();