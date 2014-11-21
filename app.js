/**
 * Module dependencies.
 */
var mysql = require('mysql');
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
    //password : '',
  password : 'pass',
	port : '3306',
	database : 'cmpe274'
});
connection.connect();

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
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

app.get('/', routes.index);
app.get('/companyRatingAnalysis',routes.showRatingAnalysis);
app.get('/getCompanyRatings',routes.getCompanyRatings);
app.get('/SalaryAnalysis',routes.showSalaryAnalysis);
app.get('/getSalaryInfo/:strUser',routes.getSalaryInfo);
app.get('/home',routes.showhome);
app.get('/users', user.list);
app.get('/getCompanyReviews',routes.getCompanyReviews);
app.get('/showCompanyReviews',routes.showCompanyReviews);
app.get('/getBubble/:stateName/:companyName',routes.getBubble);
app.get('/showBubble/:stateName/:companyName',routes.showBubble);



app.get('/maps', routes.showMap);
app.get('/getMapData',routes.getMapData);
app.get('/getBarChartCali',routes.getBarChartCali);
app.get('/getBarChartTexas',routes.getBarChartTexas);
app.get('/getBarChartNewYork',routes.getBarChartNewYork);
app.get('/getBarChartWashington',routes.getBarChartWashington);
app.get('/getBarChartVirginia',routes.getBarChartVirginia);

app.get('/showtest', function(req, res) {
	res.render('test.ejs');
});

//For TreeMap

app.get('/getJobcountData/:stateName',routes.getJobcountData);
app.get('/showTreeMap/:stateName',routes.showTreeMap);

app.get('/showmaps', function(req, res) {
	connection.query('select sum(jobCount) as jobCount, stateName from citywisejobcount group by stateName order by stateName asc', function(err, rows,fields) {
		console.log(rows[38].jobCount);
		res.render('Map.ejs', {
			rows:rows		
	});
});
});



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
