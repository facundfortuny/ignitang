import { FlickrPage } from './app.po';

describe('flickr App', () => {
  let page: FlickrPage;

  beforeEach(() => {
    page = new FlickrPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
