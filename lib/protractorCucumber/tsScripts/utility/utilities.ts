var fs = require('fs');
var menObject;


// Handle the data 
let handleJSONFile = function (err, data) {
    if (err) {
        throw err;
    }
    menObject = JSON.parse(data);
}

// Read the file, and pass it to your callback
fs.readFile('../testData/firstData.json', handleJSONFile);
