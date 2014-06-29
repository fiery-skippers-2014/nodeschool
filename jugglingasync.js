var http = require('http')


var url1 = process.argv[2]
var url2 = process.argv[3]
var url3 = process.argv[4]
var targetUrls = [url1, url2, url3]
// var url1Data = ""
// var url2Data = ""
// var url3Data = ""

var completeData = {}
completeData[targetUrls[0]] = ""
completeData[targetUrls[1]] = ""
completeData[targetUrls[2]] = ""

var count = 3

targetUrls.forEach(function(url){
	http.get(url, function(res){
		res.on('data',function(data){
			completeData[url] += data.toString()
		})
		res.on('end',function(){
			count --;
			if (count <= 0){
			console.log(completeData[targetUrls[0]])
			console.log(completeData[targetUrls[1]])
			console.log(completeData[targetUrls[2]])
	}
		})
	}).on('error', function(e){
		console.log(e)
	})
})



// http.get(url1, function(res){
// 	res.on('data',function(data){
// 		url1Data += data.toString()
// 	})
// 	res.on('end',function(){
// 		completeData.url1 = url1Data
// 	})
// }).on('error', function(e){
// 	console.log(e)
// })

// http.get(url2, function(res){
// 	res.on('data',function(data){
// 		url2Data += data.toString()
// 	})
// 	res.on('end',function(){
// 		completeData.url2 = url1Data
// 	})
// }).on('error', function(e){
// 	console.log(e)
// })

// http.get(url2, function(res){
// 	res.on('data',function(data){
// 		url2Data += data.toString()
// 	})
// 	res.on('end',function(){
// 		completeData.url2 = url1Data
// 	})
// }).on('error', function(e){
// 	console.log(e)
// })

