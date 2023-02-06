var http = require("http");
http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});

    response.write("<h1>Nyt tulee muuten aivan mieletön taulukko</h1>");
    /*Tähän syötä se taulukko sit:
    var data =
*/
    response.write(data);

    response.end("Ja tähän päättyy kiinnostukseni maailmaa kohtaan");
})
.listen(3000);
console.log("Kuuntelen Frederikiä ja myös porttia 3000");