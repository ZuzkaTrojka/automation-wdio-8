//test 2

xdescribe('Overeni registrace - asertace ', async () => {

    beforeEach(async () => {
        await browser.reloadSession();
        await browser.url('/prihlaseni');
    });

    it('Assertace - overeni registrovaneho uzivatele ', async () => {

        await browser.reloadSession();
        await browser.url('/registrace');

        const nameField = await $('#name');
        await expect(nameField).toBeDisplayed();
        await expect(nameField).toBeEnabled();

        const emailField = await $('#email');
        await expect(emailField).toBeDisplayed();
        await expect(emailField).toBeEnabled();

        const passwordField = await $('#password');
        await expect(passwordField).toBeDisplayed();
        await expect(passwordField).toBeEnabled();

        const confirmPassword = await $('#password-confirm');
        await expect(confirmPassword).toBeDisplayed();
        await expect(confirmPassword).toBeEnabled();

        const buttonField = await $('.btn-primary');
        await expect(buttonField).toBeDisplayed();
        await expect(buttonField).toBeEnabled();

        const userNameDropdown = $('.navbar-right').$('[data-toggle="dropdown"]');

        await nameField.setValue('Ebinka Psice');
        await emailField.setValue('Ebinkapinclice12345678901@seznam.cz');
        await passwordField.setValue('Password1');
        await confirmPassword.setValue('Password1');
        await buttonField.click();
        await expect(userNameDropdown).toHaveText('Ebinka Psice');

        //console.log('User currently logged in: ' + await userNameDropdown.getText());

    });

})

// test 3

xdescribe('Overeni registrace', async () => {

    beforeEach(async () => {
        await browser.reloadSession();
        await browser.url('/prihlaseni');
    });

    it('overeni registrace jiz existujiciho emailu ', async () => {

        await browser.reloadSession();
        await browser.url('/registrace');

        const nameField = await $('#name');
        const emailField = await $('#email');
        const passwordField = await $('#password');
        const confirmPassword = await $('#password-confirm');
        const buttonField = await $('.btn-primary');
        const Upozorneni = $('.invalid-feedback')
        const toastMessage = $('.toast-message');
        const userNameDropdown = $('.navbar-right').$('[data-toggle="dropdown"]');
        const navbarRight = $('.navbar-right')

        await nameField.setValue("Zuuuuuuzka.Trojanova");
        await emailField.setValue('Ebinkapsi@seznam.cz')
        await passwordField.setValue('Password1');
        await confirmPassword.setValue('Password1');
        await buttonField.click();
        await expect(navbarRight).toHaveText('Přihlásit', { timeout: 5000 });
        await expect(Upozorneni).toHaveText('Účet s tímto emailem již existuje');
        await expect(toastMessage).toHaveText('Některé pole obsahuje špatně zadanou hodnotu');

        console.log('Upozornění: ' + await Upozorneni.getText());
        console.log('Toast message: ' + await toastMessage.getText());


    });

})

describe('Overeni registrace', async () => {

    beforeEach(async () => {
        await browser.reloadSession();
        await browser.url('/prihlaseni');
        expect($('#H1').toHaveText('Přihldfafášení'));

    });

    it('registrace s nevyhovujicim heslem ', async () => {

        await browser.reloadSession();
        await browser.url('/registrace');

        const nameField = await $('#name');
        await expect(nameField).toBeDisplayed();

        const emailField = await $('#email');
        await expect(emailField).toBeDisplayed();

        const passwordField = await $('#password');
        await expect(emailField).toBeDisplayed();
        const confirmPassword = await $('#password-confirm');
        await expect(emailField).toBeDisplayed();
        const buttonField = await $('.btn-primary');
        await expect(buttonField).toHaveText('Zaregistrovat');
        const Upozorneni = $('.invalid-feedback');
        const toastMessage = $('.toast-message');
        const navbarRight = $('.navbar-right');
        await nameField.setValue("Zuzka.Trojanova");
        await emailField.setValue("Ebinka2121@czechitas.cz");
        await passwordField.setValue('1111');
        await confirmPassword.setValue('1111');
        await buttonField.click();
        await expect(navbarRight).toHaveText('Přihlásit', { timeout: 6000 });
        await expect(Upozorneni).toHaveText('Heslo musí obsahovat minimálně 6 znaků, velké i malé písmeno a číslici');
        await expect(toastMessage).toHaveText('Některé pole obsahuje špatně zadanou hodnotu');
        //console.log('Upozornení: ' + await Upozorneni.getText());
        //console.log('Upozornění: ' + await toastMessage.getText());
    });

})
// test 4
