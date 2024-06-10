const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const homePage = require('../pageobjects/home.page');
const landPage = require('../pageobjects/land.page');
const phonePage = require('../pageobjects/phone.page');
const phoneCodePage = require('../pageobjects/phone-code.page');
const commonPage = require('../pageobjects/common.page');
const profilePage = require('../pageobjects/profile.page');

Given(/^I am on the Home page and click Get Started button$/, async () => {
    await landPage.clickBtnGetStarted(); 
 });

When(/^I select "([^"]*)?" as country and "([^"]*)?" as phone number$/, async (country, phoneNumber)  => {
  
    await phonePage.validatePageTitle();

    switch (country) {
        case 'Afghanistan':
            await phonePage.clickCountryCodeNumber(country);
            break;
        default:
            console.log(`Sorry, cannot find ${country}.`);
    }

    await phonePage.completePhoneNumber(phoneNumber);
    
    await phonePage.clickContinueBtn();
})

When(/^I enter the six digits code and click Continue button$/, async ()  => {
    
    await phoneCodePage.validatePageTitle();

    await phoneCodePage.completePhoneCode();

    await phoneCodePage.clickContinueBtn();
    
})

Then(/^I see the error message with the text "([^"]*)?"$/, async (text)  => {
     expect(await $('//*[@resource-id="com.hdw.james.rider:id/snackbar_text"]')).toHaveText(text);
});

Then(/^I see the title Welcome "([^"]*)?"!$/, async (name) => {
  
    await homePage.validatePageTitle(name);
     
 })

Given(/^I select the option "([^"]*)?" from the main menu$/, async (option)  => {

    await commonPage.clickMenuBtn();
    await commonPage.clickMenuOpt(option);

});

Then (/^I see the title "([^"]*)?"$/, async (title)  => {
    await commonPage.validatePageTitle(title);
})


Then (/^I see the text "([^"]*)?"$/, async (text)  => {
    await commonPage.validatePageText(text);
})


Then (/^I click to see my profile$/, async ()  => {
    await commonPage.clickMenuBtn();
    await commonPage.clickMyProfileBtn();
})

Then (/^I fill "([^"]*)?" as first name and "([^"]*)?" as last name$/, async (firstName, lastName)  => {
    await profilePage.setFirstName(firstName);
    await profilePage.setLastName(lastName);
    await profilePage.clickDoneBtn(); 
})

Then (/^I validate that my profile name is "([^"]*)?" "([^"]*)?"$/, async (firstName, lastName)  => {
    await commonPage.validateSnackBarText("Profile updated successfully");
    await commonPage.validateMyProfileName(firstName, lastName);
})
