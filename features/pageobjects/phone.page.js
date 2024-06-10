const { $ } = require('@wdio/globals')
const Page = require('./page');

class PhonePage extends Page {

    get pageTitle () {
        return $('android=new UiSelector().resourceId("com.hdw.james.rider:id/title")');
    }

    get phoneInput () {
        return $('android=new UiSelector().resourceId("com.hdw.james.rider:id/input")');
    }

    get continueBtn () {
        return $('//android.widget.Button[@resource-id="com.hdw.james.rider:id/continueButton"]');
    }

    async validatePageTitle () {
        await expect(this.pageTitle).toHaveText('Enter your phone number');
    }

    async clickCountryCodeNumber (country) {
        await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text(" ${country} (+93)"))`).click();
    }

    async completePhoneNumber (phoneNumber){
        await this.phoneInput.setValue(phoneNumber);
    }

    async clickContinueBtn(){
        (await this.continueBtn).click();
    }

}

module.exports = new PhonePage();