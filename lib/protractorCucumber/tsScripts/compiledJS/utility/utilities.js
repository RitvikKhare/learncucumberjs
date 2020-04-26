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
            yield console.log('filepath ' + filePath);
            let fileContent = yield fs.readFileSync(filePath);
            let jsonContent = yield JSON.parse(fileContent);
            yield console.log('file content = ' + jsonContent);
            return fileContent;
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
    readJsonFields(fileContent) {
        return __awaiter(this, void 0, void 0, function* () {
            let jsonContent = JSON.parse(fileContent);
            yield console.log('JSON Content ob1 =' + jsonContent['ob1']);
        });
    }
}
exports.GetJson = GetJson;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0aWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdXRpbGl0eS91dGlsaXRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFekIsTUFBYSxPQUFPO0lBRXBCLDhDQUE4QztJQUN2QyxZQUFZLENBQUUsUUFBZTs7WUFDOUIsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsQ0FBQztZQUMxQyxJQUFJLFdBQVcsR0FBVSxNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekQsSUFBSSxXQUFXLEdBQUcsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2hELE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxXQUFXLENBQUMsQ0FBQztZQUNuRCxPQUFPLFdBQVcsQ0FBQztRQUN6QixDQUFDO0tBQUE7SUFFSyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUMsT0FBTzs7UUFHMUMsQ0FBQztLQUFBO0lBRUssaUJBQWlCLENBQUMsVUFBaUI7O1lBRXRDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBTyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQy9DLElBQUksR0FBRztvQkFBRSxNQUFNLEdBQUcsQ0FBQztnQkFDbkIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFNLElBQUksRUFBQyxFQUFFO29CQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxjQUFjLENBQUMsQ0FBQztvQkFDbkMsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsR0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFM0MsQ0FBQyxDQUFBLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQSxDQUFDLENBQUM7UUFDUCxDQUFDO0tBQUE7SUFFSyxjQUFjLENBQUMsV0FBa0I7O1lBRW5DLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDMUMsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLENBQUM7S0FBQTtDQUVBO0FBbENELDBCQWtDQyJ9