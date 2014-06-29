var bl = require('bl')
var http = require('http')
var urls = process.argv.slice(2,5)
var results = []
var count = 0

function printResults () {
	for (var i = 0; i < 3; i++) 
		console.log(results[i])
}

var httpGet = function (index) {
	http.get(urls[index], function(res){
	res.pipe(bl(function(err,data){
		if (err)
			return console.error(err)
			results[index] = data.toString()
			count ++
			if (count === 3) 
				printResults()
	}))
}).on('error',function(e){
	console.log(e)
})
}

for (var i = 0; i < 3; i++) 
	httpGet(i)
