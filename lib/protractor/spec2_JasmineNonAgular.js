describe('Protractor for non angular Apps',function(){
    it('launch browser with google url', function(){
        browser.waitForAngularEnabled(false);
        browser.get("https://www.google.co.in");
    });

});