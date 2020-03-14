Feature: Test Protractor BrowserLaunch

   Feature Description: Trying to launch Browser

   @ProtractorTest
   Scenario: Perform Sum of Numbers with Calculator
   Given Super Calculator Website is opened browser
   #When Title is Super Calculator
   When Enter number 6 in First Box
   When Select plus operator from dropdown
   When Enter number 20 in Second Box
   When Click Go button
   #Then Answer Displayed is 26
