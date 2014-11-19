
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

exports.showSalaryAnalysis= function(req, res){
	  res.render('salaryAnalysis');

};

exports.showhome= function(req, res){
	res.render('home');
	};


exports.getCompanyRatings = function(req, res){
	dbConn.getCompanyRatings(function(err,rows){
		console.log(rows);
		 res.send(rows);
	});	
	  
};

exports.getSalaryInfo= function(req, res){
	dbConn.getSalaryInfo(function(err,rows){
		console.log(rows);
		console.log(req.params.strUser);
		 res.send(rows);
	},req.params.strUser);	
};

