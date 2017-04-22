var express = require("express");
var bodyParser = require('body-parser');
var request = require("request");
<<<<<<< HEAD:api/server.js
var CronJob = require('cron').CronJob;
var logger = require('morgan');
var mysql = require("mysql");
=======
import users from './routes/users'
>>>>>>> master:server.js

var PORT = process.env.PORT || 3001;
var app = express();

<<<<<<< HEAD:api/server.js
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'saveup_db',
});

// Set the app up with morgan
app.use(logger('dev'));
app.use(bodyParser());
=======

// Set the app up with morgan
app.use(logger("dev"));

app.use(bodyParser.json());

app.use('/api/users', users)
>>>>>>> master:server.js

// Cron Job to check spent v. budget and give a grade every minute

new CronJob('1 * * * * *', function() {
  console.log('You will see this message every minute');
  connection.query("INSERT INTO income_frequencies" + " SET ?", {
          type: "food",
        }, function(err, res) { console.log('completed!')});
}, null, true, 'America/New_York');

/*
  if we don't do this here then we'll get this error in apps that use this api

  Fetch API cannot load No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

  read up on CORs here: https://www.maxcdn.com/one/visual-glossary/cors/
*/
  //allow the api to be accessed by other apps
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
    next();
  });


// Listen on port 3001
  app.listen(PORT, function() {
    console.log('🌎 ==> Now listening on PORT %s! Visit http://localhost:%s in your browser!', PORT, PORT);
  });
