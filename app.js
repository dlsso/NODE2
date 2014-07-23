// Instructions for this exercise suggest that res.header/send should be moved
// outside app.get, which of course doesn't work. There is also no solution
// for this particular exercise on github.


var fs = require('fs')
var express = require('express');

var app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {

	fs.readFile('data.txt', function (err, data){
		res.header('Content-Type', 'text/html')
		res.send(data);
	});

});

var server = app.listen(5819, function() {
	console.log('Express server listening on port ' + server.address().port);
});