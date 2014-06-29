var fs = require('fs')

var filename = process.argv[2]

var content = fs.readFileSync(filename,'utf-8')

console.log(content.split('\n').length - 1)