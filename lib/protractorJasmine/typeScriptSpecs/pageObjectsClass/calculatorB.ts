import {ElementFinder,element,by} from 'protractor'

export class calculatorB
{
    firstNumber:ElementFinder;
    secondNumber:ElementFinder;
    goButton:ElementFinder;

    constructor()
    {
        this.firstNumber=element(by.model('first'));
        this.secondNumber=element(by.model('second'));
        this.goButton=element(by.id('gobutton'));

    }
}