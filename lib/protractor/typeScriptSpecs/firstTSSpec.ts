import {browser,element,by} from 'protractor'

describe('Protractor First Trial for Anuglar apps',async function() {  	

    var countOfSteps=0;
    async function operateActionsonNumbers(num1, num2,operatornumber){

        countOfSteps++;
        await element(by.model('first')).sendKeys(num1).then(function(){
            console.log("[" +countOfSteps+ "] Entered first number.");
        });
        await element(by.model('second')).sendKeys(num2).then(function(){
            console.log("[" +countOfSteps+ "] Entered second number.");
        });

        switch (operatornumber)
        {
            case 1:
                   await element(by.model('operator')).element(by.css("option:nth-child(1)")).click().then(function(){
                        console.log("[" +countOfSteps+ "] Operator Selected as Sum ");
                    });
            break;
            case 2:
                await element(by.model('operator')).element(by.css("option:nth-child(2)")).click().then(function(){
                        console.log("[" +countOfSteps+ "] Operator Selected as Division ");
                    });
            break;
            case 3:
                await element(by.model('operator')).element(by.css("option:nth-child(3)")).click().then(function(){
                            console.log("[" +countOfSteps+ "] Operator Selected as Subtraction ");
                    });
            break;
            case 4:
                await element(by.model('operator')).element(by.css("option:nth-child(4)")).click().then(function(){
                        console.log("[" +countOfSteps+ "] Operator Selected as Multiplication ");
                    });
            break;
        };
        await element(by.id('gobutton')).click().then(function(){
        console.log("[" +countOfSteps+ "] Go button clicked");
        });
    }

    async function operateActionsonName(num1, num2,operatorName){

        countOfSteps++;
        await element(by.model('first')).sendKeys(num1).then(function(){
            console.log("[" +countOfSteps+ "] Entered first number.");
        });
        await element(by.model('second')).sendKeys(num2).then(function(){
            console.log("[" +countOfSteps+ "] Entered second number.");
        });

        await element.all(by.tagName("option")).each(function(item){
            item.getAttribute("value").then(function(opt){
                if(operatorName===opt)
                item.click();
            });
        });
            
        await element(by.id('gobutton')).click().then(function(){
        console.log("[" +countOfSteps+ "] Go button clicked");
        });
    }

	it('Open Angular js website then Super Calculator and Perform Sum',async function() {
		//browser.get("https://angularjs.org");
		await browser.get('http://juliemr.github.io/protractor-demo/').then(function()
				{
			        console.log("[1] Step to execute after URL Launch | Once Promise is resolved. ");
				});
    });
    
    it('Locators by model, id and css', async function(){
        await element(by.model('first')).sendKeys("6").then(async function(){
            browser.sleep(1000);
           await console.log("[2] Entered first number.");
        });
        await element(by.model('second')).sendKeys("20").then(function(){
            browser.sleep(1000);
            console.log("[3] Entered second number.");
        });

        element(by.model('operator')).element(by.css("option:nth-child(4)")).click().then(function(){
            console.log("[4] Operator Selected as Multiplication ");
        });

        element(by.id('gobutton')).click().then(function(){
        console.log("[5] Go button clicked");
        });

        //Jasmine Validation expect 
        expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("120");

        //Using Value for something else in 
        element(by.css("h2[class='ng-binding']")).getText().then(function(text){
            console.log("[5.1] OUTPUT to use value is = " + text);
        });

        //ng-repeat 
        element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
            console.log("[5.2] "+text + " | Text in Table" );
        });
    });

    it('print more rows from table', function(){
        element(by.model('first')).sendKeys("6").then(function(){
            browser.sleep(1000);
            console.log("[6] Entered first number.");
        });
        element(by.model('second')).sendKeys("20").then(function(){
            browser.sleep(1000);
            console.log("[7] Entered second number.");
        });

        element(by.model('operator')).element(by.css("option:nth-child(1)")).click().then(function(){
            console.log("[8] Operator Selected as Multiplication ");
        });

        element(by.id('gobutton')).click().then(function(){
        console.log("[9] Go button clicked");
        });
        //using element.all
        element.all(by.repeater('result in memory')).count().then(function(cnt){
            console.log(cnt + " Count before operator function called" );
        });

        operateActionsonNumbers("3","3",2);
        operateActionsonNumbers("4","4",1);
        operateActionsonName("7","9","ADDITION");
        operateActionsonName("7","9","SUBTRACTION");

        element.all(by.repeater('result in memory')).each(function(item){
            item.element(by.css("td:nth-child(3)")).getText().then(function(text){
                console.log("[10.1] "+text + " | Text in Table" );
            });
        });
    });

    it('dropdown handling', function(){

        element.all(by.tagName("option")).each(function(item){
            item.getAttribute("value").then(function(opt){
                console.log(" Options " + opt);
            });
        });
    });

		//Each it block will be called as a spec
	it('close browswer', function() {
		browser.close();// Last Action on the browser or test code to close browser
	});
});