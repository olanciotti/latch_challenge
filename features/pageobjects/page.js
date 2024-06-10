//import { browser } from '@wdio/globals'
const browser = ('@wdio/globals');
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
//export default class Page {
    module.exports = class Page{
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open () {
        console.log('App launched successfully');
        browser.launchApp();
    }
}
