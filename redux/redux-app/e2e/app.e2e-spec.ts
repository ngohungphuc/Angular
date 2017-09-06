import { ReduxAppPage } from './app.po';

describe('redux-app App', () => {
  let page: ReduxAppPage;

  beforeEach(() => {
    page = new ReduxAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
