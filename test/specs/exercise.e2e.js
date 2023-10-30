describe('Czechitas Login Page', async () => {

    it('examples of selectors', async () => {

        await browser.reloadSession();
        await browser.url('/registrace');
       
        const nameField = await $('#name');
        console.log(await nameField.getHTML());

        const emailField= await $('#email');
        console.log (await emailField.getHTML());

        const passwordField =await $('#password')
        console.log (await passwordField.getHTML());

        const confirmPassword =await $('#password-confirm');
        console.log (await confirmPassword.getHTML());

        const buttonField =await $('.btn-primary');
        console.log (await buttonField.getHTML());


    });

});