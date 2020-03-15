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
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.Given('Super Calculator Website is opened browser', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/').then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield console.log("[1] Step to execute after URL Launch | Once Promise is resolved. ");
            });
        });
    });
});
cucumber_1.When('Title is Super Calculator', function () {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        //return 'pending';
    });
});
cucumber_1.When('Enter number 6 in First Box', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.model('first')).sendKeys("6").then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                protractor_1.browser.sleep(1000);
                yield console.log("[2] Entered first number.");
            });
        });
    });
});
cucumber_1.When('Select plus operator from dropdown', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.model('operator')).element(protractor_1.by.css("option:nth-child(4)")).click().then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                console.log("[4] Operator Selected as Multiplication ");
            });
        });
    });
});
cucumber_1.When('Enter number 20 in Second Box', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.model('second')).sendKeys("20").then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.sleep(1000);
                console.log("[3] Entered second number.");
            });
        });
    });
});
cucumber_1.When('Click Go button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.id('gobutton')).click().then(function () {
            console.log("[5] Go button clicked");
        });
    });
});
cucumber_1.Then('Answer Displayed is 26', function () {
    return __awaiter(this, void 0, void 0, function* () {
        return 'pending';
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyc3RQcm90cmFjdG9yLXN0ZXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcHMtZGVmaW5pdGlvbi9maXJzdFByb3RyYWN0b3Itc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBd0M7QUFDeEMsMkNBQTZDO0FBRTNDLGdCQUFLLENBQUMsNENBQTRDLEVBQUU7O1FBQ2xELE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQyxJQUFJLENBQUM7O2dCQUUvRCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUVBQW1FLENBQUMsQ0FBQztZQUM1RixDQUFDO1NBQUEsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQywyQkFBMkIsRUFBRTs7UUFDaEMsb0VBQW9FO1FBQ3BFLG1CQUFtQjtJQUNyQixDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDZCQUE2QixFQUFFOztRQUNsQyxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7O2dCQUNsRCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDckIsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7WUFDakQsQ0FBQztTQUFBLENBQUMsQ0FBQztJQUVKLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsb0NBQW9DLEVBQUU7O1FBQ3pDLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQzs7Z0JBQ3BGLE9BQU8sQ0FBQyxHQUFHLENBQUMsMENBQTBDLENBQUMsQ0FBQztZQUM1RCxDQUFDO1NBQUEsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQywrQkFBK0IsRUFBRTs7UUFDcEMsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDOztnQkFDcEQsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1lBQzlDLENBQUM7U0FBQSxDQUFDLENBQUM7SUFDSCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLGlCQUFpQixFQUFFOztRQUN0QixNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQztZQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHdCQUF3QixFQUFFOztRQUMzQixPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0NBQUEsQ0FBQyxDQUFDIn0=