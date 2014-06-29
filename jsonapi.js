var http = require('http')
var url = require('url')


var server = http.createServer (function(req, res){
	var timeRequest = (url.parse(req.url,true))
	var result
	if (timeRequest['pathname'] === '/api/parsetime') {
		var dateData = timeRequest['query']['iso']
		var date = new Date(dateData)
		var json = {
			"hour": date.getHours(),
			"minute": date.getMinutes(),
			"second": date.getSeconds()
		}
		result = JSON.stringify(json)
	}
	else if (timeRequest['pathname'] ===  '/api/unixtime') {
		var json = {
			'unixtime': Date.parse(timeRequest['query']['iso'])
		}
		result = JSON.stringify(json)
	}
	res.writeHead(200, {'Content-Type': 'application/json'})
	res.end(result)
})

server.listen(process.argv[2])