require('dotenv').config();
const { faker } = require('@faker');


// Register Page
const txtDaftar = $("//h1[contains(text(),'Daftar')]")
const txtMobilePhone = $("//input[@name='mobilePhone']")
const txtEmail = $("//input[@name='email']")
const txtFirstName = $("//input[@name='firstName']")
const txtLastName = $("//input[@name='lastName']")
const btnDaftar = $("//button[@data-button-name='register-new']")
const titleVerify = $("//h1[contains(text(),'Verifikasi No. Handphone')]")
const fakeFirstName = () => faker.name.findName();
const fakeLastName = () => faker.name.lastName();
const fakeEmail = () => `${faker.name.firstName()}@1secmail.com`;
const fakePhone = faker.phone.phoneNumber()


class RegisterPage {
    constructor() {
        this.navigateToRegistrationPage = async () => {
            await browser.url(process.env.BASE_URL);
          };

        this.waitHomepageLoaded = async () => {
            browser.pause(2000);
            await txtDaftar.waitForExist({ timeout: 50000 });
            if (await txtDaftar.isExisting()) {
                await browser.maximizeWindow();
            }
          };

        this.inputMobilePhone = async () => {
            await txtMobilePhone.waitForExist({ timeout: 50000 });
            await txtMobilePhone.click();
            await txtMobilePhone.setValue(fakePhone);
            await browser.pause(1000);
          };

        this.inputEmail = async () => {
            await txtEmail.waitForExist({ timeout: 50000 });
            await txtEmail.click();
            await txtEmail.setValue(fakeEmail);
            await browser.pause(1000);
          };
        
        this.inputFirstName = async () => {
            await txtFirstName.waitForExist({ timeout: 50000 });
            await txtFirstName.click();
            await txtFirstName.setValue(fakeFirstName);
            await browser.pause(1000);
          };

        this.inputLastName = async () => {
            await txtLastName.waitForExist({ timeout: 50000 });
            await txtLastName.click();
            await txtLastName.setValue(fakeLastName);
            await browser.pause(1000);
          };

        this.buttonDaftar = async () => {
            await btnDaftar.waitForExist({ timeout: 50000 });
            await btnDaftar.click();
          };

        this.validateTitle = async () => {
            await titleVerify.waitForExist({ timeout: 50000 });
          };

    }
}

module.exports = new RegisterPage();
