
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
	password : 'pass',
	//password : 'password123',
	//password : 'password123',
	port : '3306'
});
connection.connect();
//------------------------------MySQL Routes-----------------------------------

//Region Map

exports.getRegionMapData = function(callback){
	connection.query('use 295Visualization;');
	var query = 'select avg(basicEHR)*100 value , regionCode code  from adoptionpctv2 where regionCode<>"US" and regionCode<>"PR" and regionCode<>"WI" group by regionCode;';
	connection.query(query, function(err, rows) {		
		callback(err, rows);
	});			
}





//Pie chart

exports.getPie = function(callback){
	connection.query('use 295Visualization;');
	var query = 'select avg(pctHospitalsBasicEHR) comprehensive, avg(pctRuralHospitalsBasicEHR) ruralHospitals, avg(pctSmallHospitalsBasicEHR) smallHospitals from v1 ;';
	connection.query(query, function(err, rows) {		
		callback(err, rows);
	});			
}



//trends map

exports.getMapData = function(callback,q){
	connection.query('use 295Visualization;');
	if(q=="Comprehensive")
	{
		var query = 'select pctHospitalsBasicEHR*10 value, regionCode code from v1 where regionCode<>"US" group by region;';
	}
	else if(q=="Rural Hospitals")
	{
		var query = 'select case \
			when pctRuralHospitalsBasicEHR=0 then 1 \
			else pctRuralHospitalsBasicEHR*10 \
			end as value, \
			regionCode code from v1 where regionCode<>"US" group by region;';
	}
	else if(q=="Small Hospitals")
	{
		var query = 'select pctSmallHospitalsBasicEHR*10 value, regionCode code from v1 where regionCode<>"US" group by region;';
	}
	connection.query(query, function(err, rows) {		
		callback(err, rows);
		console.log(rows);
	});			
}


//Tree Map

exports.getTree = function(callback){
	console.log('inside dbconn');
	connection.query('use cmpe295ehr;');
	var query =  "select 'spine' as shortDescription, count(*) count  from diagnosisCodes where shortDescription like '%spine%' union all select 'chest' , count(*) from diagnosisCodes where shortDescription like '%chest%' union all select 'Body Pain' , count(*) from diagnosisCodes where shortDescription like '%pain%' union all select 'dental' , count(*) from diagnosisCodes where shortDescription like '%dental%' union all select 'Abdominal' , count(*) from diagnosisCodes where shortDescription like '%Abdominal%';";
	connection.query(query, function(err, rows) {	
		console.log(rows)
		callback(err, rows);
	});			
}

//line chart

exports.getLineData = function(callback){
	//console.log(rCode);
	console.log('inside dbconn');
	connection.query('use 295Visualization;');
	var query = 'select pct_md_pa_np_mu_aiu p, pct_md_pa_np_mu q, region, region_code from v3 group by region;';
	connection.query(query, function(err, rows) {		
		callback(err, rows);
		console.log(rows);
	});			
}


//stacked chart
exports.getStackedData = function(callback){
	//console.log(rCode);
	//console.log('inside dbconn');
	connection.query('use 295Visualization;');
	var query = 'select period year, pctHospitalsBasicEHR WithNotes , pctHospitalBasicEHRNoNotes WithoutNotes from v1 group by period;';
	connection.query(query, function(err, rows) {		
		callback(err, rows);
		console.log(rows);
	});			
}




//tree data in table

exports.getTreeData = function(callback,name){
	connection.query('use cmpe295ehr;');
	if(name =="Body Pain"){
		var query = "select ShortDescription, procedureCodes from procedurecodes where ShortDescription like '%xray%';";

	}
	else{
		var query = "select ShortDescription, procedureCodes from procedurecodes where ShortDescription like '%"+name+"%';";
	}
	connection.query(query, function(err, rows) {		
		callback(err, rows);
	});			
}



//pie combination chart Data

exports.getPieData = function(callback,rCode){
	//console.log(rCode);
	console.log('inside dbconn');
	connection.query('use 295Visualization;');
	var query = 'select basicEHR, (primaryCareBasicEHR)*10 primaryCare, (ruralBasicEHR)*10 rural, (smallPracticeBasicEHR)*10 smallPractice ,period, regionCode, region, AdoptionPctId from adoptionpctv2 where regionCode="'+rCode+'";';
	connection.query(query, function(err, rows) {		
		callback(err, rows);
		console.log(rows);
	});			
}

exports.autopopulate = function(callback,val){
	connection.query('use cmpe295ehr;');
	var query = 'select * from scratch  where insuranceDetailsProviderId="'+val+'";';
	connection.query(query, function(err, rows) {
		console.log(rows);
		callback(err, rows);		
	});			
}

exports.pdfpopulate = function(callback,val){
	console.log('psfpop value:'+val);
	connection.query('use cmpe295ehr;');
	var query = 'select * from scratch  where insuranceDetailsProviderId="'+val+'";';
	connection.query(query, function(err, rows) {
		console.log(rows);
		callback(err, rows);		
	});			
}

