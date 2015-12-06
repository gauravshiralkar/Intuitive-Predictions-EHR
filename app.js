/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

/*pdfjson
var nodeUtil = require("util"),
fs = require('fs'),
_ = require('underscore'),
PDFParser = require("pdf2json/pdfparser");

var pdfParser = new PDFParser();

pdfParser.on("pdfParser_dataReady", function (data){console.log(data)});

//pdfParser.on("pdfParser_dataError", _.bind(_onPFBinDataError, self));

var pdfFilePath = "C:/Users/Grv/Desktop/a.pdf";

pdfParser.loadPDF(pdfFilePath);
//console.log(pdfParser);

// or call directly with buffer
fs.readFile(pdfFilePath, function (err, pdfBuffer) {
if (!err) {
pdfParser.parseBuffer(pdfBuffer);
//console.log(pdfBuffer);
}
})
*/


/*pdf
var pdfText = require('pdf-text');

var pathToPdf = "C:/Users/Grv/Desktop/a.pdf";

pdfText(pathToPdf, function(err, chunks) {
  //chunks is an array of strings 
  //loosely corresponding to text objects within the pdf

  //for a more concrete example, view the test file in this repo
	console.log(chunks);
});
*/

//-----------------------Bayes Net Method--------------------------------------------------------------------------
var bayes = require('bayes')
var classifier = bayes()

// teach it positive phrases
classifier.learn('amazing, awesome movie!! Yeah!! Oh boy.', 'positive')
classifier.learn('Sweet, this is incredibly, amazing, perfect, great!!', 'positive')

// teach it a negative phrase
classifier.learn('terrible, shitty thing. Damn. Sucks!!', 'negative')

// now ask it to categorize a document it has never seen before
var result = classifier.categorize('awesome, cool, amazing!! Yay.')
//console.log(result);
// => 'positive'

// serialize the classifier's state as a JSON string.
var stateJson = classifier.toJson()

// load the classifier back from its JSON representation.
var revivedClassifier = bayes.fromJson(stateJson)
//--------------------End Of BayeNet Method--------------------------------------------------------------------------

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//Create Routes-

//app.get('/', routes.index);
app.get('/', routes.index);

app.get('/test', routes.getPatientDetails);
app.get('/testme', routes.testme);

app.get('/patientaddress', routes.getPatientAddress);

//dashboard
app.get('/dashboard', routes.showDashboard);
//
// stackedPie
app.get('/showStackedChart', routes.showStackedChart);
app.get('/getStackedData', routes.getStackedData);
//

//pie combination chart
app.get('/getPieData/:rCode', routes.getPieData);
//

//line Chart
app.get('/showLineChart', routes.showLineChart);
app.get('/getLineData', routes.getLineData);

//

//Map for ehr trends

app.get('/getMapData/:type', routes.getMapData);

//
app.get('/showPie',routes.showPie);
app.get('/getPie',routes.getPie);
//about us
app.get('/aboutus', routes.showAboutUs);
//

//Region Map
app.get('/showRegionMap', routes.showRegionMap);
app.get('/getRegionMapData', routes.getRegionMapData);
//

app.get('/showAcceptRejectMap', routes.showAcceptRejectMap);
app.get('/showEHR', routes.showEHR);
app.get('/getAcceptRejectData', routes.getAcceptRejectData);
app.get('/callPieChart/state', routes.callPieChart);

app.get('/typeAhead/:field/:table', routes.typeAhead);

/*
app.get('/getScatter1/:strUsr', routes.getScatter1);
app.get('/showtest', function(req, res) {
	res.render('test.ejs');
});
*/



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
