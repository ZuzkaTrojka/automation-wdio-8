//úkol 1 lekce 

xdescribe('Homework', async () => {

    it('should open page and create screenshot', async () => {

        browser.url('/prihlaseni');
        await browser.saveScreenshot('login_page2.png');
        await browser.pause(5000);

    });

});
// úkol 2 lekce 
xdescribe('Czechitas Login Page', async () => {

    it('examples of selectors', async () => {

        await browser.reloadSession();
        await browser.url('/registrace');

        const nameField = await $('#name');
        console.log(await nameField.getHTML());

        const emailField = await $('#email');
        console.log(await emailField.getHTML());

        const passwordField = await $('#password')
        console.log(await passwordField.getHTML());

        const confirmPassword = await $('#password-confirm');
        console.log(await confirmPassword.getHTML());

        const buttonField = await $('.btn-primary');
        console.log(await buttonField.getHTML());
    });

})

// úkol 3 lekce 

xdescribe('Czechitas Login Page', async () => {

    it('examples of selectors', async () => {

        await browser.reloadSession();
        await browser.url('/registrace');

        const nameField = await $('#name');
        const emailField = await $('#email');
        const passwordField = await $('#password');
        const confirmPassword = await $('#password-confirm');
        const buttonField = await $('.btn-primary');

        await nameField.setValue('Zuzana Trojanová');
        await emailField.setValue('Zuzka.Trojanova@gmail.com');
        await passwordField.setValue('Hesloooo1');
        await confirmPassword.setValue('Hesloooo1');
        await buttonField.click();
        await browser.pause(5000)

    });

})
// úkol 4 lekce 
//test 1. 
xdescribe('Czechitas Login Page', async () => {

    it('overeni zobrazení fomuláře ', async () => {

        await browser.reloadSession();
        await browser.url('/registrace');

        const nameField = await $('#name');
        const emailField = await $('#email');
        const passwordField = await $('#password');
        const confirmPassword = await $('#password-confirm');
        const buttonField = await $('.btn-primary');

        console.log('nameField is displayed: ' + await nameField.isDisplayed());
        console.log('nameField is enabled: ' + await nameField.isEnabled());
        console.log('Email field is displayed: ' + await emailField.isDisplayed());
        console.log('Email field is enabled: ' + await emailField.isEnabled());
        console.log('passwordField is displayed: ' + await passwordField.isDisplayed());
        console.log('passwordField is enabled: ' + await passwordField.isEnabled());
        console.log('confirmpassword is displayed: ' + await confirmPassword.isDisplayed());
        console.log('confirmpassword is enabled: ' + await confirmPassword.isEnabled());
        console.log('buttonField is displayed: ' + await buttonField.isDisplayed());
        console.log('buttonField is enabled: ' + await buttonField.isEnabled());
    });

})
//test 2

xdescribe('Overeni registrace', async () => {

    it('overeni registrovaneho uzivatele ', async () => {

        await browser.reloadSession();
        await browser.url('/registrace');

        const nameField = await $('#name');
        const emailField = await $('#email');
     
        const passwordField = await $('#password');
        const confirmPassword = await $('#password-confirm');
        const buttonField = await $('.btn-primary');
        const navbarRight = $('.navbar-right')
        const userNameDropdown = $('.navbar-right').$('[data-toggle="dropdown"]');
        
        await nameField.setValue('Epinka Psí');
        await emailField.setValue('Ebinkapinclice@seznam.cz');
        await passwordField.setValue('Password1');
        await confirmPassword.setValue('Password1');
        await buttonField.click();
        console.log('User currently logged in: ' + await userNameDropdown.getText());
    });

})


// test 3

xdescribe('Overeni registrace', async () => {

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

        await nameField.setValue("Zuzka.Trojanova");
        await emailField.setValue("Ebinka@czechitas.cz");
        await passwordField.setValue('Password1');
        await confirmPassword.setValue('Password1');
        await buttonField.click();
        console.log('Upozornení: ' + await $$[Upozorneni.getText()]);
        console.log('Upozornení: ' + await $$[toastMessage.getText()]);

    });

})

// test 4
xdescribe('Overeni registrace', async () => {

    it('registrace s nevyhovujicim heslem ', async () => {

        await browser.reloadSession();
        await browser.url('/registrace');

        const nameField = await $('#name');
        const emailField = await $('#email');
        const passwordField = await $('#password');
        const confirmPassword = await $('#password-confirm');
        const buttonField = await $('.btn-primary');
        const Upozorneni = $('.invalid-feedback')
        const toastMessage = $('.toast-message');


        await nameField.setValue("Zuzka.Trojanova");
        await emailField.setValue("Ebinka1@czechitas.cz");
        await passwordField.setValue('1111');
        await confirmPassword.setValue('1111');
        await buttonField.click();
        console.log('Upozornení: ' + await Upozorneni.getText());
        console.log('Upozornění: ' + await toastMessage.getText());
    });

})

//domaci ukol 5
//test 1

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
xdescribe('Overeni registrace', async () => {

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
