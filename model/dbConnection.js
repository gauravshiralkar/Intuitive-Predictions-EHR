
var mysql = require('mysql');
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	//password : '',
	password : 'pass',
	port : '3306',
	database : 'cmpe239'
});


exports.getScatter = function(callback,q) {
	var query = "select xCordinate as ax,yCordinate as ay from cmpe239.driver1 where DriverId='"+q+"'";
	console.log("about to call database");
	console.log("value of q is "+q);
	connection.query(query, function(err, rows) {
		callback(err, rows);
	});
};

