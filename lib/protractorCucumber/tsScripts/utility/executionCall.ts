import { GetJson } from "./utilities";

export class ExecutionCall{

    obj:GetJson;

    constructor(){
   this.obj = new GetJson();
   }

   async callFunction(){
   let stFile =  await this.obj.readJsonFile('./aData.json');
   //await console.log('Call function Filecontent == ' + JSON.stringify(stFile));
   let jsonObj = JSON.parse(stFile);
    await console.log (" Obj1 Value = " + jsonObj['ob1']);
    await console.log (" Obj2.cob1 Value = " + jsonObj.ob2.cob1);
   //this.obj.readJsonFields( String(stFile));
   //obj.readJsonFile('../bdata.json');
   //obj.readJsonFile('../cdata.json');
   //obj.readJsonFile('../testData/dData.json');
   
   //obj.readFilesinFolder('../testData/');
   }
   }
   
   let newobj = new ExecutionCall();
   newobj.callFunction();