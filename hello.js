'use strict';

var printFunc = function(name) {
    console.log(name);
}

printFunc('vscode & node.js');

var express = require("express")(/*options*/);

var promise = require('bluebird');
var options = {
    promiseLib: promise
};

var pgp = require("pg-promise")(options);
var db = pgp("postgres://postgres:admin@192.168.1.183:5432/kang");

module.exports = {
    addCount: addCount
  };

  function addCount(req, res, next) {

    db.any('select count from counter1')
  
      .then(function (data) {
  
      var currentcount = {count:data[0].count};
  
      currentcount.count++;
  
      db.none('update counter set count=$1',[currentcount.count])
  
        .then(function (data) {        
  
          res.render('testejs1',currentcount);
  
        })
  
        .catch(function (err) {
  
          return next(err);
  
        });
  
      })
  
      .catch(function (err) {
  
        return next(err);
  
      });
  
  }