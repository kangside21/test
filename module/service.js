'use strict';
(function () {

    /*
    * DB 모듈 Import
    ​*/
    var db = require('../db');

    // xml parser
    var sql = {};
    var fs = require('fs')
    var xml2js = require('xml2js');
    var parser = new xml2js.Parser();
    fs.readFile('./resources/mapper/sql.xml', 'utf-8', function(err, data) {
        parser.parseString(data, function (err, result) {
            if (result.mapper != null && result.mapper.sql != null && result.mapper.sql.length > 0) {
                for (var i in result.mapper.sql) {
                    if ((result.mapper.sql[i].$ != null && 
                        (typeof result.mapper.sql[i].$.id != "undefined" && result.mapper.sql[i].$.id != null && String(result.mapper.sql[i].$.id) !=  ""))
                        && (result.mapper.sql[i]._ != null && 
                            (typeof result.mapper.sql[i]._ != "undefined" && result.mapper.sql[i]._ != null && String(result.mapper.sql[i]._) !=  ""))) {
                        sql[result.mapper.sql[i].$.id] = result.mapper.sql[i]._;
                    }
                }
            }
        });
    });

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
                });
            });
        };

        /*
        * 조회2
        ​*/
        var search2 = function(params) {
            return new Promise(function (resolve, reject) {
                db.any(sql.findNoticeTitle, params)
                .then(function (result) {
                    resolve(result);
                })
                .catch(function (error) {
                    reject(error);
                });
            });
        };

        /*
        * 조회3
        ​*/
        var search3 = function(params) {
            return new Promise(function (resolve, reject) {

                //any : list
                //one : object
                //none : insert, update, delete

                db.any(sql.findNoticeContent, params)
                .then(function (result) {
                    resolve(result);
                })
                .catch(function (error) {
                    reject(error);
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