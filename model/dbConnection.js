
var mysql = require('mysql');
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'welcome',
	port : '3306',
	database : 'cmpe274'
});

exports.getCompanyRatings = function(callback) {
	var query = "select companyName as name, companyGroup as 'group',overallRating,cultRatng,compsRating,currRatng,wrkLyfRatng from companysenti ";
	connection.query(query, function(err, rows) {
		callback(err, rows);
	});
}
