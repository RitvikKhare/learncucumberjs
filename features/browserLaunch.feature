Feature: Test Protractor BrowserLaunch

   Feature Description: Trying to launch Browser
   @ProtractorTest
   Scenario: Launch Chrome Browser with Protractor Website
   Given Launch Chrome Browser
   When Super Calculator Website is opened browser
   Then Title is Super Calculator
   
   @ProtractorTest
   Scenario: Perform Sum of Numbers with Calculator
   Given Launch Chrome Browser
   When Super Calculator Website is opened browser
   Then Title is Super Calculator
   Then Enter number 6 in First Box
   Then Select plus operator from dropdown
   Then Enter number 20 in Second Box
   Then Click Go button