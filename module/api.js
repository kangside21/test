'use strict';
(function () {
    
    /*
    * Service 모듈 Import
    ​*/
    var service = require('./service');

    /*
    * API Module 명시
    ​*/
    module.exports = function(app) {
        
        /*
        * test.html 화면 호출
        ​*/
        app.get('/test',(req,res) => {
            res.render('test.html')
        });

        /*
        * GET
        * 조회1
        ​*/
        app.get('/search',function(req,res){
            // Service의 조회1 호출
            service.search().then(function (result) {
                res.status(200).json(result);
            })
            .catch(function (error) {
                res.status(400).json(error);
            });
        });

        /*
        * GET
        * 조회2
        ​*/
        app.get('/search2',function(req,res){
            // Service의 조회2 호출
            console.log(req.query);
            var params = {
                title : req.query.title
            };
            service.search2(params).then(function (result) {
                res.status(200).json(result);
            })
            .catch(function (error) {
                res.status(400).json(error);
            });
        });

       /*
        * POST
        * 조회3
        ​*/
        app.post('/search3',function(req,res){
            // Service의 조회3 호출
            console.log(req.body);
            var params = {
                content : req.body.content
            };
            service.search3(params).then(function (result) {
                res.status(200).json(result);
            })
            .catch(function (error) {
                res.status(400).json(error);
            });
        });
        
    }
})();