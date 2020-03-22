const fs = require('fs');

export class GetJson {

// Read the file, and pass it to your callback
 async readJsonFile (filePath:string){
     await fs.readFile(filePath, async (err, data) => {
      if (err) throw err;
      let jsonContent = await JSON.parse(data);
      await console.log("filePath " + filePath + " | content");
      await console.log(jsonContent);
  });
}

async getCoverageValues(jsonConent,keyName)
{
 
}

async readFilesinFolder(folderPath:string)
{
   await fs.readdir(folderPath, async (err, files) => {
      if (err) throw err;
      files.forEach(async file => {
        console.log(file + ' | file Name');
        await this.readJsonFile(folderPath+file);

      });
    });
}

}

let obj = new GetJson();
obj.readJsonFile('./utility/adata.json');
obj.readJsonFile('./bdata.json');
obj.readJsonFile('../cdata.json');
obj.readJsonFile('../testData/dData.json');

obj.readFilesinFolder('../testData/');