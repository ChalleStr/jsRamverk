const assert = require("assert");
const test = require("selenium-webdriver/testing");
const webdriver = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");
const By = require("selenium-webdriver").By;

let browser;

function goToNavLink(target) {
    browser.findElement(By.linkText(target)).then(function(element) {
        element.click();
    });
}

function matchUrl(target) {
    browser.getCurrentUrl().then(function(url) {
        assert.ok(url.endsWith(target));
    });
}

function assertH3(target) {
    browser.findElement(By.css("h1")).then(function(element) {
        element.getText().then(function(text) {
            assert.equal(text, target);
        });
    });
}

test.describe("Me-page", function() {

    this.timeout(20000);

    test.beforeEach(function(done) {
        browser = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.firefox())
            .setFirefoxOptions(new firefox.Options().headless())
            .forBrowser("firefox")
            .build();

        browser.get("https://charlottestrand.me/");
        done();
    });

    afterEach(function(done) {
        browser.quit();
        //done();
    });



    // Test cases

    test.it("Test index", function(done) {
        let promise = browser.getTitle();

        promise.then(function(title) {
            assert.equal(title, "Charlottes me-sida");
        });

        browser.getTitle().then(function(title) {
            assert.equal(title, "Charlottes me-sida");
        });

        // browser.findElement(By.css("h3"))
        // .then((element) => {
        //     element.getText()
        //     .then((text) => {
        //         assert.equal(text, "Om mig");
        //     });
        // });

        assertH3("Om mig");
        matchUrl("/");


        // browser.getCurrentUrl().then((url) => {
        //     assert.ok(url.endsWith("reports/show/#!/"));
        // });

        done();
    });


});
