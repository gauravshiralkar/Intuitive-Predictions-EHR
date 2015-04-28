
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

exports.getScatter1 = function(callback,q) {
	
	if (q === "HighestSpeed"){
		var query = "select DriverId as ax,HighestSpeed as ay from cmpe239.driverpatrn";
	}
	else if(q === "CityAvgSpeed"){
		var query = "select DriverId as ax,CityAvgSpeed as ay from cmpe239.driverpatrn";
	}
	else if(q === "HghyAvgSpeed"){
		var query = "select DriverId as ax,HghyAvgSpeed as ay from cmpe239.driverpatrn";
	}
	else if(q === "HarshAcelrations"){
		var query = "select DriverId as ax,HarshAcelrations as ay from cmpe239.driverpatrn";
	}
		
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


exports.search = function(callback,q) {
	console.log('Search key= '+q);
	connection.query('SELECT DriverId from cmpe239.driverpatrn where DriverId like "%'+q+'%"', 
	function(err, rows, fields) {
	      if (err) throw err;
	    var data=[];
	    for(i=0;i<rows.length;i++)
	      {
	        data.push('"'+rows[i].DriverId+'"');
	      }
	    
	    console.log('Data= '+data);
	    console.log('Rows from dbconn= '+rows);
	    rows=data;
	      //res.end(JSON.stringify(data));
	    console.log('Rows from dbconn= '+rows);
	    callback(err, rows);
	    });
};



//Change

