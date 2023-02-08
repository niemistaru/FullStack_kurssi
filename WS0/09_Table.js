const { table } = require("console");
var http = require("http");
http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});

    response.write("<h1>Nyt tulee muuten todella upee taulukko</h1>");

    var data =
    "<table border='2'><tr><td>Name</td><td>Address</td><td>City</td></tr><tr><td><a href='http://www.yle.fi'></a>Din Djarin</td><td>Dank Farrik 3</td><td>Mandalorian</td></tr><tr><td>Javi Gutierrez</td><td>Paddington Avenue 2</td><td>Mallorca</td></tr></table>";
    //En saanu tuota linkkiä vielä toimimaan 8.2.2023
    response.write(data);

    response.end("<br>Das war alles.");
})
.listen(8081);
console.log("Kuuntelen Frederikiä ja myös porttia 8081");