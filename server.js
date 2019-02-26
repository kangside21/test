(function () {
  // node js server express setting
  var express = require('express');
  var app = express();

  // view, view engine ejs setting
  app.set('views', './views');
  app.set('view engine', 'ejs');
  app.engine('html', require('ejs').renderFile);

  // post에서 body 처리를 위해서 사용.
  var bodyParser = require('body-parser');
  app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
  app.use(bodyParser.json()); // for parsing application/json

  // resources 접근 (css, js, img)
  app.use(express.static('resources'));

  // module file 
  require('./module/route')(app);

  // server start
  var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000t222est222");
  });
})();