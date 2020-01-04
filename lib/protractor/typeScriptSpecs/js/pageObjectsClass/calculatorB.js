"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class calculatorB {
    constructor() {
        this.firstNumber = protractor_1.element(protractor_1.by.model('first'));
        this.secondNumber = protractor_1.element(protractor_1.by.model('second'));
        this.goButton = protractor_1.element(protractor_1.by.id('gobutton'));
    }
}
exports.calculatorB = calculatorB;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvckIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0c0NsYXNzL2NhbGN1bGF0b3JCLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQW1EO0FBRW5ELE1BQWEsV0FBVztJQU1wQjtRQUVJLElBQUksQ0FBQyxXQUFXLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFlBQVksR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsUUFBUSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBRTdDLENBQUM7Q0FDSjtBQWJELGtDQWFDIn0=