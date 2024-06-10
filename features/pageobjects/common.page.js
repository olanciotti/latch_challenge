const { $ } = require('@wdio/globals')
const Page = require('./page');


class CommonPage extends Page {

    get pageTitle () {
        return $('android=new UiSelector().resourceId("com.hdw.james.rider:id/title")');
    }

    get myProfileBtn () {
        return $('//android.widget.TextView[@resource-id="com.hdw.james.rider:id/profileName"]');
    }

    get menuBtn () {
        return $('//*[@resource-id="com.hdw.james.rider:id/MAIN_MENU_ID"]');
    }

    get snackBarText () {
        return $('//android.widget.TextView[@resource-id="com.hdw.james.rider:id/snackbar_text"]');
    }
    
    async validatePageTitle(title){
        await expect(this.pageTitle).toHaveText(title);
    }

    async validatePageText(text){
        await expect(await $(`android=new UiSelector().text("${text}")`)).toBeDisplayed();
    }

    async clickMenuBtn(){
        await this.menuBtn.click();
    }

    async clickMenuOpt(option){
        await (await $(`android=new UiSelector().text("${option}")`)).click();
    }

    async clickMyProfileBtn () {
        await this.myProfileBtn.click();
    }

    async validateSnackBarText (text) {
        await expect(this.snackBarText).toHaveText(text);
    }

    async validateMyProfileName(firstName, lastName) {
        await expect(this.myProfileBtn).toHaveText(`${firstName} ${lastName}`);
    }
}

module.exports = new CommonPage();