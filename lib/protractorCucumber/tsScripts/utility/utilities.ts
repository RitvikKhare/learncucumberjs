const fs = require('fs');

export class GetJson {

// Read the file, and pass it to your callback
 async readJsonFile (filePath:string):Promise<any>{
      await console.log('filepath ' + filePath);
      let fileContent:string = await fs.readFileSync(filePath);
      let jsonContent = await JSON.parse(fileContent);
      await console.log('file content = ' + jsonContent);
      return fileContent;
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

async readJsonFields(fileContent:string)
{
    let jsonContent = JSON.parse(fileContent);
    await console.log('JSON Content ob1 =' + jsonContent['ob1']);
}

}
