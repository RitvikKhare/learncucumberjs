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
const fs = require('fs');
class GetJson {
    // Read the file, and pass it to your callback
    readJsonFile(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            yield fs.readFile(filePath, (err, data) => __awaiter(this, void 0, void 0, function* () {
                if (err)
                    throw err;
                let jsonContent = yield JSON.parse(data);
                yield console.log("filePath " + filePath + " | content");
                yield console.log(jsonContent);
            }));
        });
    }
    getCoverageValues(jsonConent, keyName) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    readFilesinFolder(folderPath) {
        return __awaiter(this, void 0, void 0, function* () {
            yield fs.readdir(folderPath, (err, files) => __awaiter(this, void 0, void 0, function* () {
                if (err)
                    throw err;
                files.forEach((file) => __awaiter(this, void 0, void 0, function* () {
                    console.log(file + ' | file Name');
                    yield this.readJsonFile(folderPath + file);
                }));
            }));
        });
    }
}
exports.GetJson = GetJson;
let obj = new GetJson();
obj.readJsonFile('./utility/adata.json');
obj.readJsonFile('./bdata.json');
obj.readJsonFile('../cdata.json');
obj.readJsonFile('../testData/dData.json');
obj.readFilesinFolder('../testData/');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0aWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdXRpbGl0eS91dGlsaXRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFekIsTUFBYSxPQUFPO0lBRXBCLDhDQUE4QztJQUN2QyxZQUFZLENBQUUsUUFBZTs7WUFDL0IsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFPLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtnQkFDL0MsSUFBSSxHQUFHO29CQUFFLE1BQU0sR0FBRyxDQUFDO2dCQUNuQixJQUFJLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pDLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsUUFBUSxHQUFHLFlBQVksQ0FBQyxDQUFDO2dCQUN6RCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFBLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtJQUVLLGlCQUFpQixDQUFDLFVBQVUsRUFBQyxPQUFPOztRQUcxQyxDQUFDO0tBQUE7SUFFSyxpQkFBaUIsQ0FBQyxVQUFpQjs7WUFFdEMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFPLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDL0MsSUFBSSxHQUFHO29CQUFFLE1BQU0sR0FBRyxDQUFDO2dCQUNuQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQU0sSUFBSSxFQUFDLEVBQUU7b0JBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQyxDQUFDO29CQUNuQyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxHQUFDLElBQUksQ0FBQyxDQUFDO2dCQUUzQyxDQUFDLENBQUEsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFBLENBQUMsQ0FBQztRQUNQLENBQUM7S0FBQTtDQUVBO0FBN0JELDBCQTZCQztBQUVELElBQUksR0FBRyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7QUFDeEIsR0FBRyxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQ3pDLEdBQUcsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDakMsR0FBRyxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUNsQyxHQUFHLENBQUMsWUFBWSxDQUFDLHdCQUF3QixDQUFDLENBQUM7QUFFM0MsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDIn0=