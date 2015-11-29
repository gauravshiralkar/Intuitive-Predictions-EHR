<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> eefe521... New branch created for final running project

=======
>>>>>>> 4c57f7d... Update index.js
/*
 * GET home page.
 */

var dbConn = require('../model/dbConnection');

exports.index = function(req, res){
  res.render('index');
  //res.render('test');
};

exports.test = function(req, res){
	  //res.render('index');
	  res.render('testme');
	};

/*

exports.getScatter1 = function(req,res){
	dbConn.getScatter1(function(err,rows){
		console.log(rows);
		console.log(req.params.strUser);
		 res.send(rows);
	},req.params.strUsr);
	
};
<<<<<<< HEAD

<<<<<<< HEAD
exports.calcInsu = function(req,res){
	var data;
	console.log("In index calc" + req.params.strUser);
	dbConn.calcInsu(function(err,rows){
		console.log(rows);
		console.log(req.params.strUser);
		res.send(rows);
	},req.params.strUser);	
	
};



exports.getScatter= function(req, res){
	dbConn.getScatter(function(err,rows){
		console.log(rows);
		console.log(req.params.strUser);
		 res.send(rows);
	},req.params.strUser);	
};

exports.getBar= function(req, res){
	dbConn.getBar(function(err,rows){
		console.log(rows);
		console.log(req.params.strUser);
		 res.send(rows);
	},req.params.strUser);	
};

<<<<<<< HEAD
<<<<<<< HEAD
exports.getMapData= function(req, res){
	console.log("routes");
	dbConn.getMapData(function(err,rows){
		 res.send(rows);
	});	
};

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a2f8abf... Cleaned Project Throughly

=======
>>>>>>> f548fbe2661bbfc5fc501e178ac37cac0f329d12
=======

<<<<<<< HEAD


>>>>>>> eefe521... New branch created for final running project
exports.getCompanyReviews = function(req,res){
	dbConn.getCompanyReviews(function(err,rows){
		console.log(rows);
		res.send(rows);
	})
};

exports.showCompanyReviews = function(req,res){
	res.render('companyReviews');
};

exports.showBubble= function(req, res){
<<<<<<< HEAD
	res.render('bubbleChart');
=======
	var stateName = req.params.stateName;
	//console.log("__________"+stateName+"param="+req.params.companyName);
	var companyName = req.params.companyName;
	console.log("__________"+stateName+"_______"+companyName);
	res.render('bubbleChart',{stateName:stateName,companyName:companyName});
>>>>>>> eefe521... New branch created for final running project
	};

exports.getJobcountData = function(req,res){
	var stateName = req.params.stateName;
	console.log("__________***************_____________"+stateName);
	dbConn.getJobCountByState(function(err,rows){
		console.log(rows);
		res.send(rows);
	},stateName);
}

exports.showTreeMap = function(req,res){
	console.log("State Name_________"+req.params.stateName);
	res.render('companyTreeMap',{dat:req.params.stateName});
}
exports.getBubble= function(req, res){
<<<<<<< HEAD
	dbConn.getBubble(function(err,rows){
		console.log(rows);
				 res.send(rows);
	});	
};

=======

=======
>>>>>>> 86a1744... Integrated Cassandra
/*
 * GET home page.
 */

var dbConn = require('../model/dbConnection');

exports.index = function(req, res){
  res.render('index');
<<<<<<< HEAD
};

