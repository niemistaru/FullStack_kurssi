/*
var fs = require("fs");

console.log("Program started");
var data = fs.readFileSync('example.txt');
console.log(data.toString());

for (var i=0; i < 15; i++) {
    console.log("Jippii");
}

console.log("Program ended");

*/

var fs = require("fs");

console.log("Program started");

fs.readFile('example.txt', results);

for (var i=0; i < 15; i++){
    console.log("Jippii");
}
function results(err, data){
    if (err) return console.error(err);
    console.log("Results of fileread:");
    console.log(data.toString());
}