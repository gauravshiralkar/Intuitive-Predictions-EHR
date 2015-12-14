/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json()

//create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true })


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

//get data for tree table
app.get('/getTreeData/:name', routes.getTreeData);

//

//Map for ehr trends

app.get('/getMapData/:type', routes.getMapData);

//
app.get('/showPie',routes.showPie);
app.get('/getPie',routes.getPie);
//about us
app.get('/aboutus', routes.showAboutUs);
//

//tree map

app.get('/showTree', routes.showTree);
app.get('/getTree', routes.getTree);

//
//k means chart

app.get('/showKmeans', routes.showKmeans);
//

//Region Map
app.get('/showRegionMap', routes.showRegionMap);
app.get('/getRegionMapData', routes.getRegionMapData);
//

app.get('/showAcceptRejectMap', routes.showAcceptRejectMap);
app.get('/showEHR', routes.showEHR);
app.get('/showOCR', routes.showOCR);
app.get('/selectPDF', routes.selectPDF);
app.get('/generatefromPDF/:path', routes.generatefromPDF);
app.get('/getAcceptRejectData', routes.getAcceptRejectData);
app.get('/callPieChart/state', routes.callPieChart);


//Javascript Functions
app.get('/typeAhead/:field/:table', routes.typeAhead);
app.get('/check/:table/:field/:val', routes.check);
app.get('/checkTreatCode/:dcode/:tcode', routes.checkTreatCode);
app.get('/searchkey/:getval/:field/:key', routes.searchkey);
app.get('/autopopulate/:val', routes.autopopulate);
app.get('/pdfpopulate/:path', routes.pdfpopulate);
//

//Insert into database
//app.get('/insertData/:dataObject', routes.InsertData);
app.post('/insertData',urlencodedParser,routes.InsertData);

//-----------------------Bayes Net Method--------------------------------------------------------------------------

app.get('/TrainData', routes.TrainData);
app.get('/getPrediction/:dataObj', routes.bayeNetMethod);
app.set('dbuntrained',true);

//--------------------End Of BayeNet Method--------------------------------------------------------------------------

//-----------------------K Means Method----------------------------------------------------------------------------------

var kmeans = require('node-kmeans');
app.get('/getClustersOne/:one', routes.KMeanClusterone);
app.get('/getClustersTwo/:one/:two', routes.KMeanClustertwo);

//-----------------------K Means Method----------------------------------------------------------------------------------


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
