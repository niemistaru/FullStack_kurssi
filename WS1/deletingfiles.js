var fs = require("fs");


fs.unlink('message.txt', (err) => {
    if (err) throw err;
    console.log('Nyt se upee tiedosto poistettiin');
});