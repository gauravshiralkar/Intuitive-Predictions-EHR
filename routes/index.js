<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> b912e15... Route Fixes

var dbConn = require('../model/dbConnection');

<<<<<<< HEAD
exports.index = function(req, res){
<<<<<<< HEAD
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
=======
	res.render('index');
>>>>>>> b912e15... Route Fixes
=======
exports.index = function(req, res){7
	//res.render('index');
<<<<<<< HEAD
	res.render('index-Copy');
>>>>>>> dd6ab00... Template from Scratch
=======
	res.render('index');
>>>>>>> 0e49818... Super Clean UI
};

exports.showTemplate= function (req,res){
	
	res.render('template.ejs');
};

exports.showEHR= function (req,res){
	
	res.render('ehr-dwr.html');
};
	
exports.testme = function(req, res){
	res.render('notifytest.ejs');
};

exports.showAboutUs = function(req, res){
	res.render('aboutus.ejs');
};

exports.showDashboard = function(req, res){
	//res.render('newdashboard.ejs');
	res.render('dashboard.ejs');
};

exports.callPieChart= function(req, res)
{
	res.send("hello");
}

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

exports.getMapData = function(req, res){
	console.log("inside index");
	dbConn.getMapData(function(err,rows){
		//console.log("index.js "+rows);
		res.send(rows);
	},req.params.type);			  
};


exports.showStackedChart = function(req, res){
	res.render('stacked.ejs');
};
exports.showPie = function(req, res){
	res.render('pie.ejs');
};

exports.getStackedData = function(req, res){
	dbConn.getStackedData(function(err,rows){
		
		res.send(rows);
	});			  
};

exports.getPie = function(req, res){
	dbConn.getPie(function(err,rows){
		
		res.send(rows);
	});			  
};

//
exports.showAcceptRejectMap = function(req, res){
	res.render('acceptreject');
};

exports.showLineChart = function(req, res){
	res.render('linechart.ejs');
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

exports.getLineData = function(req, res){
	console.log("inside index");
	dbConn.getLineData(function(err,rows){
		//console.log(rows[0]);
		res.send(rows);
	});			  
};

exports.getPieData = function(req, res){
	console.log("inside index");
	dbConn.getPieData(function(err,rows){
		//console.log(rows[0]);
		res.send(rows);
	},req.params.rCode);			  
};

exports.typeAhead= function(req,res){
	dbConn.typeAhead(function(err,rows){
		//console.log('Search key= '+req.query.key);
		//console.log('Rows from index= '+JSON.stringify(rows));
		console.log(req.params.field,req.params.table);
		 res.send('['+rows+']');
		 //res.send(rows);
	},req.params.field,req.params.table,req.query.key);
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
=======

var dbConn = require('../model/dbConnection');

exports.index = function(req, res){7
	//res.render('index');
	res.render('index');
};

exports.showTemplate= function (req,res){
	
	res.render('template.ejs');
};

exports.showEHR= function (req,res){
	
	res.render('ehr-dwr.html');
};
	
exports.testme = function(req, res){
	res.render('notifytest.ejs');
};

exports.showAboutUs = function(req, res){
	res.render('aboutus.ejs');
};

exports.showDashboard = function(req, res){
	//res.render('newdashboard.ejs');
	res.render('dashboard.ejs');
};

exports.callPieChart= function(req, res)
{
	res.send("hello");
}

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

exports.getMapData = function(req, res){
	console.log("inside index");
	dbConn.getMapData(function(err,rows){
		//console.log("index.js "+rows);
		res.send(rows);
	},req.params.type);			  
};


exports.showStackedChart = function(req, res){
	res.render('stacked.ejs');
};
exports.showPie = function(req, res){
	res.render('pie.ejs');
};

exports.getStackedData = function(req, res){
	dbConn.getStackedData(function(err,rows){
		
		res.send(rows);
	});			  
};

exports.getPie = function(req, res){
	dbConn.getPie(function(err,rows){
		
		res.send(rows);
	});			  
};

//
exports.showAcceptRejectMap = function(req, res){
	res.render('acceptreject');
};

exports.showLineChart = function(req, res){
	res.render('linechart.ejs');
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

exports.getLineData = function(req, res){
	console.log("inside index");
	dbConn.getLineData(function(err,rows){
		//console.log(rows[0]);
		res.send(rows);
	});			  
};

exports.getPieData = function(req, res){
	console.log("inside index");
	dbConn.getPieData(function(err,rows){
		//console.log(rows[0]);
		res.send(rows);
	},req.params.rCode);			  
};

exports.typeAhead= function(req,res){
	dbConn.typeAhead(function(err,rows){
		//console.log('Search key= '+req.query.key);
		//console.log('Rows from index= '+JSON.stringify(rows));
		console.log(req.params.field,req.params.table);
		 res.send('['+rows+']');
		 //res.send(rows);
	},req.params.field,req.params.table,req.query.key);
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
//

//  Prediction Logic //
exports.bayeNetMethod = function(req,res){
	
//	dbConn.bayeNetMethod(function(err,rows){
//		console.log(req.param)		
//	});

	var bayes = require('bayes');
	var classifier = bayes();
	
	// teach it positive phrases
	classifier.learn('amazing, awesome movie!! Yeah!! Oh boy.', 'positive')
	classifier.learn('Sweet, this is incredibly, amazing, perfect, great!!', 'positive')

	// teach it a negative phrase
	classifier.learn('terrible, shitty thing. Damn. Sucks!!', 'negative')

	// now ask it to categorize a document it has never seen before
	var result = classifier.categorize('awesome, cool, amazing!! Yay.')
	console.log(result);
	// => 'positive'
	res.send(result);

	// serialize the classifier's state as a JSON string.
	var stateJson = classifier.toJson()

	// load the classifier back from its JSON representation.
	var revivedClassifier = bayes.fromJson(stateJson)
}
>>>>>>> 89a35c8... Prediction Logic modularized 
