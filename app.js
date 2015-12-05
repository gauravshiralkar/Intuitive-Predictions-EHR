/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

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

app.get('/patientaddress', routes.getPatientAddress);

//dashboard
app.get('/dashboard', routes.showDashboard);
//

//pie combination chart
app.get('/getPieData/:rCode', routes.getPieData);
//

//line Chart
app.get('/showLineChart', routes.showLineChart);
app.get('/getLineData', routes.getLineData);

//

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
