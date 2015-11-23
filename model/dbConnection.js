
//dependencies
var cassandra = require('cassandra-driver');
var async = require('async');

//Connect to the cluster
var client = new cassandra.Client({contactPoints: ['10.189.242.3:9042'], keyspace: 'cmpe295behr'});


//Routes
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


exports.getAcceptRejectData = function (callback) {
	var query = "select * from cmpe295behr.patientaddress";
    client.execute(query, function (err, result) {
        if (!err){
        	
            if ( result.rows.length > 0 ) {
            	console.log("Rows Fetched");
            } else {
                console.log("No results");
            }
        }

        // Run next function in series
        callback(err, result);
    });
}