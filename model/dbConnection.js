
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

exports.getBar = function(callback,q) {
	if (q==="CityAvgSpeed"){
		var query = "select DriverId, CityAvgSpeed from cmpe239.driverpatrn order by RAND() limit 10";
	} 
	else if(q==="HighestSpeed"){
		var query = "select DriverId, HighestSpeed from cmpe239.driverpatrn order by RAND() limit 10";
	}
	else if (q==="HarshAcelrations"){
		var query = "select DriverId, HarshAcelrations from cmpe239.driverpatrn order by RAND() limit 10";
	} 
	else if(q==="BreakRatioHighy"){
		var query = "select DriverId, BreakRatioHighy from cmpe239.driverpatrn order by RAND() limit 10";
	}
	
	
	console.log("about to call database");
	console.log("value of q is "+q);
	connection.query(query, function(err, rows) {
		callback(err, rows);
	});
};


//Change

