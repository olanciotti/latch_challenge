# latch_challenge

**Test automatiom framework implemented to test James Rider_1.22.0.apk with the following Tools and Libs:**

- JavaScript
- WebdriverIO
- Appium
- Cucumber Reporter


**Steps to run the project**

**Pre-requisites:** 
(Needs to be install)
1. Node JS
2. JDK
3. Android Studio
4. Appium

To begin running the tests:
1. Clone the project latch-challenge.
2. Add the .apk file in Android folder.
3. In wdio.config.js file, update the path in beforeFeature hook, in driver.installApp() command.
4. Execute in the VS code terminal toi nstall dependencies package.json using the following command:: _npm i_.

Done ✅

The project is ready to be run using the following commands:
   -  _npx wdio wdio.conf.js --spec ./features/login.feature_
   -  _npx wdio wdio.conf.js --spec ./features/edit-account.feature_

Also Cucumber Report can be generated after the tests run by executing the following command in the terminal:
- _node index.js_