exports.showRatingAnalysis = function(req, res){
		  res.render('ratingAnalysis');
	
};
exports.getBarChartCali = function(req, res){
	  res.render('companyBarChart');

};
exports.getBarChartTexas = function(req, res){
	  res.render('BarChartTexas');

};
exports.getBarChartNewYork = function(req, res){
	  res.render('BarChartNY');

};
exports.getBarChartWashington = function(req, res){
	  res.render('BarChartWashington');

};
exports.getBarChartVirginia = function(req, res){
	  res.render('BarChartVirginia');

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




exports.getCompanyReviews = function(req,res){
	dbConn.getCompanyReviews(function(err,rows){
		console.log(rows);
		res.send(rows);
	})
};

exports.showCompanyReviews = function(req,res){
	res.render('companyReviews');
};

exports.showBubble= function(req, res){
	var stateName = req.params.stateName;
	//console.log("__________"+stateName+"param="+req.params.companyName);
	var companyName = req.params.companyName;
	console.log("__________"+stateName+"_______"+companyName);
	res.render('bubbleChart',{stateName:stateName,companyName:companyName});
	};

exports.getJobcountData = function(req,res){
	var stateName = req.params.stateName;
	console.log("__________***************_____________"+stateName);
	dbConn.getJobCountByState(function(err,rows){
		console.log(rows);
		res.send(rows);
	},stateName);
}

exports.showTreeMap = function(req,res){
	console.log("State Name_________"+req.params.stateName);
	res.render('companyTreeMap',{dat:req.params.stateName});
}
exports.getBubble= function(req, res){
	console.log("side getBubble");
	var stateName = req.params.stateName;
	var companyName = req.params.companyName;
	dbConn.getBubble(function(err,rows){
		console.log("Inside getBubble");
		console.log(rows);
				 res.send(rows);
	},stateName,companyName);	
};

>>>>>>> 4325e92... Fixed bubble chart
=======
	console.log("side getBubble");
	var stateName = req.params.stateName;
	var companyName = req.params.companyName;
	dbConn.getBubble(function(err,rows){
		console.log("Inside getBubble");
		console.log(rows);
				 res.send(rows);
	},stateName,companyName);	
};

>>>>>>> eefe521... New branch created for final running project
=======
>>>>>>> a2f8abf... Cleaned Project Throughly
=======
exports.search= function(req,res){
	dbConn.search(function(err,rows){
		console.log('Search key= '+req.query.key);
		console.log('Rows from index= '+JSON.stringify(rows));
		 res.send('['+rows+']');
	},req.query.key);	
};
<<<<<<< HEAD
>>>>>>> a3fea4c... Changes for generic driver search
=======

exports.getScoreVizData = function(req, res){
	dbConn.getScoreVizData(function(err,rows){
		console.log(rows);
		 res.send(rows);
	});	
	  
};
>>>>>>> f3499b8... adding one more chart for scores
=======
>>>>>>> 9f4a814... Update index.js
=======
*/
>>>>>>> e9be4b1... Delete Unwanted
=======
  //res.render('test');
};

exports.showTemplate= function (req,res){
	
	res.render('template.ejs');
};
	
exports.test = function(req, res){
	  //res.render('index');
	  res.render('testme');
	};

// Region Map	

exports.showRegionMap = function(req, res){
	res.render('regionmap.ejs');
};	

exports.getRegionMapData = function(req, res){
	dbConn.getRegionMapData(function(err,rows){
		console.log("index.js "+rows);
		res.send(rows);
	});	
		  
};

//
exports.getAcceptRejectMap = function(req, res){
	res.render('acceptreject');
};

exports.getAcceptRejectData = function(req, res){
	dbConn.getAcceptRejectData(function(err,rows){
		console.log("index.js "+rows);
		res.send(rows);
	});	
		  
};

exports.getPatientDetails = function(req, res){
	dbConn.getPatientDetails(function(err,rows){
		console.log("index.js "+rows);
		res.send(rows);
	});	
		  
};

exports.getPatientAddress = function(req, res){
	dbConn.getPatientAddress(function(err,rows){
		console.log("index.js "+rows);
		 res.send(rows);
	});	
	  
};
/*

exports.getScatter1 = function(req,res){
	dbConn.getScatter1(function(err,rows){
		console.log(rows);
		console.log(req.params.strUser);
		 res.send(rows);
	},req.params.strUsr);
	
};
*/
>>>>>>> 86a1744... Integrated Cassandra
