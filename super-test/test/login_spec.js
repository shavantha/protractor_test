let loginPage = require('../page-objects/loginPage')
describe('Super hero test', function(){

    beforeAll(function(){
        browser.ignoreSynchronization = true
        browser.waitForAngularEnabled(false);
        loginPage.get('http://localhost:8000/index.html');
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Welcome. Please Log In.');
    });


    it('load the login page and submit credentials', function() { 

        //enter test to login page
        loginPage.enterLoginEmail('shavantha@gmail.com')
        loginPage.enterLoginPassword('password')
        loginPage.clickLoginCheck()
        loginPage.clickLoginButton()
        browser.sleep('10000');
    });

    this.afterAll(function() {

    });



})
