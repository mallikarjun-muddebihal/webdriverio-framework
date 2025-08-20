import { CreatInstance } from "../src/baseSetup";
import { DriverOptions } from "../src/driverOptions";
import testConfig from "../testconfig.json"
describe("Demo Test suite", function() {
    //this.timeout(60000);
    before(async function() {
        let options = new DriverOptions(testConfig);
        await CreatInstance.initBrowser(options);
    })

    after(async function () {
        await CreatInstance.browser.deleteSession();
    });

    describe("Fist Test", function() {
        it("Step: 1 Open app", async function() {
            await CreatInstance.browser.url("https://www.udemy.com");
            await CreatInstance.browser.maximizeWindow();
            let pageTitle = await CreatInstance.browser.getTitle();
            console.log(`Page Title is: ${pageTitle}`);
        })
    });
});
