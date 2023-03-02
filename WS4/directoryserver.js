var express = require('express');
var app = express();
app.use(express.static('public/demosite/'));

app.get('/', function(req, res) {
    res.send('Party time excellent');
});
app.get('/list', function (req, res) {
    res.send('Jumatsuikula mikä lista');
});

app.get('/add', function (req, res) {
    res.send('Adding content to your life');
});
//404 Route
app.get('*', function(req, res) {
    res.send('Kaikki meni eikä mitään löydy', 404);
});

app.listen(8080, function() {
    console.log ('KGB was here');
});
