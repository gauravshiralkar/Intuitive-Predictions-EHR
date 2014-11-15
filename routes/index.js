
/*
 * GET home page.
 */

var dbConn = require('../model/dbConnection');

exports.index = function(req, res){
  res.render('analysis', { title: 'Express' });
};

exports.showRatingAnalysis = function(req, res){
		  res.render('ratingAnalysis');
	
};

exports.getCompanyRatings = function(req, res){
	dbConn.getCompanyRatings(function(err,rows){
		console.log(rows);
		 res.send(rows);
	});	
	  
};


