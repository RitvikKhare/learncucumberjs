
class LearnProtractor {

    launchBrowser(){
        browser.get('http://juliemr.github.io/protractor-demo/');

        expect(browser.getTitle()).toEqual('Super Calculator');
    }

}

module.exports = LearnProtractor;