(function () {
  // promise(callback) 처리를 하기 위해서 사용함.
  var promise = require('bluebird');

  // db setting 비번@DB URL
  var pgp = require("pg-promise")({promiseLib: promise});
  var conString = "postgres://test:1234@192.168.1.85:5432/test";
  var db = pgp(conString);
  module.exports = db;
})();