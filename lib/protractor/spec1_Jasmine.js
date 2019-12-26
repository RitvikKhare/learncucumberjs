describe('Protractor baby steps',function() {  	
	it('Open Angular js website',function() {
		browser.get("https://angularjs.org");
		browser.get('http://juliemr.github.io/protractor-demo/').then(function()
				{
			        console.log("I am the last step to execute");
				});
    });
    
    it('Locators', function(){
        element(by.model('first')).sendKeys("6").then(function(){
            browser.sleep(5000);
        });
        element(by.model('second')).sendKeys("20").then(function(){
            browser.sleep(5000);
        });
        element(by.id('gobutton')).click();
        element(by.css("h2[class='ng-binding']")).getText().then(function(text){
            console.log("---------------------OUT PUT is " + text);
        });
    });
		//browser.get() will hit url on the browser
		// write your raw protractor code
		
		//Each it block will be called as a spec
	it('close browswer', function() {
		// code to close browser
	});
});
//first parameter- Test suite name
	//Second parameter - function (function wil have all tests (it blocks)

//first parameter- Test case  name




