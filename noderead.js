// process.stdout.write("hello\n")
var fs = require('fs')

var upperCaseNames = function (filename, myCallBack) {
  
	fs.readFile(filename, 'utf-8', function(err, fileContent){
	if (err) { myCallBack(err); return }
	var content = fileContent.split('\n').map(function(word) { return word.toUpperCase()
	})	
	myCallBack(err, content)
 	});
}

upperCaseNames('names.txt', function(err, names) {
	if (err) console.log(err)
	console.log(names)
})
// why is a function literal called a function literal...it's not created from the source code, it's created literally in the source code.  No one actually created the function it was created when it was 

// what is referential transparency

// learn how orders of operation
// learn about precedents
// learn ASI
// semi colons are statement delimiting characters
// 
