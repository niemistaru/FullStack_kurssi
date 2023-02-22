var fs = require("fs");


var data = fs.readFileSync('example.txt');
var data2 = fs.readFileSync('example2.txt');
var combination = data + data2;

fs.writeFile("message.txt", combination, (err) => {
    if (err) throw err;
    console.log("Tiedosto on tallennettu.");
});

fs.writeFile("message.txt", data2 + ["Minä olen karambola"], (err) => {
    if (err) throw err;
    console.log("Tämäkin tiedosto on tallennettu.");
});

fs.appendFile("message.txt", " Who ya gonna call?", (err) => {
    if (err) throw err;
    console.log("Lisättiin I wrote this");
});

/*
console.log(data.toString() + data2.toString());

console.log("Ohjelma päättyi")*/