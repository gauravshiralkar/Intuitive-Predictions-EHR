
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('analysis', { title: 'Express' });
};

exports.showRatingAnalysis = function(req, res){
	  res.render('ratingAnalysis');
};