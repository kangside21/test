(function () {
  // promise
  var promise = require('bluebird');

  // db setting
  var pgp = require("pg-promise")({promiseLib: promise});
  var conString = "postgres://postgres:admin@192.168.1.183:5432/kang";
  var db = pgp(conString);
  module.exports = db;
})();