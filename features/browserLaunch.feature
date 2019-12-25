Feature: Test Protractor BrowserLaunch

   Feature Description: Trying to launch Browser
   @ProtractorTest
   Scenario: Launch Chrome Browser with Protractor
   Given Launch Chrome Browser
   When Google Website is opened browser
   Then Title is Google
   