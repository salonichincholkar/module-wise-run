var assert = require('assert'),
  webdriver = require('selenium-webdriver');

console.log(process.env.JIRA_ID);
//module
describe('Verify setup with Google Search', function () {
  it('test case should work', function () {

    var driver = new webdriver.Builder().
      withCapabilities(webdriver.Capabilities.chrome()).
      build();
    driver.get('http://www.google.com');
    var searchBox = driver.findElement(webdriver.By.name('q'));
    searchBox.sendKeys('selenium node automation');
    searchBox.getAttribute('value').then(function (value) {
      assert.equal(value, 'selenium node automation');
    });
    driver.quit();


  });

  it('static test case check', function () {

    assert.equal('Certificate', 'Certificate');

  });
});