import { InitAppPage } from './app.po';

describe('InitApp App', () => {
    let page: InitAppPage;

    beforeEach(() => {
        page = new InitAppPage();
    });

    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Welcome to app!!');
    });
});
