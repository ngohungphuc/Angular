import { BasketballPage } from './app.po';

describe('basketball App', () => {
  let page: BasketballPage;

  beforeEach(() => {
    page = new BasketballPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
