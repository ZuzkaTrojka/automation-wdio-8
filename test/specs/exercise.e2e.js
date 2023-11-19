//test 2

xdescribe('Overeni registrace - asertace ', async () => {

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
        await emailField.setValue('Ebinkapinclice1234567890@seznam.cz');
        await passwordField.setValue('Password1');
        await confirmPassword.setValue('Password1');
        await buttonField.click();
        await expect(userNameDropdown).toHaveText('Ebinka Psice');

        //console.log('User currently logged in: ' + await userNameDropdown.getText());

    });

})

// test 3

describe('Overeni registrace', async () => {

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

// test 4

