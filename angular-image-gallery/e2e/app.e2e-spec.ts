import { AngularImageGalleryPage } from './app.po';

describe('angular-image-gallery App', () => {
  let page: AngularImageGalleryPage;

  beforeEach(() => {
    page = new AngularImageGalleryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
