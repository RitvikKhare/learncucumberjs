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
const protractor_1 = require("protractor");
const calculatorB_1 = require("./pageObjectsClass/calculatorB");
describe('POM based implementation', function () {
    return __awaiter(this, void 0, void 0, function* () {
        it('Open Calculator Using Page Object', function () {
            return __awaiter(this, void 0, void 0, function* () {
                let calobj = new calculatorB_1.calculatorB();
                yield protractor_1.browser.get("");
                yield calobj.firstNumber.sendKeys("12");
            });
        });
        it('Open Angular Using Page Object', function () {
            return __awaiter(this, void 0, void 0, function* () {
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vjb25kVFNTcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc2Vjb25kVFNTcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQWtDO0FBRWxDLGdFQUEwRDtBQUUxRCxRQUFRLENBQUMsMEJBQTBCLEVBQUM7O1FBRWhDLEVBQUUsQ0FBQyxtQ0FBbUMsRUFBQzs7Z0JBQ25DLElBQUksTUFBTSxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO2dCQUMvQixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN0QixNQUFNLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTVDLENBQUM7U0FBQSxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsZ0NBQWdDLEVBQUM7O1lBRXBDLENBQUM7U0FBQSxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQUEsQ0FBQyxDQUFDIn0=