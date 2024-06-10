const { $ } = require('@wdio/globals')
const Page = require('./page');

class ProfilePage extends Page {

    get firsNameInput () {
        return $('//android.widget.EditText[@resource-id="com.hdw.james.rider:id/firstNameInput"]');
    }

    get lastNameInput () {
        return $('//android.widget.EditText[@resource-id="com.hdw.james.rider:id/lastNameInput"]');
    }

    get doneBtn () {
        return $('android=new UiSelector().resourceId("com.hdw.james.rider:id/DEFAULT_TEXT_ACTION_MENU_ID")');
    }

    async setFirstName(name){
        await (this.firsNameInput).addValue(name);
    }

    async setLastName(lastName){
        await (this.lastNameInput).setValue(lastName);
    }

    async clickDoneBtn () {
        await this.doneBtn.click();
    }

    async validateFirstName (firstName){
        await expect(this.firsNameInput).toHaveText(firstName);
    }

    async validateLastName (lastName) {
        await expect(this.lastNameInput).toHaveText(lastName);
    }
}

module.exports = new ProfilePage();