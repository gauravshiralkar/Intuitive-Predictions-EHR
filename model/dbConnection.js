
var mysql = require('mysql');
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'pass',
	port : '3306',
	database : 'cmpe274'
});

exports.getCompanyRatings = function(callback) {
	var query = "select companyName as name, companyGroup as 'group',overallRating,cultRatng,compsRating,currRatng,wrkLyfRatng from companysenti ";
	connection.query(query, function(err, rows) {
		callback(err, rows);
	});
};

exports.getSalaryInfo = function(callback,q) {
	if (q==="frontEnd or UI Developer") {q="frontEnd / UI Developer";}
	var query = "select jobTitle, medianSalary from cmpe274.salinfo where jobName='"+q+"' limit 10";
	console.log("about to call database");
	console.log("value of q is "+q);
	connection.query(query, function(err, rows) {
		callback(err, rows);
	});
};

exports.getMapData = function(callback) {
	var query = "select sum(jobCount) as jobCount, stateName from citywisejobcount group by stateName order by stateName asc";
	connection.query(query, function(err, rows) {
		callback(err, rows);
	});
};

