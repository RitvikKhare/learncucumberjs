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
describe('Protractor First Trial for Anuglar apps', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var countOfSteps = 0;
        function operateActionsonNumbers(num1, num2, operatornumber) {
            return __awaiter(this, void 0, void 0, function* () {
                countOfSteps++;
                yield protractor_1.element(protractor_1.by.model('first')).sendKeys(num1).then(function () {
                    console.log("[" + countOfSteps + "] Entered first number.");
                });
                yield protractor_1.element(protractor_1.by.model('second')).sendKeys(num2).then(function () {
                    console.log("[" + countOfSteps + "] Entered second number.");
                });
                switch (operatornumber) {
                    case 1:
                        yield protractor_1.element(protractor_1.by.model('operator')).element(protractor_1.by.css("option:nth-child(1)")).click().then(function () {
                            console.log("[" + countOfSteps + "] Operator Selected as Sum ");
                        });
                        break;
                    case 2:
                        yield protractor_1.element(protractor_1.by.model('operator')).element(protractor_1.by.css("option:nth-child(2)")).click().then(function () {
                            console.log("[" + countOfSteps + "] Operator Selected as Division ");
                        });
                        break;
                    case 3:
                        yield protractor_1.element(protractor_1.by.model('operator')).element(protractor_1.by.css("option:nth-child(3)")).click().then(function () {
                            console.log("[" + countOfSteps + "] Operator Selected as Subtraction ");
                        });
                        break;
                    case 4:
                        yield protractor_1.element(protractor_1.by.model('operator')).element(protractor_1.by.css("option:nth-child(4)")).click().then(function () {
                            console.log("[" + countOfSteps + "] Operator Selected as Multiplication ");
                        });
                        break;
                }
                ;
                yield protractor_1.element(protractor_1.by.id('gobutton')).click().then(function () {
                    console.log("[" + countOfSteps + "] Go button clicked");
                });
            });
        }
        function operateActionsonName(num1, num2, operatorName) {
            return __awaiter(this, void 0, void 0, function* () {
                countOfSteps++;
                yield protractor_1.element(protractor_1.by.model('first')).sendKeys(num1).then(function () {
                    console.log("[" + countOfSteps + "] Entered first number.");
                });
                yield protractor_1.element(protractor_1.by.model('second')).sendKeys(num2).then(function () {
                    console.log("[" + countOfSteps + "] Entered second number.");
                });
                yield protractor_1.element.all(protractor_1.by.tagName("option")).each(function (item) {
                    item.getAttribute("value").then(function (opt) {
                        if (operatorName === opt)
                            item.click();
                    });
                });
                yield protractor_1.element(protractor_1.by.id('gobutton')).click().then(function () {
                    console.log("[" + countOfSteps + "] Go button clicked");
                });
            });
        }
        it('Open Angular js website then Super Calculator and Perform Sum', function () {
            return __awaiter(this, void 0, void 0, function* () {
                //browser.get("https://angularjs.org");
                yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/').then(function () {
                    console.log("[1] Step to execute after URL Launch | Once Promise is resolved. ");
                });
            });
        });
        it('Locators by model, id and css', function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.element(protractor_1.by.model('first')).sendKeys("6").then(function () {
                    return __awaiter(this, void 0, void 0, function* () {
                        protractor_1.browser.sleep(1000);
                        yield console.log("[2] Entered first number.");
                    });
                });
                yield protractor_1.element(protractor_1.by.model('second')).sendKeys("20").then(function () {
                    protractor_1.browser.sleep(1000);
                    console.log("[3] Entered second number.");
                });
                protractor_1.element(protractor_1.by.model('operator')).element(protractor_1.by.css("option:nth-child(4)")).click().then(function () {
                    console.log("[4] Operator Selected as Multiplication ");
                });
                protractor_1.element(protractor_1.by.id('gobutton')).click().then(function () {
                    console.log("[5] Go button clicked");
                });
                //Jasmine Validation expect 
                expect(protractor_1.element(protractor_1.by.css("h2[class='ng-binding']")).getText()).toBe("120");
                //Using Value for something else in 
                protractor_1.element(protractor_1.by.css("h2[class='ng-binding']")).getText().then(function (text) {
                    console.log("[5.1] OUTPUT to use value is = " + text);
                });
                //ng-repeat 
                protractor_1.element(protractor_1.by.repeater("result in memory")).element(protractor_1.by.css("td:nth-child(3)")).getText().then(function (text) {
                    console.log("[5.2] " + text + " | Text in Table");
                });
            });
        });
        it('print more rows from table', function () {
            protractor_1.element(protractor_1.by.model('first')).sendKeys("6").then(function () {
                protractor_1.browser.sleep(1000);
                console.log("[6] Entered first number.");
            });
            protractor_1.element(protractor_1.by.model('second')).sendKeys("20").then(function () {
                protractor_1.browser.sleep(1000);
                console.log("[7] Entered second number.");
            });
            protractor_1.element(protractor_1.by.model('operator')).element(protractor_1.by.css("option:nth-child(1)")).click().then(function () {
                console.log("[8] Operator Selected as Multiplication ");
            });
            protractor_1.element(protractor_1.by.id('gobutton')).click().then(function () {
                console.log("[9] Go button clicked");
            });
            //using element.all
            protractor_1.element.all(protractor_1.by.repeater('result in memory')).count().then(function (cnt) {
                console.log(cnt + " Count before operator function called");
            });
            operateActionsonNumbers("3", "3", 2);
            operateActionsonNumbers("4", "4", 1);
            operateActionsonName("7", "9", "ADDITION");
            operateActionsonName("7", "9", "SUBTRACTION");
            protractor_1.element.all(protractor_1.by.repeater('result in memory')).each(function (item) {
                item.element(protractor_1.by.css("td:nth-child(3)")).getText().then(function (text) {
                    console.log("[10.1] " + text + " | Text in Table");
                });
            });
        });
        it('dropdown handling', function () {
            protractor_1.element.all(protractor_1.by.tagName("option")).each(function (item) {
                item.getAttribute("value").then(function (opt) {
                    console.log(" Options " + opt);
                });
            });
        });
        //Each it block will be called as a spec
        it('close browswer', function () {
            protractor_1.browser.close(); // Last Action on the browser or test code to close browser
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyc3RUU1NwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9maXJzdFRTU3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUE2QztBQUU3QyxRQUFRLENBQUMseUNBQXlDLEVBQUM7O1FBRS9DLElBQUksWUFBWSxHQUFDLENBQUMsQ0FBQztRQUNuQixTQUFlLHVCQUF1QixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsY0FBYzs7Z0JBRTVELFlBQVksRUFBRSxDQUFDO2dCQUNmLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUUsWUFBWSxHQUFFLHlCQUF5QixDQUFDLENBQUM7Z0JBQzlELENBQUMsQ0FBQyxDQUFDO2dCQUNILE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUUsWUFBWSxHQUFFLDBCQUEwQixDQUFDLENBQUM7Z0JBQy9ELENBQUMsQ0FBQyxDQUFDO2dCQUVILFFBQVEsY0FBYyxFQUN0QjtvQkFDSSxLQUFLLENBQUM7d0JBQ0MsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDOzRCQUNuRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRSxZQUFZLEdBQUUsNkJBQTZCLENBQUMsQ0FBQzt3QkFDbEUsQ0FBQyxDQUFDLENBQUM7d0JBQ1gsTUFB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