exports.getAcceptRejectData = function(callback){
	connection.query('use cmpe295ehr;');
	var query = "select case \
		when (year(now())-year(dob))>=0 and (year(now())-year(dob))<=10 then '0-10' \
		when (year(now())-year(dob))>=10 and (year(now())-year(dob))<=14 then '10-14' \
		when (year(now())-year(dob))>=15 and (year(now())-year(dob))<=19 then '15-19' \
		when (year(now())-year(dob))>=20 and (year(now())-year(dob))<=24 then '20-24' \
		when (year(now())-year(dob))>=25 and (year(now())-year(dob))<=29 then '25-29' \
		when (year(now())-year(dob))>=30 and (year(now())-year(dob))<=34 then '30-34' \
		when (year(now())-year(dob))>=35 and (year(now())-year(dob))<=39 then '35-39' \
		when (year(now())-year(dob))>=40 and (year(now())-year(dob))<=44 then '40-44' \
		when (year(now())-year(dob))>=45 and (year(now())-year(dob))<=49 then '45-49' \
		when (year(now())-year(dob))>=50 and (year(now())-year(dob))<=54 then '50-54' \
		when (year(now())-year(dob))>=55 and (year(now())-year(dob))<=59 then '55-59' \
		when (year(now())-year(dob))>=60 and (year(now())-year(dob))<=64 then '60-64' \
		when (year(now())-year(dob))>=65 and (year(now())-year(dob))<=69 then '65-69' \
		when (year(now())-year(dob))>=70 and (year(now())-year(dob))<=74 then '70-74' \
		when (year(now())-year(dob))>=75 and (year(now())-year(dob))<=79 then '75-79' \
		when (year(now())-year(dob))>=80 and (year(now())-year(dob))<=84 then '80-84' \
		when (year(now())-year(dob))>=85 then '85+' \
		end as 'age' \
		, \
		COUNT(CASE insuranceDetailsStatus  WHEN 'Accepted' THEN 1 END) AS accepted, \
		(100 - COUNT(CASE insuranceDetailsStatus  WHEN 'Rejected' THEN 1 END))*(-1) AS rejected \
		from patientdetails,insurancedetails where patientDetailsInsuranceId=insuranceDetailsId group by 1 order by 1 desc;";
	connection.query(query, function(err, rows) {		
		callback(err, rows);
	});			
}

exports.typeAhead = function(callback,field,table,q) {
	connection.query('use cmpe295ehr;');
	console.log('Search key= '+q);
	console.log('select '+field+' as first from '+table+' where '+field+' like "%'+q+'%";');
	connection.query('select '+field+' as first from '+table+' where '+field+' like "%'+q+'%";', 
			function(err, rows) {
		//console.log(rows);
		//console.log(field);
		var t="rows[i]."+field+"";
		//console.log(field);
		var data=[];
		for(i=0;i<rows.length;i++)
		{
			data.push('"'+rows[i].first+'"');
		}

		//console.log('Data= '+data);
		//console.log('Rows from dbconn= '+rows);
		rows=data;
		callback(err, rows);
	});
};

exports.check = function(callback,table,field,val){
	console.log(val);
	//console.log('inside dbconn');
	connection.query('use cmpe295ehr;');
	var query = 'select '+field+' from ' +table+ ' where '+field+'='+val;
	connection.query(query, function(err, rows) {		
		callback(err, rows);
		console.log(rows);
	});			
}

exports.searchkey = function(callback,getval,field,key){
	//console.log(val);
	//console.log('inside dbconn');
	connection.query('use cmpe295ehr;');
	var query = 'select '+getval+' as first from diagnostoprocedure where '+field+'='+'"'+key+'"';
	console.log(query);
	connection.query(query, function(err, rows) {		
		callback(err, rows);
		console.log(rows);
	});			
}

exports.checkTreatCode = function(callback,dcode,tcode){
	//console.log('inside dbconn');
	connection.query('use cmpe295ehr;');
	var query = 'select '+tcode+' from diagnostoprocedure where diagnosiscodes = '+dcode+' and procedureCodes ='+tcode;
	connection.query(query, function(err, rows) {		
		callback(err, rows);
		console.log(rows);
	});			
}

exports.TrainData = function(callback){
	//console.log('inside dbconn');
	connection.query('use cmpe295ehr;');
	var query = 'select patientAddressCity, patientAddressState,diagnosisCode,ProcedureCode, StatusAtFiling, CodesStatus, insuranceDetailsStatus from cmpe295ehr.scratch ' 
		connection.query(query, function(err, rows) {		
			callback(err, rows);
//			console.log(rows);
		});			
}

exports.GetKMeanRowstwo = function(callback,one, two){
	//console.log(rCode);
	console.log('inside dbconn');
	connection.query('use cmpe295ehr;');
	var query = 'select '+one+' as one, '+two+' as two from scratch'
	console.log(query);
	connection.query(query, function(err, rows) {		
		//console.log(rows);	
		callback(err, rows);

	});			
}

exports.GetKMeanRowsone = function(callback,one){
	//console.log(rCode);
	console.log('inside dbconn');
	connection.query('use cmpe295ehr;');
	var query = 'select '+one+' as one from scratch';
	console.log(query);
	connection.query(query, function(err, rows) {		
		//console.log(rows);	
		callback(err, rows);

	});			
}

exports.InsertData = function (callback,req){
	var dataObj;
	console.log("Inside dbconn Insert Data method");
	//console.log(req.body.providername);
	connection.query('use cmpe295ehr;');
	var query = "insert into scratch(patientFullName,insuranceDetailsProviderId, insuranceProviderName, patientAddressStreet, patientAddressCity, patientAddressZip, DiagnosisCode, ProcedureCode,StatusAtFiling,CodesStatus)" +
			"values('"+ req.body.pname +"','" +
					 + req.body.insuranceId+"','"
					 + req.body.providername+"','"
					 + req.body.street+"','"
					 + req.body.city+"','"
					 + req.body.zip+"','"
					 + req.body.dcode+"','"
					 + req.body.tcode+"','expired','Match')";
	connection.query(query, function(err, rows) {		
			if (err) {console.log(err);}
	});
	query='select * from scratch where insuranceDetailsProviderId ='+req.body.insuranceId;
	connection.query(query, function(err, rows) {
				console.log(rows);
				//dataObj=rows;	
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
	var query = "select * from cmpe295ehr.patientaddress";
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
