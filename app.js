/**
 * Module dependencies.
 */
/*var mysql = require('mysql');
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
    //password : '',
  password : 'pass',
	port : '3306',
	database : 'cmpe239'
});
connection.connect();

//Cassandra
var cassandra = require('cassandra-driver');
var async = require('async');

//Connect to the cluster
var client = new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: 'cmpe295ehr'});
*/

//*

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//app.get('/', routes.index);
app.get('/', routes.index);
app.get('/test', routes.getPatientDetails);
/*
app.get('/getScatter1/:strUsr', routes.getScatter1);
app.get('/getBarChart', routes.getBarChart);
app.get('/getBar/:strUser', routes.getBar);
app.get('/calcInsu/:strUser', routes.calcInsu);
app.get('/about', routes.about);
app.get('/contact', routes.contact);
app.get('/search', routes.search);
app.get('/getScoreVizChart', routes.getScoreVizChart);
app.get('/getScoreVizData', routes.getScoreVizData); 

app.get('/showtest', function(req, res) {
	res.render('test.ejs');
});
*/



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
