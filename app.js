var fs = require('fs')
var fileContents = fs.readFileSync('data.txt')
// res.header('Content-Type', 'text/html')



var express = require('express');

var app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.header('Content-Type', 'text/html')
	res.send(fileContents);
});

var server = app.listen(5819, function() {
	console.log('Express server listening on port ' + server.address().port);
});
