var fs = require('fs');

var teacher = JSON.parse(fs.readFileSync('new.json'));

console.log(teacher);