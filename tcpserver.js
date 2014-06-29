var net = require('net')
var port = process.argv[2]

var correctFormat = function(date) {
	if (date <  10) {
		return '0' + date.toString()
	}
	return date.toString()
}

var buildDate = function(date) {
	var year = date.getFullYear().toString()
	var month = correctFormat(date.getMonth() + 1 )
	var day = date.getDate().toString()
	var hour = date.getHours().toString()
	var min = correctFormat(date.getMinutes())
	return year + '-' + month + '-' + day + ' ' + hour + ':' + min
}

var server = net.createServer(function(c){
	var now = new Date();
	var dateString = buildDate(now)
	c.end(dateString +'\n')
	// c.on('end', function(){
	// 	console.log('server done')
	// })
	// // c.write('what')
	// c.pipe(c);
});

server.listen(port, function() {
});
