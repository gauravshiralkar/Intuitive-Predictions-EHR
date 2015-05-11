
var mysql = require('mysql');
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	//password : '',
	password : 'pass',
	port : '3306',
	database : 'cmpe239'
});
