var http = require('http')

var site = process.argv[2]


http.get(site, function callback (response) {
	response.on('data', function (data) {
	console.log(data.toString())
});
}).on('error', function(e) {
	console.log(e.message);
});