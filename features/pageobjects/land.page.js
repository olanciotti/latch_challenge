const { $ } = require('@wdio/globals')
const Page = require('./page');

class LandPage extends Page {

    get btnGetStarted () {
        return $('//*[@resource-id="com.hdw.james.rider:id/getStartedButton"]');
    }

    async clickBtnGetStarted () {
        await this.btnGetStarted.click();
    }

}

module.exports = new LandPage();