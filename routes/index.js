
/*
 * GET home page.
 */

//get correct directory path
var filePath = __dirname.replace('routes', 'views/')

exports.index = function(req, res) {
	res.sendfile(filePath + 'index.html');
};

exports.partials = function (req, res) {
 	var name = req.params.name;
  	res.sendfile(filePath + 'partials/' + name + '.html');
};