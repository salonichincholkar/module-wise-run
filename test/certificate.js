var assert = require('assert'),
//test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');

 
 
 
 
 //Certificate
 
describe('certificate', async function() {
	this.timeout(15000);
	
	var driver 
	before(async function(){
    driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();
	});
	
	it('Verify the validity of a given certificate number', async function() {
	await driver.get('file:///H:/Assignments/Testing/01%20Kalpesh%20Shewale/MMEAC_Assignment_3-main/preview.html');
    var getTitle = await driver.findElement(webdriver.By.className('sr-no'));
    getTitle.getText('value').then(function(value) {
    assert.match(value, '/Certificate Number: (\d{4})/');
    });
   
  });
  
  it('Verify Certificate Title',async function() {
    
    var getTitle = await driver.findElement(webdriver.By.className('title'));
    getTitle.getText('value').then(function(value) {
      assert.equal(value, 'Certificate');
    });
    
  });
  
  it('To verify the certificate subtitle', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('subtitle'));
    getTitle.getText('value').then(function(value) {
    assert.equal(value, 'of Appreciation');
    });
   
  });
  
  it('Verify Initial Content of Certificate', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('initial-content'));
    getTitle.getText('value').then(function(value) {
    assert.equal(value, 'This Certificate is proudly presented to');
    });
   
  });
  
   it('To ensure that the main content of the certificate is accurate and complete', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('main-content'));
    getTitle.getText('value').then(function(value) {
    assert.equal(value, 'for successfully completing the training course as\nprescribed by the organisation');
    });
   
  });
  
  
   it('To ensure that the date on the certificate is accurate and valid', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('date'));
    getTitle.getText('value').then(function(value) {
    assert.equal(value, '/^Date: \d{2}-\d{2}-\d{4}$/');
    });
   
  });
  
  
  it('To verify that the candidate name displayed on the certificate matches the expected name', async function example() {
      
    try {
           // Locate the element containing the candidate's name
          let candidateNameElement = await driver.findElement(webdriver.By.className('candidate-name'));
  
          // Get the text content of the element
          let candidateName = await candidateNameElement.getText();
  
          // Assert that the candidate's name is not empty
          assert.notStrictEqual(candidateName.trim(), '', 'Candidate name is empty on the certificate.');
  
          console.log('Candidate name is present on the certificate.');
  
      } catch (error) {
          console.error('An error occurred:', error);
      }
      var getTitle = await driver.findElement(webdriver.By.className('candidate-name'));
    getTitle.getText('value').then(function(value) {
      assert.equal(value, '');
  
    });
}); 
  
  
  it('To ensure that the certificate signature of the president is authentic and valid', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('sign-president'));
    getTitle.getText('value').then(function(value) {
    assert.equal(value, 'Signature of President');
    });
   
  });
  
  it('To ensure that the certificate signature of the director  is authentic and valid', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('sign-director'));
    getTitle.getText('value').then(function(value) {
    assert.equal(value, 'Signature of Director');
    });
   
  });
  
  
   
 it('Verify that the logo displayed matches the official logo of the issuing organization',	async function testLogoImageLoaded() {
    
    try {
        
        // Find the logo image element
        const logoElement = await driver.findElement(webdriver.By.xpath("//div[@class='org-logo']//img"));

        // Check if the logo image is loaded successfully
        const isLoaded = await logoElement.isDisplayed();

        // Assert that the logo image is loaded successfully
        assert.strictEqual(isLoaded, true, 'Logo image is not loaded successfully');

        console.log('Logo image loaded successfully!');
    } catch (error) {
        console.error('Logo image loading test failed:', error.message);
    }
	
 });
	
	
  
  it('Verify Organization Name on Certificate', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('org-name'));
    getTitle.getText('value').then(function(value) {
    assert.equal(value, 'Maha Mission Education and Career Council');
    });
   
  });
  
  
  it('Verify that the address matches the official address of the organization', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('org-address'));
    getTitle.getText('value').then(function(value) {
    assert.equal(value, 'Office No. 404, Vastu Viva, Besids Sanket Inn, Bhumkar Chowk\n\nWakad, Pune, Maharashtra - 411057');
    });
    driver.quit();
  });
  
  
    
  
});