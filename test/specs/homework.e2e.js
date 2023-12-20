import { username, password, userFullName, generateRandomEmail } from './fixtures.js'
import fs from 'fs';

function getNameField() { return $('#name'); }
function getEmailField() { return $('#email'); }
function getPasswordField() { return $('#password'); }
function getConfirmPasswordField() { return $('#password-confirm'); }
function getButtonField() { return $('.btn-primary'); }
function getRightNavbar() { return $('.navbar-right'); }
function getAllert() { return $('.invalid-feedback'); }
function getToastMessage() { return $('.toast-message'); }
function getUserNameDropdown() { return getRightNavbar().$('[data-toggle="dropdown"]') };


describe('Overeni registrace', async () => {

    beforeEach(async () => {
        await browser.reloadSession();
        await browser.url('/registrace');
    });

    it('Test, který provede registraci uživatele s již existujícím emailem ', async () => {

        await expect(getNameField()).toBeDisplayed();
        await expect(getNameField()).toBeEnabled();

        await getNameField().setValue(userFullName);

        await expect(getEmailField()).toBeDisplayed();
        await expect(getEmailField()).toBeEnabled();

        await getEmailField().setValue(username());
        console.log(username);

        await expect(getPasswordField()).toBeDisplayed();
        await expect(getPasswordField()).toBeEnabled();

        await getPasswordField().setValue(password);

        await expect(getConfirmPasswordField()).toBeDisplayed();
        await expect(getConfirmPasswordField()).toBeEnabled();

        await getConfirmPasswordField().setValue(password);

        await getButtonField().click();

        await expect(getAllert()).toHaveText('Účet s tímto emailem již existuje');
        console.log('Upozornení: ' + await getAllert().getText());

        await expect(getToastMessage()).toHaveText('Některé pole obsahuje špatně zadanou hodnotu');
        console.log('Upozornění: ' + await getToastMessage().getText());

        await expect(await getRightNavbar()).toHaveText('Přihlásit');
        console.log('Políčko obsahuje:' + await getRightNavbar().getText());
    });

    it.only('Test, který zaregistruje nového uživatele', async () => {

        await expect(getNameField()).toBeDisplayed();
        await expect(getNameField()).toBeEnabled();

        await getNameField().setValue(userFullName);

        await expect(getEmailField()).toBeDisplayed();
        await expect(getEmailField()).toBeEnabled();

        await getEmailField().setValue(generateRandomEmail());
        console.log('Vygenerovaný email je:' + generateRandomEmail());

        await expect(getPasswordField()).toBeDisplayed();
        await expect(getPasswordField()).toBeEnabled();

        await getPasswordField().setValue(password);

        await expect(getConfirmPasswordField()).toBeDisplayed();
        await expect(getConfirmPasswordField()).toBeEnabled();

        await getConfirmPasswordField().setValue(password);

        await getButtonField().click();
       
        console.log('User currently logged in: ' + await getUserNameDropdown().getText());
        console.log('User currently logged in: ' + await getUserNameDropdown().isDisplayed());

        afterEach(async () => {
            const logoutLink = $('#logout-link');
            await browser.url('/registrace');
            await getUserNameDropdown().click();
            await logoutLink.click();
            await expect(await getRightNavbar()).toHaveText('Přihásit');
            console.log('Políčko obsahuje:' + await getRightNavbar().getText());
        });
    })
   
});

