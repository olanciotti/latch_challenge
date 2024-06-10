const { $ } = require('@wdio/globals')
const Page = require('./page');


class HomePage extends Page {

    async validatePageTitle(name){
        await expect(await $(`android=new UiSelector().text("Welcome to ${name}!")`)).toBeDisplayed();
    }
}

module.exports = new HomePage();