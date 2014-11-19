
var mysql = require('mysql');
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'pass',
	port : '3306',
	database : 'cmpe274'
});

exports.getCompanyReviews = function(callback){
	var query = 'select companyName as name,ratingDesc,overallRating as size from companysenti order by ratingDesc;'
	
	connection.query(query, function(err, rows) {
			
			callback(err, rows);
	});
			
}

exports.getCompanyRatings = function(callback) {
	var query = "select companyName as name, companyGroup as 'group',overallRating as 'Overall Rating',cultRatng as 'Culture And Values Rating',compsRating as 'Compensation And Benefits Rating',currRatng,wrkLyfRatng as 'WorkLife Balance Rating' from companysenti ";
	connection.query(query, function(err, rows) {
		console.log(rows);
		callback(err, rows);
	});
}

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

