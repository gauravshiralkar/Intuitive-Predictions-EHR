
//dependencies
var cassandra = require('cassandra-driver');
var async = require('async');

//Connect to the cassandra cluster
var client = new cassandra.Client({contactPoints: ['10.189.242.3:9042'], keyspace: 'cmpe295behr'});


//Connect to MySQL
var mysql = require('mysql');
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	//password : 'pass',
	port : '3306'
});

//------------------------------MySQL Routes-----------------------------------

//Region Map

exports.getRegionMapData = function(callback){
	connection.query('use 295Visualization;');
	var query = 'select avg(basicEHR)*100 value , regionCode code  from adoptionpctv2 where regionCode<>"US" and regionCode<>"PR" and regionCode<>"WI" group by regionCode;';
	connection.query(query, function(err, rows) {		
			callback(err, rows);
	});			
}


//

exports.getAcceptRejectData = function(callback){
	connection.query('use cmpe295ehr;');
	var query = "select case \
		   when (year(now())-year(dob))>=0 and (year(now())-year(dob))<=4 then '0-4' \
		   when (year(now())-year(dob))>=5 and (year(now())-year(dob))<=9 then '5-9' \
	       when (year(now())-year(dob))>=10 and (year(now())-year(dob))<=14 then '10-14' \
	       when (year(now())-year(dob))>=15 and (year(now())-year(dob))<=19 then '15-19' \
	       when (year(now())-year(dob))>=20 and (year(now())-year(dob))<=24 then '20-24' \
		   when (year(now())-year(dob))>=25 and (year(now())-year(dob))<=29 then '25-29'\
	when (year(now())-year(dob))>=20 and (year(now())-year(dob))<=24 then '30-34'\
		   when (year(now())-year(dob))>=25 and (year(now())-year(dob))<=29 then '35-39'\
	when (year(now())-year(dob))>=20 and (year(now())-year(dob))<=24 then '40-44'\
		   when (year(now())-year(dob))>=25 and (year(now())-year(dob))<=29 then '45-49'\
	when (year(now())-year(dob))>=20 and (year(now())-year(dob))<=24 then '50-54'\
		   when (year(now())-year(dob))>=25 and (year(now())-year(dob))<=29 then '55-59'\
	when (year(now())-year(dob))>=20 and (year(now())-year(dob))<=24 then '60-64'\
		   when (year(now())-year(dob))>=25 and (year(now())-year(dob))<=29 then '65-69'\
	when (year(now())-year(dob))>=20 and (year(now())-year(dob))<=24 then '70-74'\
		   when (year(now())-year(dob))>=25 and (year(now())-year(dob))<=29 then '75-79'\
	when (year(now())-year(dob))>=20 and (year(now())-year(dob))<=24 then '80-84'\
		   when (year(now())-year(dob))>=25 then '85+'\
		   end as 'age'\
	,\
	COUNT(CASE insuranceDetailsStatus  WHEN 'Accepted' THEN 1 END) AS accepted,\
	COUNT(CASE insuranceDetailsStatus  WHEN 'Rejected' THEN 1 END)*(-1) AS rejected\
	 from patientdetails,insurancedetails where patientDetailsInsuranceId=insuranceDetailsId group by 1;";
	connection.query(query, function(err, rows) {		
			callback(err, rows);
	});			
}

//--------------------End of MySQL Routes--------------------------

//------------------------------Cassandra Routes-----------------------------------

exports.getPatientDetails = function (callback) {
	var query = "select * from system.schema_keyspaces";
    client.execute(query, function (err, result) {
        if (!err){
        	
            if ( result.rows.length > 0 ) {
            	var res=result.rows[0];
            	console.log("dbconn.js %s",res.keyspace_name);
            } else {
                console.log("No results");
            }
        }

        // Run next function in series
        callback(err, null);
    });
}


exports.getPatientAddress = function (callback) {
	var query = "select * from cmpe295behr.patientaddress";
    client.execute(query, function (err, result) {
        if (!err){
        	
            if ( result.rows.length > 0 ) {
            	var res=result.rows[0];
            	console.log("dbconn.js %s",res.patientaddresscountry);
            } else {
                console.log("No results");
            }
        }

        // Run next function in series
        callback(err, null);
    });
}

//--------------------End of Cassandra Routes--------------------------
