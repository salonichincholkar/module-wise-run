var assert = require('assert'),
//test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');


//Letter

describe('Letter', async function() {
	this.timeout(15000);
	
	var driver 
	before(async function(){
    driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();
	});
	
	it('Check Presence of Company Name in Letter', async function() {
	await driver.get('file:///H:/Assignments/Selenium/Letter%20Selenium/04%20Letter%20Head/sample-code/preview.html');
    var getTitle = await driver.findElement(webdriver.By.className('letter-org-name'));
    getTitle.getText('value').then(function(value) {
    assert.equal(value, 'YOUR COMPANY NAME');
	 
    });
    
  });
  
  
  it('Letter Organization Details Verification', async function() {
	var getTitle = await driver.findElement(webdriver.By.className('letter-org-details'));
    getTitle.getText('value').then(function(value) {
    assert.equal(value, '');
    });
    
  });
   
 
 
 
 it('Verify Letter Organization Logo Display', async function() {
	var getTitle = await driver.findElement(webdriver.By.className('letter-org-logo'));
    getTitle.getText('value').then(function(value) {
    assert.equal(value, '');
    });
    
  });
  
  
  it('Verify Letter Organization Logo Display',	async function testLogoImageLoaded() {
    
    try {
        
        // Find the logo image element
        const logoElement = await driver.findElement(webdriver.By.xpath("//div[@class='letter-org-logo']//img"));

        // Check if the logo image is loaded successfully
        const isLoaded = await logoElement.isDisplayed();

        // Assert that the logo image is loaded successfully
        assert.strictEqual(isLoaded, true, 'Logo image is not loaded successfully');

        console.log('Logo image loaded successfully!');
    } catch (error) {
        console.error('Logo image loading test failed:', error.message);
    }
	
 });
    
it('To check the validity of a letter reference number', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('letter-ref'));
    getTitle.getText('value').then(function(value) {
    //assert.equal(value, 'Ref. No:');
	assert.match(/Ref. No:\s*(.+)/);
    });
    
  });
  
  
  it('To confirm that the date on the letter is accurate', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('letter-date'));
    getTitle.getText('value').then(function(value) {
    //assert.equal(value, 'Date:');
	assert.match(/^Date: \d{2}-\d{2}-\d{4}$/);
    });
    
  });
  
  
  it('To verify that the body of the letter is correctly addressed to the recipient', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('letter-body-to'));
    getTitle.getText('value').then(function(value) {
    //assert.equal(value, 'To,');
	assert.match(/To,\s*/);
    });
    
  });
  
  
   it('Check Letter Body and Subject', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('letter-body-subject'));
    getTitle.getText('value').then(function(value) {
    //assert.equal(value, '/^Subject:\s*/');
	 assert.match(value, /^Subject:\s*/);
    });
    
  });
  
  
  
  
  
   it('Verify Letter Salutation', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('letter-body-salutation'));
    getTitle.getText('value').then(function(value) {
   // assert.equal(value, 'Dear');
   assert.match(/^(Dear)/);
    });
    
  });
  
  
   it('Verify Letter Body Message', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('letter-body-message'));
    getTitle.getText('value').then(function(value) {
    assert.equal(value, '');
    });
    
  });
  
  
   it('Verify that the body sign in the letter is correctly displayed', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('letter-body-sign'));
    getTitle.getText('value').then(function(value) {
    assert.equal(value, '');
    });
    
  });
  
  
  
   it('The website should be present in the footer of the letter', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('letter-org-website'));
    getTitle.getText('value').then(function(value) {
    assert.equal(value, 'WWW.WEBTOUCHINDIA@CO.IN');
    });
    
  });
  
  
  it('The phone should be present in the footer of the letter', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('letter-org-phone'));
    getTitle.getText('value').then(function(value) {
    assert.equal(value, '');
    });
    
  });
  
  
  it('The email should be present in the footer of the letter', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('letter-org-email'));
    getTitle.getText('value').then(function(value) {
    assert.equal(value, '');
    });
    
  });
  
  
  it('The address should be present in the footer of the letter', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('letter-org-address'));
    getTitle.getText('value').then(function(value) {
    assert.equal(value, '');
    });
    driver.quit();
  });
 });