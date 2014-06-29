var fs = require('fs')



var getLinesCount = function (filename, callback) {

fs.readFile(filename, 'utf-8', function(err, content) {
	if (err) throw err
	var lines = (content.split('\n').length -1) 
	callback(lines)
})

}

getLinesCount(process.argv[2], function(data) {
	console.log(data)
})