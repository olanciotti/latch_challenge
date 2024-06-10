const { $ } = require('@wdio/globals')
const Page = require('./page');

class PhoneCodePage extends Page {

    get pageTitle () {
        return $('android=new UiSelector().resourceId("com.hdw.james.rider:id/title")');
    }

    get continueBtn () {
        return $('//*[@resource-id="com.hdw.james.rider:id/continueButton"]');
    }

    async completePhoneCode () {
        await ($('(//*[@resource-id="com.hdw.james.rider:id/inputEditText"])[1]')).setValue('1');
        await ($('(//*[@resource-id="com.hdw.james.rider:id/inputEditText"])[2]')).setValue('2');
        await ($('(//*[@resource-id="com.hdw.james.rider:id/inputEditText"])[3]')).setValue('3');
        await ($('(//*[@resource-id="com.hdw.james.rider:id/inputEditText"])[4]')).setValue('4');
        await ($('(//*[@resource-id="com.hdw.james.rider:id/inputEditText"])[5]')).setValue('5');
        await ($('(//*[@resource-id="com.hdw.james.rider:id/inputEditText"])[6]')).setValue('6');
    }

    async validatePageTitle () {
        await expect(this.pageTitle).toHaveText('Enter the 6 digit code');
    }

    async clickContinueBtn(){
        await this.continueBtn.click();
    }
}

module.exports = new PhoneCodePage();