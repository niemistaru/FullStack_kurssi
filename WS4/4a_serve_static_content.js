var express = require('express');
var fs = require('fs');
var app = express();
const port = 3004;

// Serve static files from the "public" directory
app.use(express.static("./public"));

app.get('/details', function (req, res) {

    var data = require(__dirname + '/data/exampledata2.json');
    //HUOM. TARU sulla ei oo tätä data-tiedostoa ny ollenkaan
    console.log(__dirname);
    //Alla oleva on periaatteessa turha, riittäis että palauttais ton muuttujan data
    var results = data;
    /*     var results = '<table border="1"> ';
    
        for (var i = 0; i < data.length; i++) {
            results +=
                '<tr>' +
                '<td>' + data[i].Name + '</td>' +
                '<td>' + data[i].Email + '</td>' +
                '</tr>';
        }
     */
    res.send(results);
});

app.listen(port, function () {
    console.log('Example app listening on port: ' + port);
});