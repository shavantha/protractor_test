let loginPage = function() {

let userName_input = element(by.id('loginEmail'));
let passWord_input = element(by.id('loginPassword'));
let loginCheck = element(by.id('rememberLoginChk'));
let loginButton = element(by.buttonText('Submit'));

this.get = function(url){
    browser.get(url);
};

this.enterLoginEmail = function(email){
    userName_input.sendKeys(email);
};

this.enterLoginPassword = function(password){
    passWord_input.sendKeys(password);
};

this.clickLoginCheck = function(){
    loginCheck.click();
};

this.clickLoginButton = function(){
    loginButton.click();
};

};
module.exports = new loginPage();