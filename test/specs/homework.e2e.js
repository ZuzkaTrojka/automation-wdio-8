import { username, password, userFullName, generateRandomEmail, spatneHeslo } from './fixtures.js'
import LoginPage from '../pageObjectModels.js';

function getRightNavbar() { return $('.navbar-right'); }
function getAllert() { return $('.invalid-feedback'); }
function getToastMessage() { return $('.toast-message'); }

describe('Overeni registrace', async () => {

    beforeEach(async () => {
        await LoginPage.open();
        expect(await LoginPage.NameField).toBeDisplayed();
        expect(await LoginPage.NameField).toBeEnabled();
        expect(await LoginPage.emailField).toBeEnabled();
        expect(await LoginPage.passwordField).toBeDisplayed();
        expect(await LoginPage.passwordField).toBeEnabled();
        expect(await LoginPage.ConfirmPasswordField).toBeDisplayed();
        expect(await LoginPage.ConfirmPasswordField).toBeEnabled();
    });

    it('Test, který provede registraci uživatele s již existujícím emailem ', async () => {
        await LoginPage.login(userFullName, username, password);
        await LoginPage.getFieldError().getText;
        await LoginPage.getToastMessage();
        await expect(await getRightNavbar()).toHaveText('Přihlásit');
    });

    it('Test, který zaregistruje nového uživatele', async () => {
        // v testu je účelně nastavena asertace na "username"
        await LoginPage.login(userFullName, generateRandomEmail(), password);
        console.log('Náhodně vygenerovaný email je:' + generateRandomEmail());
        await expect(await LoginPage.getCurrentUser()).toEqual(userFullName);
        await LoginPage.logout()
    })
    it('registrace s nevyhovujicim heslem ', async () => {

        await LoginPage.login(userFullName, generateRandomEmail(), spatneHeslo)
        console.log('Náhodně vygenerovaný email je:' + generateRandomEmail());
        await expect(getToastMessage()).toHaveText('Některé pole obsahuje špatně zadanou hodnotu');
        await expect(getAllert()).toHaveText('Heslo musí obsahovat minimálně 6 znaků, velké i malé písmeno a číslici');
        await expect(getRightNavbar()).toHaveText('Přihlásit', { timeout: 6000 });
    });
    afterEach(async () => {
        await LoginPage.open();
        await LoginPage.login(userFullName, generateRandomEmail(), password);
        await expect(await LoginPage.getCurrentUser()).toEqual(userFullName);
        await LoginPage.logout()
        await expect(await LoginPage.userNameDropdown.isDisplayed()).toBeFalsy();
        await expect(await LoginPage.navbarRight.getText()).toEqual('Přihlásit');

    });
});



