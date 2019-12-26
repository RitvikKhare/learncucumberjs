
class LearnProtractor {

    async holdNextAction(num)
    {
        browser.sleep(num*1000);
    }

    async launchBrowser(){
         browser.waitForAngularEnabled(false);
       // await browser.get('https://angularjs.org/');
         browser.get('http://juliemr.github.io/protractor-demo/');
         console.log("------------------------------------ Browser launched");
    }

    async checkTitle()
    {
        var titlename= await browser.getTitle();
        console.log("------------------------------------ " + titlename);
        return titlename;
    }

    async enterFirstnum(num)
    {
        //element(by.model('first')).sendKeys(num).then(this.holdNextAction(5));
        //element(by.model('first')).sendKeys(num).then(function(){
          //  browser.sleep(5000);
        //});
        console.log("-----Entering Number first ") ;
        browser.sleep(5000);
        element(by.xpath("//input[@ng-model='first']")).sendKeys(num).then(function(){
            console.log("-----Number entered first") ;
        });
    }

    async enterSecondnum(num)
    {
        //element(by.model('second')).sendKeys(num).then(function(){
        //    browser.sleep(3000);
        //});
        console.log("-----Entering Number") ;
        element(by.xpath("//input[@ng-model='second']")).sendKeys(num).then(function(){
            browser.sleep(3000);
            console.log("-----Number entered") ;
        });
    }

    async clickGo()
    {
        element(by.id('gobutton')).click();
    }

    async readOutput()
    {
     element(by.css("h2[class='ng-binding']")).getText().then(function(text){
         console.log("---------------------OUT PUT is " + text);
     });
    }

}

module.exports = LearnProtractor;