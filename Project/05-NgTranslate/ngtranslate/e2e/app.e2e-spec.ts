import { NgtranslatePage } from './app.po';

describe('ngtranslate App', function() {
  let page: NgtranslatePage;

  beforeEach(() => {
    page = new NgtranslatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
