"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("./utilities");
class ExecutionCall {
    constructor() {
        this.obj = new utilities_1.GetJson();
    }
    callFunction() {
        return __awaiter(this, void 0, void 0, function* () {
            let stFile = yield this.obj.readJsonFile('./aData.json');
            //await console.log('Call function Filecontent == ' + JSON.stringify(stFile));
            let jsonObj = JSON.parse(stFile);
            yield console.log(" Obj1 Value = " + jsonObj['ob1']);
            yield console.log(" Obj2.cob1 Value = " + jsonObj.ob2.cob1);
            //this.obj.readJsonFields( String(stFile));
            //obj.readJsonFile('../bdata.json');
            //obj.readJsonFile('../cdata.json');
            //obj.readJsonFile('../testData/dData.json');
            //obj.readFilesinFolder('../testData/');
        });
    }
}
exports.ExecutionCall = ExecutionCall;
let newobj = new ExecutionCall();
newobj.callFunction();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlY3V0aW9uQ2FsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3V0aWxpdHkvZXhlY3V0aW9uQ2FsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFzQztBQUV0QyxNQUFhLGFBQWE7SUFJdEI7UUFDRCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksbUJBQU8sRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFSyxZQUFZOztZQUNsQixJQUFJLE1BQU0sR0FBSSxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzFELDhFQUE4RTtZQUM5RSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBRSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0RCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUUscUJBQXFCLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5RCwyQ0FBMkM7WUFDM0Msb0NBQW9DO1lBQ3BDLG9DQUFvQztZQUNwQyw2Q0FBNkM7WUFFN0Msd0NBQXdDO1FBQ3hDLENBQUM7S0FBQTtDQUNBO0FBckJKLHNDQXFCSTtBQUVELElBQUksTUFBTSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7QUFDakMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDIn0=