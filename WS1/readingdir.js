var fs = require("fs");

fs.readdir(__dirname, (err, files) => {
    if (err) 
        console.log(err);
    else {
        console.log("\Current directory filenames: ");
        files.forEach(file => {
            console.log(file);
        })
    }
    console.log("Täsä nää ny o");
});