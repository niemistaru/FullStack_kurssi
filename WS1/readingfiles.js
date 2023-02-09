var fs = require("fs");

//console.log("Ohjelma käynnistyi");
var data = fs.readFileSync('example.txt');
console.log(data.toString());

console.log("Ohjelma päättyi");