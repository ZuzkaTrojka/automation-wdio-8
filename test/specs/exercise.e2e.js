
import { username, password } from './fixtures.js'

//test 2


describe('Overeni registrace', async () => {

    it('overeni registrovaneho uzivatele ', async () => {

        await browser.reloadSession();
        await browser.url('/registrace');

        const nameField = await $('#name');
        const emailField = await $('#email');
     
        const passwordField = await $('#password');
        const confirmPassword = await $('#password-confirm');
        const buttonField = await $('.btn-primary');
        const navbarRight = await $('.navbar-right')
        const userNameDropdown = $('.navbar-right').$('[data-toggle="dropdown"]');
        
        await nameField.setValue('Epinka Psí');
        await emailField.setValue('Ebinkapinclice123@seznam.cz');
        await passwordField.setValue('Password1');
        await confirmPassword.setValue('Password1');
        await buttonField.click();

        await expect(buttonField).toExist('Tlacitko existuje');
        await expect(buttonField).toBeClickable("tlačítko je kliknutelné");
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
        

        await nameField.setValue("Zuuuuuuzka.Trojanova");
        await passwordField.setValue('Password1');
        await confirmPassword.setValue('Password1');
        await buttonField.click();
        console.log('Upozornení: ' + await $$[Upozorneni.getText()]);
        console.log('Upozornení: ' + await $$[toastMessage.getText()]);


    });

})

// test 4

