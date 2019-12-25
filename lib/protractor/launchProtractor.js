
class LearnProtractor {

    async launchBrowser(){
        await browser.waitForAngularEnabled(false);
        await browser.get('https://angularjs.org/');
        //browser.get('http://juliemr.github.io/protractor-demo/');
        await console.log("------------------------------------ Browser launched");
    }

    async checkTitle()
    {
        var titlename= await browser.getTitle();
        await console.log("------------------------------------ " + titlename);
        return titlename;
    }
}

module.exports = LearnProtractor;