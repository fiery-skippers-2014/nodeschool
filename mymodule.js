
module.exports = function (dirName, fileType, callback) {
	var fs = require('fs')
	var path = require('path')


	fs.readdir(dirName, function(err, list) {
		if (err) { return callback(err) }
			var files = []
			// console.log(Array.isArray(list))
			for (var i = 0; i < list.length; i++) {
				if (path.extname(list[i]) === "." + fileType) {
					files.push(list[i])
				}
			}
		callback(null,files)
	})
}
