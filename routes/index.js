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

var bayes = require('bayes');
var classifier = bayes();
var kmeans = require('node-kmeans');

//pdfjson
var nodeUtil = require("util"),
fs = require('fs'),
_ = require('underscore'),
PDFParser = require("pdf2json/pdfparser");

var pdfText = require('pdf-text');




exports.index = function(req, res){
	console.log(req.app.get('dbuntrained'));
	if (req.app.get('dbuntrained')){res.redirect('/TrainData');}
	res.render('index');

};

exports.showTemplate= function (req,res){

	res.render('template.ejs');
};

exports.showEHR= function (req,res){

	res.render('ehr-dwr.html');
};

exports.showOCR= function (req,res){

	res.render('ocr.ejs');
};

exports.selectPDF= function (req,res){

	res.render('selectpdf.ejs');
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


//get Tree data for table

exports.getTreeData = function(req, res){
	console.log("inside index");
	dbConn.getTreeData(function(err,rows){
		console.log(rows);
		res.send(rows);
	},req.params.name);			  
};

//
exports.callPieChart= function(req, res)
{
	res.send("hello");
}

exports.showKmeans= function (req,res){

	res.render('kmeanchart.ejs');
};

//Region Map	

exports.showRegionMap = function(req, res){
	res.render('regionmap.ejs');
};	

exports.getRegionMapData = function(req, res){
	dbConn.getRegionMapData(function(err,rows){
		console.log("index.js "+rows);
		res.send(rows);
	});			  
};


//Tree map
exports.showTree = function(req, res){
	res.render('treemap.ejs');
};

exports.getTree = function(req, res){
	console.log("inside index");
	dbConn.getTree(function(err,rows){
		console.log(rows);
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

exports.autopopulate = function(req, res){
	dbConn.autopopulate(function(err,rows){
		res.send(rows);
	},req.params.val);			  
};

exports.pdfpopulate = function(req, res){
	var pdfParser = new PDFParser();
	var idtxt = 100;
	pdfParser.on("pdfParser_dataReady", function (data){console.log(data)});

	//pdfParser.on("pdfParser_dataError", _.bind(_onPFBinDataError, self));

	var pdfFilePath = "C:/Users/Grv/Desktop/a.pdf";
	//var pdfFilePath = req.params.path;

	pdfParser.loadPDF(pdfFilePath);
	//console.log(pdfParser);

	// or call directly with buffer
	fs.readFile(pdfFilePath, function (err, pdfBuffer) {
	if (!err) {
	pdfParser.parseBuffer(pdfBuffer);
	//console.log(pdfBuffer);
	}
	})
	//


	/*pdf


	var pathToPdf = "C:/Users/Grv/Desktop/a.pdf";

	pdfText(pathToPdf, function(err, chunks) {
	  //chunks is an array of strings 
	  //loosely corresponding to text objects within the pdf

	  //for a more concrete example, view the test file in this repo
		console.log(chunks);
	});
	*/

	dbConn.pdfpopulate(function(err,rows){
		res.send(rows);
	},idtxt);			  
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

exports.check = function(req, res){
	dbConn.check(function(err,rows){
		res.send(rows);
	},req.params.table,req.params.field,req.params.val);			  
};

exports.searchkey = function(req, res){
	dbConn.searchkey(function(err,rows){
		res.send(rows);
	},req.params.getval,req.params.field,req.params.key);			  
};


exports.checkTreatCode = function(req, res){
	dbConn.checkTreatCode(function(err,rows){
		res.send(rows);
	},req.params.dcode,req.params.tcode);			  
};

exports.InsertData = function(req,res){
	console.log(req.body.providername);
	dbConn.InsertData(function(err,rows){
		
		console.log('index insertData');
		console.log(rows);
		res.redirect('/getPrediction/'+rows);
	},req);
	
}
//Prediction Logic //



exports.TrainData = function(req,res){
	dbConn.TrainData(function(err,rows){
		console.log(rows.length);
		console.log(req.param)		

		var train=[];
		var category=[];
		
		for (i = 0; i < rows.length; i++) 
		{ 
			train.push(rows[i].patientAddressCity +" " + rows[i].patientAddressState +" " + rows[i].diagnosisCode +" " +rows[i].ProcedureCode+" " +  rows[i].StatusAtFiling+" "+rows[i].CodesStatus); 
			category.push(rows[i].insuranceDetailsStatus); 
			
		}

		for (i = 0; i < 299; i++) 
		{

			classifier.learn(train[i], category[i]);
		}
		console.log('Data trained for '+train.length+ ' records');
		req.app.set('dbuntrained',false);
		res.redirect('/');
	});
	
};

exports.bayeNetMethod = function(req,res){
<<<<<<< HEAD

<<<<<<< HEAD
	var bayes = require('bayes');
	var classifier = bayes();

	dbConn.bayeNetMethod(function(err,rows){
		console.log(rows.length);
		console.log(req.param)		

		var train=[];
		var category=[];
		
		for (i = 0; i < rows.length; i++) 
		{ 
			train.push(rows[i].patientAddressCity +" " + rows[i].patientAddressState +" " + rows[i].diagnosisCode +" " +rows[i].ProcedureCode+" " +  rows[i].StatusAtFiling+" "+rows[i].CodesStatus); 
			category.push(rows[i].insuranceDetailsStatus); 
			
		}

		for (i = 0; i < 299; i++) 
		{

			classifier.learn(train[i], category[i]);
		}
		
		
		console.log(rows[300]);
		
		console.log("Training of 300:");
		console.log(train[300]);
		
		var result = classifier.categorize(train[300])
		console.log("Result is:");
		
		console.log(result);

		var stateJson = classifier.toJson()
//		load the classifier back from its JSON representation.
		var revivedClassifier = bayes.fromJson(stateJson)	

<<<<<<< HEAD
	// load the classifier back from its JSON representation.
	var revivedClassifier = bayes.fromJson(stateJson)
}
>>>>>>> 89a35c8... Prediction Logic modularized 
=======
		res.send(result);
	});
};
>>>>>>> b2bb1b0... Module of BayesNet 
=======
=======
    console.log(req.params.dataObj);
>>>>>>> 7b8682d... Prediction Logic added
	var result = classifier.categorize(req.params.dataObj);
	console.log("Result is:");
	
	console.log(result);

	var stateJson = classifier.toJson()
//	load the classifier back from its JSON representation.
	var revivedClassifier = bayes.fromJson(stateJson)	

<<<<<<< HEAD
	res.send(result);
};

<<<<<<< HEAD
<<<<<<< HEAD
//exports.TrainData = function (req,res){
//	
//	dbConn.bayeNetMethod(function(err,rows){
//		console.log(rows.length);
//		console.log(req.param)		
//
//		var train=[];
//		var category=[];
//		
//		for (i = 0; i < rows.length; i++) 
//		{ 
//			train.push(rows[i].patientAddressCity +" " + rows[i].patientAddressState +" " + rows[i].diagnosisCode +" " +rows[i].ProcedureCode+" " +  rows[i].StatusAtFiling+" "+rows[i].CodesStatus); 
//			category.push(rows[i].insuranceDetailsStatus); 
//			
//		}
//
//		for (i = 0; i < 299; i++) 
//		{
//
//			classifier.learn(train[i], category[i]);
//		}
//	
//	});
//	
//};
>>>>>>> 6190d41... Working Bayesian
=======
exports.KMeanClusters = function(req,res){
=======
exports.KMeanCluster = function(req,res){
>>>>>>> 8005fb5... Kmean Method finished
	
	var data = [ 
	            {'company': 'Microsoft' , 'size': 91259, 'revenue': 60420},
	            {'company': 'IBM' , 'size': 400000, 'revenue': 98787},
	            {'company': 'Skype' , 'size': 700, 'revenue': 716},
	            {'company': 'SAP' , 'size': 48000, 'revenue': 11567},
	            {'company': 'Yahoo!' , 'size': 14000 , 'revenue': 6426 },
	            {'company': 'eBay' , 'size': 15000, 'revenue': 8700},
	          ];
	
	var vectors = new Array();
	for (var i = 0 ; i < data.length ; i++)
		  vectors[i] = [ data[i]['size'] , data[i]['revenue']];
	

	var KResult = kmeans.clusterize(vectors, {k: 2}, function(err,res) {
	  if (err) console.error(err)
	  else console.log(res);
	  //console.log(res.cluster);
	  //res.send(KResult.cluster);
	});
	
	//res.send(KResult.cluster);
=======
	//res.send(result);
	res.render('resultPage.ejs',{result: result});
	req.story=result;
	//res.redirect('/testme');
>>>>>>> 7b8682d... Prediction Logic added
};
<<<<<<< HEAD
>>>>>>> 87e5cdd... DB CHANGE and kmeans
=======

exports.KMeanClustertwo = function(req,res){
	var vectors = new Array();
	
	dbConn.GetKMeanRowstwo(function(err,rows){
	
		for (var i = 0 ; i < rows.length ; i++)
			vectors[i] = [ rows[i].one, rows[i].two];
	
		var KResult = kmeans.clusterize(vectors, {k: 10}, function(err,result) {
					if (err) console.error(err)
					else console.log(result);
					res.send(result);
					});
			
	},req.params.one,req.params.two);	
};


exports.KMeanClusterone = function(req,res){
	var vectors = new Array();
	
	dbConn.GetKMeanRowsone(function(err,rows){

		for (var i = 0 ; i < rows.length ; i++)
			vectors[i] = [ rows[i].one ];
	
		 KResult = kmeans.clusterize(vectors, {k: 10}, function(err,result) {
			 		if (err) console.error(err)
			 		else console.log(result);
			 		res.send(result);
		 });
			
	},req.params.one);	
};
<<<<<<< HEAD

>>>>>>> 110640c... K Mean code Addition
=======
>>>>>>> aae63be... One Param Cluster and Two Param Cluster 
