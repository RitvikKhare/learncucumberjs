

describe('Try Actions and Windows Handles',function(){
    it('1. Actions KeyBoad Keys Mouse Move', function(){
        browser.waitForAngularEnabled(false);
        browser.get("https://www.w3schools.com/howto/howto_js_autocomplete.asp");

        
        browser.actions().mouseMove(element(by.id('myInput')).sendKeys("In")).perform();

        browser.actions().mouseMove(element(by.id('myInput')).sendKeys(protractor.Key.ARROW_DOWN)).perform().then(function(){
            browser.sleep(1000);
        });
        browser.actions().mouseMove(element(by.id('myInput')).sendKeys(protractor.Key.ENTER)).perform().then(function(){
            browser.sleep(1000);
        });

    });

    it('2. Multiple Window Handles',function(){
        
        browser.get("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_target");
        
        browser.switchTo().frame('iframeResult');

        element(by.css("a[href='https://www.w3schools.com']")).click().then(function(){
                browser.sleep(1000);
            });
        
            //browser.driver.manage().window().maximize();
            //browser.switchTo().frame("courses-iframe");
        });

});