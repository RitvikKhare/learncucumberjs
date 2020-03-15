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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyc3RQcm90cmFjdG9yLnN0ZXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcHNEZWZpbml0aW9uL2ZpcnN0UHJvdHJhY3Rvci5zdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUF3QztBQUN4QywyQ0FBNkM7QUFFM0MsZ0JBQUssQ0FBQyw0Q0FBNEMsRUFBRTs7UUFDbEQsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDLElBQUksQ0FBQzs7Z0JBRS9ELE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxtRUFBbUUsQ0FBQyxDQUFDO1lBQzVGLENBQUM7U0FBQSxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDJCQUEyQixFQUFFOztRQUNoQyxvRUFBb0U7UUFDcEUsbUJBQW1CO0lBQ3JCLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsNkJBQTZCLEVBQUU7O1FBQ2xDLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQzs7Z0JBQ2xELG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNyQixNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztZQUNqRCxDQUFDO1NBQUEsQ0FBQyxDQUFDO0lBRUosQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxvQ0FBb0MsRUFBRTs7UUFDekMsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDOztnQkFDcEYsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO1lBQzVELENBQUM7U0FBQSxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLCtCQUErQixFQUFFOztRQUNwQyxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7O2dCQUNwRCxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDOUMsQ0FBQztTQUFBLENBQUMsQ0FBQztJQUNILENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsaUJBQWlCLEVBQUU7O1FBQ3RCLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsd0JBQXdCLEVBQUU7O1FBQzNCLE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7Q0FBQSxDQUFDLENBQUMifQ==