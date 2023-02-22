var http = require("http");

http.createServer(function (request, response) {
    response.writeHead(200, { "Content-type": "text/HTML" });
    /*
    if (request.url === "/helloworld") {} */
        response.write("Hello world");
        response.end();
})
.listen(8081);

console.log("Tättärää");