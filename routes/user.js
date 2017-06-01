
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send({
  	'name': "Adam",
  	'name': "John",
  	'name': "Ted",
  	'name': "Thomas"
  });
};