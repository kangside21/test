'use strict';
(function () {

    /*
    * DB 모듈 Import
    ​*/
    var db = require('../db');

    /*
    * Service Module 명시
    ​*/
    var service = service || function(g,i) {

        /*
        * 조회1
        ​*/
        var search = function() {
            return new Promise(function (resolve, reject) {
                db.any("SELECT * FROM TB_NOTICE")
                .then(function (result) {
                    resolve(result);
                })
                .catch(function (error) {
                    reject(error);
                    res.status(400).json(error);
                });
            });
        };

        /*
        * 조회2
        ​*/
        var search2 = function(params) {
            return new Promise(function (resolve, reject) {
                db.any("SELECT * FROM TB_NOTICE WHERE NOTICE_TITLE = ${title}", params)
                .then(function (result) {
                    resolve(result);
                })
                .catch(function (error) {
                    reject(error);
                    res.status(400).json(error);
                });
            });
        };

        /*
        * 조회3
        ​*/
        var search3 = function(params) {
            return new Promise(function (resolve, reject) {
                db.any("SELECT * FROM TB_NOTICE WHERE NOTICE_CONTENT LIKE '%' || ${content} || '%'", params)
                .then(function (result) {
                    resolve(result);
                })
                .catch(function (error) {
                    reject(error);
                    res.status(400).json(error);
                });
            });
        };

        /*
        * 사용할 Service Module의 function 명시함.
        ​*/
        return {
            search : search,
            search2 : search2,
            search3 : search3
        };
    }();
    
    module.exports = service;
  })();