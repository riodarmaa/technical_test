const { Given, When, Then } = require('@wdio/cucumber-framework');
const product = require('../pageobjects/register.page');


Given(/^User Navigates to the Registration Page$/, async () => {
    await product.navigateToRegistrationPage();
    await product.waitHomepageLoaded();
});

When(/^User input mobile phone/, async () => {
    await product.inputMobilePhone();
  });

When(/^User input email/, async () => {
    await product.inputEmail();
  });

When(/^User input first name/, async () => {
    await product.inputFirstName();
  });

When(/^User input last name/, async () => {
    await product.inputLastName();
  });

When(/^User click button daftar/, async () => {
    await product.buttonDaftar();
  });

Then(/^User Verify Kode OTP Page/, async () => {
    await product.validateTitle();
  });