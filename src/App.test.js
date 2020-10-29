// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';
//
// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
const assert = require("assert");
const test = require("selenium-webdriver/testing");
const webdriver = require("selenium-webdriver");
const By = require("selenium-webdriver").By;

let browser;

test.describe("Me-page", () => {

    test.beforeEach((done) => {
        this.timeout(20000);
        browser = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.firefox()).build();

        browser.get("http://localhost:3000/");
        done();
    });

    test.afterEach((done) => {
        browser.quit();
        done();
    });

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
        browser.findElement(By.css("h3")).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, target);
            });
        });
    }

    // Test cases

    test.it("Test index", (done) => {
        browser.getTitle().then((title) => {
            assert.equal(title, "Charlottes me-sida");
        });

        browser.findElement(By.css("h3")).then((element) => {
            element.getText().then((text) => {
                assert.equal(text, "Om mig");
            });
        });

        assertH3("Om mig");
        matchUrl("/");


        // browser.getCurrentUrl().then((url) => {
        //     assert.ok(url.endsWith("reports/show/#!/"));
        // });

        done();
    });


});
