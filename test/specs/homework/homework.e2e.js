describe('Homework', async () => {

    it('should open page and create screenshot', async () => {

        browser.url('/prihlaseni');
        await browser.saveScreenshot('login_page2.png');
        await browser.pause(5000); 

    });

});
