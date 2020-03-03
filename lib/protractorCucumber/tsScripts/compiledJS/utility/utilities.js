var fs = require('fs');
var menObject;
// Handle the data 
let handleJSONFile = function (err, data) {
    if (err) {
        throw err;
    }
    menObject = JSON.parse(data);
};
// Read the file, and pass it to your callback
fs.readFile('../testData/firstData.json', handleJSONFile);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0aWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdXRpbGl0eS91dGlsaXRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLElBQUksU0FBUyxDQUFDO0FBR2QsbUJBQW1CO0FBQ25CLElBQUksY0FBYyxHQUFHLFVBQVUsR0FBRyxFQUFFLElBQUk7SUFDcEMsSUFBSSxHQUFHLEVBQUU7UUFDTCxNQUFNLEdBQUcsQ0FBQztLQUNiO0lBQ0QsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakMsQ0FBQyxDQUFBO0FBRUQsOENBQThDO0FBQzlDLEVBQUUsQ0FBQyxRQUFRLENBQUMsNEJBQTRCLEVBQUUsY0FBYyxDQUFDLENBQUMifQ==