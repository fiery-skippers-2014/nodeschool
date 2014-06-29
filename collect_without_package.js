var http = require('http')

var url = process.argv[2]
var collection = ""

http.get(url, function callback (response) {
	
	response.on('data', function (data) {
	collection += data.toString()
});
	response.on('end',function(){
		console.log(collection.length)
		console.log(collection)
	})
}).on('error', function(e) {
	console.log(e.message);
});

