
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('analysis', { title: 'Express' });
};