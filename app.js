var express = require('express');

var app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.send('<h1>Hello Boulder</h1>');
});

var server = app.listen(5819, function() {
	console.log('Express server listening on port ' + server.address().port);
});
