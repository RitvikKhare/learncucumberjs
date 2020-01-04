import {browser} from 'protractor'
import { async } from 'q';
import {calculatorB} from './pageObjectsClass/calculatorB'

describe('POM based implementation',async function(){

    it('Open Calculator Using Page Object',async function(){
        let calobj = new calculatorB();
        await browser.get("");
        await calobj.firstNumber.sendKeys("12");

    });

    it('Open Angular Using Page Object',async function(){
        
    });
});