export const userFullName = 'Lišáček Admin';
export const username = 'da-app.admin@czechitas.cz';
export const password = 'Czechitas123';
export const spatneHeslo ='1111';
export const expectedApplicationsPageRows = 30;

export function generateRandomEmail() {
    const emailPrefix = "Czechitas";
    const emailDomain = "seznam.cz";
    const randomString = Math.random().toString(36).substring(7);

    const randomEmail = `${emailPrefix}${randomString}@${emailDomain}`;
    return randomEmail;
}
