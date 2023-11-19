/**
 * Lesson 1: First running code
 */
describe('Czechitas Login Page', async () => {

    it('should open login page', async () => {
        await browser.url('/prihlaseni');
        await browser.reloadSession();
        const windowSize = await browser.getWindowSize();
        console.log(windowSize);

        const allCookies = await browser.getCookies();
        console.log(allCookies);

        await browser.saveScreenshot('login_page.png');

        await browser.pause(5000);

    });

});
