
/*
 * GET home page.
 */

var dbConn = require('../model/dbConnection');

exports.index = function(req, res){
  res.render('index');
};

exports.showRatingAnalysis = function(req, res){
		  res.render('ratingAnalysis');
	
};
exports.getBarChartCali = function(req, res){
	  res.render('companyBarChart');

};
exports.getBarChartTexas = function(req, res){
	  res.render('companyBarChartTexas');

};
exports.getBarChartNewYork = function(req, res){
	  res.render('companyBarChartNY');

};
exports.getBarChartWashington = function(req, res){
	  res.render('companyBarChartWA');

};
exports.getBarChartVirginia = function(req, res){
	  res.render('companyBarChartVI');

};


exports.showSalaryAnalysis= function(req, res){
	  res.render('salaryAnalysis');

};

exports.showMap= function(req, res){
	res.render('Map',{rows:''});

};

exports.showhome= function(req, res){
	res.render('index');
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


exports.getMapData= function(req, res){
	console.log("routes");
	dbConn.getMapData(function(err,rows){
		 res.send(rows);
	});	
};

<<<<<<< HEAD

=======
>>>>>>> f548fbe2661bbfc5fc501e178ac37cac0f329d12
exports.getCompanyReviews = function(req,res){
	dbConn.getCompanyReviews(function(err,rows){
		console.log(rows);
		res.send(rows);
	})
};

exports.showCompanyReviews = function(req,res){
	res.render('companyReviews');
}


