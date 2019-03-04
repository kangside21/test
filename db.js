(function () {
  // promise(callback) 처리를 하기 위해서 사용함.
  var promise = require('bluebird');

  // db setting
  var pgp = require("pg-promise")({promiseLib: promise});
  var config = {
    host: 'xenoimpact.com',
    port: 5432,
    database: 'notesdev',
    user: 'notesdev',
    password: '@shcmdev0'
  };
  //var conString = "postgres://test:1234@192.168.1.85:5432/test";
  var db = pgp(config);
  module.exports = db;
})();