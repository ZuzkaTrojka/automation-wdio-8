import { username, password, userFullName, generateRandomEmail, spatneHeslo } from './fixtures.js'
import RegistrationPage from '../pageObjectModels.js';

function getRightNavbar() { return $('.navbar-right'); }
function getAllert() { return $('.invalid-feedback'); }
function getToastMessage() { return $('.toast-message'); }

describe('Overeni registrace', async () => {

    beforeEach(async () => {
        await RegistrationPage.open(); 
    });

    it('Test, který provede oveření viditelnosti registračního formuláře', async () => {
        expect(await RegistrationPage.NameField).toBeDisplayed();
        expect(await RegistrationPage.NameField).toBeEnabled();
        expect(await RegistrationPage.emailField).toBeEnabled();
        expect(await RegistrationPage.passwordField).toBeDisplayed();
        expect(await RegistrationPage.passwordField).toBeEnabled();
        expect(await RegistrationPage.ConfirmPasswordField).toBeDisplayed();
        expect(await RegistrationPage.ConfirmPasswordField).toBeEnabled();
    });

    it('Test, který provede registraci uživatele s již existujícím emailem ', async () => {
        await RegistrationPage.login(userFullName, username, password);
        await RegistrationPage.getFieldError().getText;
        await RegistrationPage.getToastMessage();
        await expect(await getRightNavbar()).toHaveText('Přihlásit');
    });

    it('Test, který zaregistruje nového uživatele', async () => {
        // v testu je účelně nastavena asertace na "username"
        await RegistrationPage.login(userFullName, generateRandomEmail(), password);
        console.log('Náhodně vygenerovaný email je:' + generateRandomEmail());
        await expect(await RegistrationPage.getCurrentUser()).toEqual(userFullName);
        await RegistrationPage.logout()
    })
    it('registrace s nevyhovujicim heslem ', async () => {

        await RegistrationPage.login(userFullName, generateRandomEmail(), spatneHeslo)
        console.log('Náhodně vygenerovaný email je:' + generateRandomEmail());
        await expect(getToastMessage()).toHaveText('Některé pole obsahuje špatně zadanou hodnotu');
        await expect(getAllert()).toHaveText('Heslo musí obsahovat minimálně 6 znaků, velké i malé písmeno a číslici');
        await expect(getRightNavbar()).toHaveText('Přihlásit', { timeout: 6000 });
    });
    
    it('Test, který provede ověření odhlášení uživatele',async () => {
        await RegistrationPage.open();
        await RegistrationPage.login(userFullName, generateRandomEmail(), password);
        await expect(await RegistrationPage.getCurrentUser()).toEqual(userFullName);
        await RegistrationPage.logout()
        await expect(await RegistrationPage.userNameDropdown.isDisplayed()).toBeFalsy();
        await expect(await RegistrationPage.navbarRight.getText()).toEqual('Přihlásit');
    });
});



