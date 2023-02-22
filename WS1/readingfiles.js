/*//TÄÄ ON ALKUPERÄINEN, ALLE MODIFIOIN NIIN, ETTÄ LUKEE KAHDESTA TIEDOSTOSTA
var fs = require("fs");

//console.log("Ohjelma käynnistyi");
var data = fs.readFileSync('example.txt');
console.log(data.toString());

console.log("Ohjelma päättyi");
*/

//LUKEE KAHDESTA ERI TIEDOSTOSTA
var fs = require("fs");

//console.log("Ohjelma käynnistyi");
var data = fs.readFileSync('example.txt');
var data2 = fs.readFileSync('example2.txt');
console.log(data.toString() + data2.toString());

console.log("Ohjelma päättyi");